import React, { createContext, useState } from "react";
import pt from "../locales/pt.json";

export const SlideContext = createContext();

export const SlideProvider = ({ children }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [language, setLanguage] = useState("");
  const [theme, setTheme] = useState("");
  const [customScrollbarPercentage, setCustomScrollbarPercentage] = useState(0);
  const [scrollHorizontal, setScrollHorizontal] = useState(0);
  const [translations, setTranslations] = useState(pt);

  return (
    <SlideContext.Provider
      value={{
        activeSlide,
        setActiveSlide,
        scrollPercentage,
        setScrollPercentage,
        language,
        setLanguage,
        theme,
        setTheme,
        customScrollbarPercentage,
        setCustomScrollbarPercentage,
        scrollHorizontal,
        setScrollHorizontal,
        translations,
        setTranslations,
      }}
    >
      {children}
    </SlideContext.Provider>
  );
};
