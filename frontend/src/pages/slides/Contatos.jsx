import React, { useState, useContext, Suspense, lazy } from "react";
import axios from "axios";
import icons from "../../utils/importIcons.jsx";
import ContentWrapper from "../../components/reusables/ContentWrapper.jsx";
import Divider from "../../components/reusables/Divider.jsx";
import InputRender from "../../components/reusables/InputRender.jsx";
import PrimaryButton from "../../components/reusables/PrimaryButton.jsx";
import { SlideContext } from "../../context/SlideContext.jsx";

const CustomAlertModal = lazy(() =>
  import("../../components/reusables/CustomAlertModal.jsx")
);

const iconConfigurations = [
  {
    filePath: icons.WhatsappIcon,
    link: "https://wa.me/5582996530772",
  },
  {
    filePath: icons.GithubIcon,
    link: "https://github.com/MateusGonzag",
  },
  {
    filePath: icons.IgIcon,
    link: "https://instagram.com/mateus_.gonzaga?igshid=NTc4MTIwNjQ2YQ==",
  },
  {
    filePath: icons.LinkedinIcon,
    link: "https://www.linkedin.com/in/mateusgonzagadev",
  },
];

const SocialIcons = () => {
  return (
    <div className="relative col-span-2 flex h-full w-full flex-row items-center justify-between px-2 pb-4 lg:col-span-1">
      {iconConfigurations.map((icon, index) => {
        const { link } = icon;
        const IconComponent = icon.filePath;

        return (
          <div
            key={index}
            className="relative flex h-12 w-16 items-center justify-center rounded-[5px] bg-primary duration-200 lg:mt-14 md:h-28 md:w-32 lg:hover:scale-110"
          >
            <a href={link} target="_blank" rel="noopener noreferrer">
              <IconComponent className="h-7 w-7 fill-bgColorLIGHT dark:fill-bgColorDARK md:h-12 md:w-12" />
            </a>
          </div>
        );
      })}
    </div>
  );
};

const Contacts = () => {
  const [name, setName] = useState("");
  const [emails, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [number, setNumber] = useState("");
  const [numberPermition, setNumberPermition] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertModalOpen, setAlertModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { translations } = useContext(SlideContext);

  const handleCloseAlertModal = () => {
    setAlertModalOpen(false);
  };

  const handleNumberChange = (e) => {
    const formattedNumber = e.target.value.replace(/\D/g, "");
    const ddd = formattedNumber.substring(0, 2);
    const firstPart = formattedNumber.substring(2, 7);
    const secondPart = formattedNumber.substring(7, 11);

    let formattedValue = "";

    if (secondPart) {
      formattedValue = `(${ddd}) ${firstPart}-${secondPart}`;
    } else if (firstPart) {
      formattedValue = `(${ddd}) ${firstPart}`;
    } else if (ddd) {
      formattedValue = `(${ddd}`;
    }

    setNumber(formattedValue);
    setNumberPermition(formattedValue.length === 15);
  };

  const verifyEmail = () => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(emails);
  };

  const handleSubmit = async () => {
    setIsLoading(true);

    try {
      await axios.post("/send-email", { name, email, message, number });
      setAlertMessage(translations.modalMessages.success);
      setName("");
      setEmail("");
      setMessage("");
      setNumber("");
      setNumberPermition(true);
    } catch (error) {
      setAlertMessage(translations.modalMessages.failure);
    } finally {
      setIsLoading(false);
      setAlertModalOpen(true);
    }
  };

  const submitPermission = (event) => {
    event.preventDefault();

    if (!name) {
      setAlertMessage(translations.modalMessages.nameError);
    } else if (!numberPermition && !verifyEmail()) {
      setAlertMessage(translations.modalMessages.contactError);
    } else if (!message) {
      setAlertMessage(translations.modalMessages.messageError);
    } else {
      handleSubmit();
      return;
    }

    setAlertModalOpen(true);
  };

  const inputConfigurations = [
    {
      label: translations.emailFields.name,
      placeholder: translations.emailPlaceholders.name,
      type: "text",
      id: "name",
      value: name,
      onChange: (e) => setName(e.target.value),
      orderGrid: "col-span-2 lg:col-span-1",
      typeInput: "input",
    },
    {
      label: translations.emailFields.phone,
      placeholder: "(xx) xxxxx-xxxx",
      type: "text",
      id: "number",
      value: number,
      onChange: handleNumberChange,
      orderGrid: "",
      typeInput: "input",
    },
    {
      label: "E-mail",
      placeholder: "seuEmail@email.com",
      type: "text",
      id: "email",
      value: emails,
      onChange: (e) => setEmail(e.target.value),
      orderGrid: "",
      typeInput: "input",
    },
    {
      label: translations.emailFields.message,
      placeholder: translations.emailPlaceholders.message,
      type: "text",
      id: "message",
      value: message,
      onChange: (e) => setMessage(e.target.value),
      orderGrid: "row-span-2 col-span-2 pb-4 lg:pb-5 lg:col-span-1",
      typeInput: "textarea",
      button: (
        <PrimaryButton
          customClassName={`w-28 h-9 ${isLoading ? "mr-6" : "mr-3"} lg:w-32 lg:h-12 self-end -mt-11 lg:-mt-16 lg:mr-6`}
          type="submit"
          disabled={isLoading}
          icon={<icons.SendIcon className="fill-textColorDARK" />}
        >
          {isLoading ? translations.emailSending : translations.emailButton}
        </PrimaryButton>
      ),
    },
  ];

  return (
    <ContentWrapper optionScroll={false}>
      <Divider customClassName="w-full lg:mt-8">
        {translations.emailFields.title}
      </Divider>
      <div className="h-full w-full p-3 lg:pb-14 lg:px-14">
        <InputRender
          inputConfigurations={inputConfigurations}
          submitPermission={submitPermission}
        >
          <SocialIcons />
        </InputRender>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <CustomAlertModal
          isOpen={alertModalOpen}
          message={alertMessage}
          onRequestClose={handleCloseAlertModal}
        />
      </Suspense>
    </ContentWrapper>
  );
};

export default Contacts;
