import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './main.css'
import axios from 'axios';
import { SlideProvider } from "./context/SlideContext.jsx";

axios.defaults.baseURL = 'http://localhost:5000';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <SlideProvider>
    <App />
  </SlideProvider>
  </React.StrictMode>,
)
