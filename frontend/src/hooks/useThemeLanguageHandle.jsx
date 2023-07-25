import { useEffect, useContext } from "react";
import { SlideContext } from "../context/SlideContext";
import en from "../locales/en.json";
import pt from "../locales/pt.json";

const useThemeLanguageHandle = () => {
  const { setTheme, setLanguage, language, setTranslations } =
    useContext(SlideContext);
  useEffect(() => {
    const userLanguage = localStorage.getItem("language");
    if (userLanguage) {
      setLanguage(userLanguage);
    } else {
      const userDetectedLanguage = navigator.language || navigator.userLanguage;
      setLanguage(userDetectedLanguage);
      localStorage.setItem("language", userDetectedLanguage);
    }
    setTranslations(language.substr(0, 2) === "pt" ? pt : en);
  }, [setLanguage, language]);

  useEffect(() => {
    const userTheme = localStorage.getItem("theme");
    if (userTheme) {
      setTheme(userTheme);
    } else {
      const darkThemeQuery = window.matchMedia("(prefers-color-scheme: dark)");
      const themeUser = darkThemeQuery.matches ? "dark" : "light";
      setTheme(themeUser);
      localStorage.setItem("theme", themeUser);
    }
  }, []);

  if (localStorage.theme == "dark") {
    window.document.documentElement.classList.add("dark");
  } else {
    window.document.documentElement.classList.remove("dark");
  }

  const handleLanguageChange = (selectedLanguage) => {
    setLanguage(selectedLanguage);
    localStorage.setItem("language", selectedLanguage);
  };

  const handleThemeChange = (selectedTheme) => {
    setTheme(selectedTheme);
    localStorage.setItem("theme", selectedTheme);
  };

  return {
    handleLanguageChange,
    handleThemeChange,
  };
};

export default useThemeLanguageHandle;
