from flask import Flask, request
from flask_cors import CORS
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

app = Flask(__name__)
CORS(app, resources={r"/send-email": {"origins": "http://localhost:5173"}})

@app.route('/')
def index():
    return app.send_static_file('index.html')

@app.route('/send-email', methods=['POST'])
def enviar_email():
    # Obtém os dados do formulário
    nome = request.json['name']
    numero = request.json['number']
    email = request.json['email']
    mensagem = request.json['message']

    # Configurações do servidor SMTP
    smtp_host = 'smtp.office365.com'
    smtp_port = 587
    smtp_usuario = 'mateusgonzagdev@outlook.com'
    smtp_senha = 'Mateusjose147'
    email_destinatario = 'mateusgonzagdev@gmail.com'

    # Informações do remetente e destinatário
    remetente = smtp_usuario
    destinatario = email_destinatario

    # Objeto de mensagem
    msg = MIMEMultipart()
    msg['From'] = remetente
    msg['To'] = destinatario
    msg['Subject'] = 'Mensagem de Contato'

    # Corpo da mensagem
    corpo_mensagem = f"""
    Nome: {nome}
    ---
    Numero: {numero}
    ---
    Email: {email}
    ---
    Mensagem: {mensagem}
    """

    msg.attach(MIMEText(corpo_mensagem, 'plain'))

    # Conexão com o servidor SMTP
    try:
        server = smtplib.SMTP(smtp_host, smtp_port)
        server.starttls()
        server.login(smtp_usuario, smtp_senha)
        server.send_message(msg)
        server.quit()
        
        return 'E-mail enviado com sucesso!', 200
    except Exception as e:
        print(f'Erro ao enviar e-mail: {str(e)}')
        return 'Erro ao enviar e-mail', 500

if __name__ == '__main__':
    app.run(debug=True)
