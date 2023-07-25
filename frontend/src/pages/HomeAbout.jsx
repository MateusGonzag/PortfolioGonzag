import React, { useEffect, useContext } from "react";
import Divider from "../components/reusables/Divider.jsx";
import ContentWrapper from "../components/reusables/ContentWrapper.jsx";
import Arrow from "../components/reusables/Arrow.jsx";
import PrimaryButton from "../components/reusables/PrimaryButton.jsx";
import * as HomeAboutStyles from "../assets/styles/CSS-in-JS/HomeAboutStyles.js";
import avatarFoto from "../assets/images/MarcaFoto.png";
import icons from "../utils/importIcons.jsx";
import Typed from "typed.js";
import useScrollReveal from "../hooks/useScrollReveal.jsx";
import { SlideContext } from "../context/SlideContext.jsx";

// Componente Home Mobile
const HomeMobile = () => {
  useScrollReveal("homeScrollAnimation", {
    translatePixels: -160,
  });
  const { translations } = useContext(SlideContext);

  useEffect(() => {
    const typed = new Typed("#digitationEffect", {
      strings: ["React Developer"],
      typeSpeed: 100,
      loop: false,
      showCursor: false,
    });
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div id="homeScrollAnimation" className={HomeAboutStyles.homeWrapper()}>
      <h2 className={`${HomeAboutStyles.nameHomeAbout} mt-20`}>
        Mateus Gonzaga
      </h2>
      <h1
        id="digitationEffect"
        className={HomeAboutStyles.webDevPlaceHolder()}
      ></h1>
      <p className={HomeAboutStyles.introHome()}>{translations.introduction}</p>
      <PrimaryButton
        link="pdf/MateusGonzaga.pdf"
        isDownload={true}
        type="button"
        customClassName={"w-36 self-end mr-6 mt-3 h-11 z-50 md:-mt-24 md:mr-16"}
        icon={
          <icons.ArrowDownload className="mx-2 mb-2 h-8 w-8 rotate-180 fill-textColorDARK" />
        }
      >
        Curriculum
      </PrimaryButton>
    </div>
  );
};

// Componente Home Desktop
const HomeDesktop = () => {
  const { translations } = useContext(SlideContext);

  useScrollReveal("opacityAnimation", {
    translatePixels: 0,
  });

  useEffect(() => {
    const typed = new Typed("#digitationEffect1", {
      strings: ["React Developer"],
      typeSpeed: 100,
      loop: false,
      showCursor: false,
    });
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div id="opacityAnimation" className={HomeAboutStyles.avatarWrapper()}>
      <div className={HomeAboutStyles.homeWrapperDesktop()}>
        <h2 className={`${HomeAboutStyles.nameHomeAbout} mt-20`}>
          Mateus Gonzaga
        </h2>
        <h1
          id="digitationEffect1"
          className={HomeAboutStyles.webDevPlaceHolder()}
        ></h1>
        <p className={HomeAboutStyles.introHome()}>
          {translations.introduction}
        </p>
        <PrimaryButton
          link="/pdf/MateusGonzaga.pdf"
          isDownload={true}
          customClassName={"mt-6 w-40 h-11"}
          icon={
            <icons.ArrowDownload className="mx-2 mb-2 h-8 w-8 rotate-180 fill-textColorDARK" />
          }
        >
          Curriculum
        </PrimaryButton>
      </div>
      <div className="absolute left-1/2 h-[33.25rem] w-px -translate-x-1/2 bg-textColorLIGHT dark:bg-textColorDARK mdm:hidden" />
      <img
        className={HomeAboutStyles.avatarImageStyles()}
        src={avatarFoto}
        alt="Foto de perfil"
      ></img>
    </div>
  );
};

//Componente SoftSkills
const SoftSkills = () => {
  const {
    scrollPercentage,
    activeSlide,
    scrollHorizontal,
    setScrollHorizontal,
    setCustomScrollbarPercentage,
    customScrollPercentage,
    translations,
    language,
  } = useContext(SlideContext);

  useEffect(() => {
    const slideWrapperElement = document.querySelector(".slide-wrapper");

    let initialTouchY = 0;
    let isTouching = false;

    const handleTouchStart = (event) => {
      if (window.innerWidth >= 1024) {
        const touch = event.touches[0];
        initialTouchY = touch.clientY;
        isTouching = true;
      }
    };

    const handleTouchMove = (event) => {
      if (!isTouching || window.innerWidth < 1024) {
        return;
      }

      const touch = event.touches[0];
      const deltaY = initialTouchY - touch.clientY;

      if (scrollPercentage > 90 && activeSlide === 0) {
        const newScrollAmount = scrollHorizontal + deltaY / 5;
        const finalScrollAmount = Math.min(Math.max(newScrollAmount, 0), 22.75);

        setScrollHorizontal(finalScrollAmount);
        setCustomScrollbarPercentage((finalScrollAmount / 22.75) * 100);
      }
    };

    const handleTouchEnd = () => {
      isTouching = false;
    };

    const handleWheel = (event) => {
      if (window.innerWidth < 1024) {
        return;
      }

      if (scrollPercentage > 90 && activeSlide === 0) {
        const newScrollAmount = scrollHorizontal + event.deltaY / 25;
        const finalScrollAmount = Math.min(Math.max(newScrollAmount, 0), 22.75);

        setScrollHorizontal(finalScrollAmount);
        setCustomScrollbarPercentage((finalScrollAmount / 22.75) * 100);
      }
    };

    slideWrapperElement.style.overflowY =
      scrollHorizontal > 0 && window.innerWidth >= 1024 && scrollPercentage > 90
        ? "hidden"
        : "auto";

    document.addEventListener("touchstart", handleTouchStart);
    document.addEventListener("touchmove", handleTouchMove);
    document.addEventListener("touchend", handleTouchEnd);
    document.addEventListener("wheel", handleWheel);

    return () => {
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);
      document.removeEventListener("wheel", handleWheel);
    };
  }, [
    scrollHorizontal,
    scrollPercentage,
    activeSlide,
    setScrollHorizontal,
    customScrollPercentage,
  ]);

  useScrollReveal("diff0Animation", {
    translatePixels: 160,
    animationThreshold: 20,
    startOrEndAnimation: "<",
    customScrollPercentage: "contentPercentage",
  });

  useScrollReveal("diff1Animation", {
    translatePixels: 160,
    animationThreshold: 60,
    startOrEndAnimation: "<",
    customScrollPercentage: "contentPercentage",
  });

  useScrollReveal("diff2Animation", {
    translatePixels: 160,
    animationThreshold: 90,
    startOrEndAnimation: "<",
    customScrollPercentage: "contentPercentage",
  });

  useScrollReveal("arrowScrollAnimation", {
    translatePixels: 0,
    animationThreshold: window.innerWidth < 1024 ? 10 : 100,
    startOrEndAnimation: ">",
    customScrollPercentage: "contentPercentage",
  });

  useScrollReveal("dividerAnimation", {
    translatePixels: 0,
    animationThreshold: 10,
    startOrEndAnimation: "<",
    customScrollPercentage: "contentPercentage",
  });
  return (
    <div
      style={{
        transform: `translateX(-${
          window.innerWidth < 1024 ? 0 : scrollHorizontal
        }rem)`,
      }}
      className={HomeAboutStyles.differencesWrapper(scrollPercentage)}
    >
      <Divider customClassName={`lg:mt-48 duration-300`} id="dividerAnimation">
        {translations.differences.title}
      </Divider>
      <Arrow
        id="arrowScrollAnimation"
        rotate={
          window.innerWidth < 1024 ? 0 : scrollHorizontal === 22.75 ? 90 : -90
        }
        customClassName={"lg:top-1/2 lg:w-28 lg:-left-4"}
        animate={[true, window.innerWidth < 1024 ? true : false]}
      />
      <div className={HomeAboutStyles.differencesHold()}>
        <div id="diff0Animation" className={HomeAboutStyles.differencesCard()}>
          <div className={HomeAboutStyles.differencesIcon()}>
            <icons.CriatividadeIcon className="h-12 w-12 fill-bgColorLIGHT dark:fill-bgColorDARK lg:h-16 lg:w-16" />
          </div>
          <div className={HomeAboutStyles.differencesText()}>
            <span className="font-black text-primary underline">
              {translations.differences.description[0].split(" ")[0] + " "}
            </span>
            {translations.differences.description[0]
              .split(" ")
              .slice(1)
              .join(" ")}
          </div>
        </div>
        <div id="diff1Animation" className={HomeAboutStyles.differencesCard()}>
          <div className={HomeAboutStyles.differencesIcon()}>
            <icons.AutoaprendizadoIcon className="h-24 w-24 fill-bgColorLIGHT dark:fill-bgColorDARK" />
          </div>
          <div className={HomeAboutStyles.differencesText()}>
            <span className="font-black text-primary underline">
              {translations.differences.description[1].split(" ")[0] + " "}
            </span>
            {translations.differences.description[1]
              .split(" ")
              .slice(1)
              .join(" ")}
          </div>
        </div>
        <div id="diff2Animation" className={HomeAboutStyles.differencesCard()}>
          <div className={HomeAboutStyles.differencesIcon()}>
            <icons.ProblemSolvingIcon className="h-12 w-12 fill-bgColorLIGHT dark:fill-bgColorDARK lg:h-16 lg:w-16" />
          </div>
          <div className={HomeAboutStyles.differencesText()}>
            <span className="font-black text-primary underline">
              {translations.differences.description[2]
                .split(" ")
                .slice(0, language.substr(0, 2) === "pt" ? 3 : 1)
                .join(" ") + " "}
            </span>
            {translations.differences.description[2]
              .split(" ")
              .slice(language.substr(0, 2) === "pt" ? 3 : 1)
              .join(" ")}
          </div>
        </div>
      </div>
    </div>
  );
};

// Componente About
const About = () => {
  const { scrollPercentage, scrollHorizontal, translations } =
    useContext(SlideContext);

  useScrollReveal("infosScrollAnimation", {
    translatePixels: 160,
    animationThreshold: 70,
    startOrEndAnimation: "<",
  });

  return (
    <div className={HomeAboutStyles.aboutWrapper()}>
      <Divider
        customClassName={HomeAboutStyles.dividerAboutStyle(scrollPercentage)}
      >
        {translations.aboutMe.title}
      </Divider>
      <div
        id="infosScrollAnimation"
        className={HomeAboutStyles.aboutContentWrapper()}
      >
        <div className={HomeAboutStyles.aboutDesktopPlaceHolder()}>
          <h2
            className={`${HomeAboutStyles.nameHomeAbout()} md:ml-[10.5rem] lg:ml-[4.5rem]`}
          >
            <p className="mr-2 text-3xl font-extralight text-textColorDARK dark:text-textColorLIGHT smm:hidden">
              I`m
            </p>
            Mateus Gonzaga
          </h2>
          <h1
            className={`${HomeAboutStyles.webDevPlaceHolder()} md:text-textColorDARK md:dark:text-textColorLIGHT`}
          >
            React Developer
          </h1>
        </div>
        <p className={HomeAboutStyles.aboutMeText()}>
          {translations.aboutMe.description}
        </p>
        <p className={HomeAboutStyles.scrollPlaceHolder(scrollHorizontal)}>
          {"Scroll Down >"}
        </p>
        <div className="mt-[4.5vh] w-full md:ml-4 lg:-mt-28">
          <div className="ml-2">
            <span className={HomeAboutStyles.yearPlaceHolder()}>2022 | </span>
            <span className={HomeAboutStyles.infoYearPlaceHolder()}>
              {translations.aboutMe.studies[0]}
            </span>
          </div>
          <div className="ml-2 mt-4">
            <span className={HomeAboutStyles.yearPlaceHolder()}>2023 | </span>
            <span className={HomeAboutStyles.infoYearPlaceHolder()}>
              {translations.aboutMe.studies[1]}
            </span>
          </div>
        </div>
      </div>
      <SoftSkills />
    </div>
  );
};

// Componente HomeAbout
const HomeAbout = () => {
  const { scrollPercentage } = useContext(SlideContext);

  useScrollReveal("arrowContent", {
    translatePixels: 0,
  });

  return (
    <>
      <HomeDesktop />
      <ContentWrapper
        id="contentPercentage"
        scrollPercentage={scrollPercentage}
        isScrollable={true}
        customClassName="top-96"
      >
        <Arrow id="arrowContent" animate={[true, true]} />
        <HomeMobile />
        <About />
      </ContentWrapper>
    </>
  );
};

export default HomeAbout;
