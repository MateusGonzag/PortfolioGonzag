import React, { useEffect, useState, memo } from "react";
import SlideContainer from "./components/SlideContainer.jsx";
import Conhecimentos from "./pages/slides/Conhecimentos.jsx";
import Contatos from "./pages/slides/Contatos.jsx";
import HomePortfolio from "./pages/slides/slidesHorizontais/PortfolioPages/HomePorfolio.jsx";
import Project1 from "./pages/slides/slidesHorizontais/PortfolioPages/Project1.jsx";
import Project2 from "./pages/slides/slidesHorizontais/PortfolioPages/Project2.jsx";
import Project3 from "./pages/slides/slidesHorizontais/PortfolioPages/Project3.jsx";
import Project4 from "./pages/slides/slidesHorizontais/PortfolioPages/Project4.jsx";
import NavBar from "./components/NavBar.jsx";
import Home from "./pages/HomeAbout.jsx";
import PageLoading from "./utils/PageLoading.jsx";


const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (document.readyState === "complete") {
      setTimeout(() => {
        setIsLoading(false);
      }, 2500);
    } else {
      window.onload = () => {
        setTimeout(() => {
          setIsLoading(false);
        }, 2500);
      };
    }
  }, []);

  useEffect(() => {
    const updateFontSize = () => {
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;
      const vw = (4 * screenWidth) / 100;
      const vh = (1.945 * screenHeight) / 100;
      const average = (vw + vh) / 2;

      const fontSize = Math.min(Math.floor(average), 16);
      const cssRule = `--custom-size: ${fontSize}px`;

      const styleElement = document.createElement("style");
      styleElement.innerHTML = `:root { ${cssRule} }`;
      document.head.appendChild(styleElement);
    };

    updateFontSize();

    window.addEventListener("resize", updateFontSize);

    return () => {
      window.removeEventListener("resize", updateFontSize);
    };
  }, []);

  const slidesConfig = {
    showVerticalIndicator: true,
    showHorizontalIndicator: true,
    excludeScrollIndicator: [],
    normalFlow: window.innerWidth < 1024 ? false : true,
    horizontalButtons: false,
    ancors: ["Home", "Sobre mim", "Conhecimentos", "Projetos", "Contatos"],
    scrollDuration: 500,
    slideHorizontalLoop: false
  };

  return (
    <>
      {isLoading ? (
        <PageLoading />
      ) : (
        <>
          <NavBar />
          <SlideContainer
            slides={[
              <Home />,
              <Conhecimentos />,
              [
                <HomePortfolio />,
                <Project1 />,
                <Project2 />,
                <Project3 />,
                <Project4 />
              ],
              <Contatos />,
            ]}
            slidesConfig={slidesConfig}
          />
        </>
      )}
    </>
  );
};

export default memo(App);
