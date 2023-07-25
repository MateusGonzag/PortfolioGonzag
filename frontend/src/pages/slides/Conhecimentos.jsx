import React, { lazy, Suspense, useState, useEffect, useContext } from "react";
import Divider from "../../components/reusables/Divider.jsx";
import Arrow from "../../components/reusables/Arrow.jsx";
import ContentWrapper from "../../components/reusables/ContentWrapper.jsx";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import icons from "../../utils/importIcons.jsx";
import * as ConhecimentosStyles from "../../assets/styles/CSS-in-JS/ConhecimentosStyles.js";
import { SlideContext } from "../../context/SlideContext.jsx";

const Tray = lazy(() => import("../../components/reusables/TrayContainer.jsx"));

const iconsData = [
  { name: "JavaScript", filePath: icons.JsIcon },
  { name: "Python", filePath: icons.PyIcon },
  { name: "HTML5", filePath: icons.HtmlIcon },
  { name: "CSS3", filePath: icons.CssIcon },
  { name: "Sass", filePath: icons.SassIcon },
  { name: "Styled Components", filePath: icons.StyledIcon },
  { name: "Tailwind", filePath: icons.TailwindIcon },
  { name: "React.js", filePath: icons.ReactIcon },
  { name: "BootStrap", filePath: icons.BtIcon },
  { name: "PHP", filePath: icons.PhpIcon },
  { name: "Redux", filePath: icons.ReduxIcon },
  { name: "Figma", filePath: icons.FigmaIcon },
  { name: "Git", filePath: icons.GitIcon },
  { name: "Jquery", filePath: icons.JqueryIcon },
];

const SkillsMobile = React.memo(() => (
  <div className={ConhecimentosStyles.swiperContainerStyles()}>
    <Swiper
      slidesPerView={3}
      centeredSlides={true}
      spaceBetween={5}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      slideActiveClass="swiper-slide-active"
      modules={[Autoplay]}
      loop={true}
      className={ConhecimentosStyles.swiperStyles()}
    >
      {iconsData.map((icon, index) => {
        const IconComponent = icon.filePath;
        const { name } = icon;

        return (
          <SwiperSlide
            key={index}
            className={ConhecimentosStyles.swiperSlideStyles()}
          >
            <div className={ConhecimentosStyles.iconContainerStyles()}>
              <div className={ConhecimentosStyles.iconBackgroundStyles()}>
                <IconComponent className="h-12 w-12 fill-bgColorLIGHT dark:fill-bgColorDARK md:h-20 md:w-20" />
              </div>
            </div>
            <p className={ConhecimentosStyles.iconNameStyles()}>{name}</p>
          </SwiperSlide>
        );
      })}
    </Swiper>
  </div>
));

const SkillsDesktop = React.memo(() => (
  <div className="order-2 w-[60rem]">
    <div className="mx-12 mt-11 grid h-72 grid-flow-row grid-cols-7 grid-rows-2">
      {iconsData.map((icon, index) => {
        const IconComponent = icon.filePath;
        const { name } = icon;

        return (
          <div
            key={index}
            style={{ cursor: "pointer" }}
            className="flex flex-col items-center text-transparent duration-200 hover:scale-110 hover:text-textColorLIGHT dark:hover:text-textColorDARK"
          >
            <div
              style={{ width: "6rem", height: "6rem" }}
              className="flex items-center justify-center rounded-[5px] bg-primary hover:shadow-2xl"
            >
              <IconComponent className="h-16 w-16 fill-bgColorLIGHT dark:fill-bgColorDARK" />
            </div>
            <p className="pointer-events-none whitespace-nowrap text-base">
              {name}
            </p>
          </div>
        );
      })}
    </div>
  </div>
));

const SkillsWrapper = ({ isMobile }) => {
  const { translations } = useContext(SlideContext);
  return (
    <>
      <div className={ConhecimentosStyles.skillsWrapperStyles()}>
        <Divider customClassName={"lg:mt-2"}>
          {translations.mySkills.title}
        </Divider>
        {isMobile ? <SkillsMobile /> : <SkillsDesktop />}
        <div className={ConhecimentosStyles.inProgressContainerStyles()}>
          <div className="text-sm font-light md:text-2xl lg:leading-10 lg:-tracking-wide">
            <p className="text-textColorLIGHT dark:text-textColorDARK">
              {translations.mySkills.content[0]}{" "}
              <span className="text-primary">front-end</span>,
              {translations.mySkills.content[1]}{" "}
              <span className="text-primary">React</span>,
              {translations.mySkills.content[2]}
            </p>
            <p className="font-bold text-primary underline underline-offset-4">
              {translations.mySkills.content[3]}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

const Services = () => {
  const { translations } = useContext(SlideContext);

  return (
    <div className="relative h-full w-full">
      <Divider customClassName="absolute w-full lg:top-2">
        {translations.trays.title[0]}
      </Divider>
      <Suspense>
        <Tray
          isLeftTray
          disableHover={false}
          leftTrayTitle={translations.trays.title[1]}
        >
          <div className={ConhecimentosStyles.innerLeftTrayStyles()}>
            <div className={ConhecimentosStyles.textContainerLeftStyles()}>
              <p className="text-textColorDARK dark:text-textColorLIGHT">
                {translations.trays.content[0]}
              </p>
            </div>
            <div className="absolute right-14 flex lg:relative lg:right-0">
              <div className={ConhecimentosStyles.leftCircleStyles()}>
                <icons.PrototipagemIcon className="h-12 w-12 stroke-bgColorLIGHT dark:stroke-bgColorDARK lg:h-20 lg:w-20" />
              </div>
              <div className={ConhecimentosStyles.leftArrowContainerStyles()}>
                <Arrow animate={[false]} rotate={90} />
              </div>
            </div>
          </div>
        </Tray>
        <Tray disableHover={false} rightTrayTitle={translations.trays.title[2]}>
          <div className={ConhecimentosStyles.innerRightTrayStyles()}>
            <div className="absolute left-14 flex lg:relative lg:left-0">
              <div className={ConhecimentosStyles.rightArrowContainerStyles()}>
                <Arrow animate={[false]} rotate={-90} />
              </div>
              <div className={ConhecimentosStyles.rightCircleStyles()}>
                <icons.WebSitesIcon className="h-12 w-12 fill-bgColorLIGHT dark:fill-bgColorDARK lg:h-20 lg:w-20" />
              </div>
            </div>
            <div className={ConhecimentosStyles.textContainerRightStyles()}>
              <p className="text-textColorDARK dark:text-textColorLIGHT">
                {translations.trays.content[1]}
              </p>
            </div>
          </div>
        </Tray>
      </Suspense>
    </div>
  );
};

const Conhecimentos = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleSize = () => {
      window.innerWidth < 1024 ? setIsMobile(true) : setIsMobile(false);
    };

    window.addEventListener("resize", handleSize);
    handleSize();

    return () => {
      window.removeEventListener("resize", handleSize);
    };
  }, []);
  return (
    <ContentWrapper rowOrCol={isMobile ? false : true}>
      <SkillsWrapper isMobile={isMobile} />
      <span className="absolute top-1/2 h-px w-full -translate-y-1/2 bg-borderColorDARK opacity-40 dark:bg-borderColorLIGHT mdm:hidden" />
      <Services />
    </ContentWrapper>
  );
};

export default Conhecimentos;
