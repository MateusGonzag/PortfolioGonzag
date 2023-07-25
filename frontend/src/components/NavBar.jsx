import React, { useState, useEffect, useContext } from "react";
import useThemeLanguageHandle from "../hooks/useThemeLanguageHandle";
import useScrollReveal from "../hooks/useScrollReveal";
import * as NavBarStyles from "../assets/styles/CSS-in-JS/NavBarStyles";
import { SlideContext } from "../context/SlideContext.jsx";
import icons from "../utils/importIcons";

const socialMediaIcons = [
  {
    filePath: icons.LinkedinIcon,
    link: "https://www.linkedin.com/in/mateusgonzagadev",
  },
  {
    filePath: icons.GithubIcon,
    link: "https://github.com/MateusGonzag",
  },
  {
    filePath: icons.TelegramIcon,
    link: "https://t.me/MateusGonzag",
  },
];

const scrollToAncor = (isSobreMim, isHome) => {
  const elementWrapper = document.querySelector(".slide-wrapper");
  const customElementWrapper = document.getElementById("contentPercentage");

  if (elementWrapper && isSobreMim) {
    elementWrapper.scrollTo({
      top: elementWrapper.scrollHeight,
      behavior: "smooth",
    });
  } else if (isHome) {
    elementWrapper.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    customElementWrapper.scrollTo({
      top: 0,
    });
  } else {
    customElementWrapper.scrollTo({
      top: customElementWrapper.scrollHeight,
    });
  }
};

//Component NavBar
const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const {
    activeSlide,
    scrollPercentage,
    language,
    theme,
    setActiveSlide,
    translations,
    setCustomScrollbarPercentage,
  } = useContext(SlideContext);
  const { handleLanguageChange, handleThemeChange } = useThemeLanguageHandle();

  useScrollReveal("socialMediaScrolAnimation", {
    translatePixels: 0,
    animationThreshold: 20,
    mobile: true,
  });

  const menuHandle = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const updateIndicatorPosition = () => {
      const navIndicatorSlideContainer = document.querySelector(
        ".slide-indicator-container"
      );
      const widthScreen = window.innerWidth;
      if (widthScreen < 640) {
        if (scrollPercentage > 50 || activeSlide > 0) {
          navIndicatorSlideContainer.style.marginLeft = "0";
        } else {
          navIndicatorSlideContainer.style.marginLeft = "1.5rem";
        }
      } else {
        navIndicatorSlideContainer.style.marginLeft = "0";
      }
      if (!showMenu) {
        navIndicatorSlideContainer.style.opacity = 1;
      } else {
        navIndicatorSlideContainer.style.opacity = 0;
      }
    };

    window.addEventListener("resize", updateIndicatorPosition);
    updateIndicatorPosition();
    return () => {
      window.removeEventListener("resize", updateIndicatorPosition);
    };
  }, [menuHandle, activeSlide, scrollPercentage, showMenu]);

  const ThemeIcon = theme === "dark" ? icons.LightIcon : icons.DarkIcon;
  const MenuButtonIcon = showMenu ? icons.MenuIconClose : icons.MenuIconOpen;

  return (
    <>
      <header className={NavBarStyles.headerWrapper(showMenu)}>
        <div className={NavBarStyles.navBarWrapper()}>
          <div className={NavBarStyles.logoWrapper()}>
            <img
              className="h-full w-[3.3rem] lg:w-[3.68rem]"
              src={icons.logo}
            />
            <p
              className={NavBarStyles.logoAnimation(
                activeSlide,
                showMenu,
                scrollPercentage
              )}
            >
              Gonzag
            </p>
          </div>
          <nav className={NavBarStyles.navBar(showMenu)}>
            <a
              onClick={() => {
                scrollToAncor(false, true);
                setActiveSlide(0);
                setCustomScrollbarPercentage(0);
              }}
              className={NavBarStyles.ancorsLink()}
            >
              {translations.links[0]}
            </a>
            <span className={NavBarStyles.ancorsMobileLines()} />
            <a
              onClick={() => {
                scrollToAncor(true, true);
                setActiveSlide(0);
                setCustomScrollbarPercentage(0);
              }}
              className={NavBarStyles.ancorsLink()}
            >
              {translations.links[1]}
            </a>
            <span className={NavBarStyles.ancorsMobileLines()} />
            <a
              onClick={() => {
                scrollToAncor(false, false);
                setActiveSlide(1);
                setCustomScrollbarPercentage(100);
              }}
              className={NavBarStyles.ancorsLink()}
            >
              {translations.links[2]}
            </a>
            <span className={NavBarStyles.ancorsMobileLines()} />
            <a
              onClick={() => {
                scrollToAncor(false, false);
                setActiveSlide(2);
                setCustomScrollbarPercentage(100);
              }}
              className={NavBarStyles.ancorsLink()}
            >
              {translations.links[3]}
            </a>
            <span className={NavBarStyles.ancorsMobileLines()} />
            <a
              onClick={() => {
                scrollToAncor(false, false);
                setActiveSlide(3);
                setCustomScrollbarPercentage(100);
              }}
              className={NavBarStyles.ancorsLink()}
            >
              {translations.links[4]}
            </a>
          </nav>
          <div className={NavBarStyles.buttonLanguage(showMenu)}>
            <button
              onClick={() => {
                handleLanguageChange("pt");
              }}
              className={NavBarStyles.languageChange(language, "pt")}
            >
              Pt-Br
            </button>{" "}
            |{" "}
            <button
              onClick={() => {
                handleLanguageChange("en");
              }}
              className={NavBarStyles.languageChange(language, "en")}
            >
              En
            </button>
          </div>
          <button
            className={NavBarStyles.buttonTheme(showMenu)}
            onClick={() => {
              handleThemeChange(theme !== "dark" ? "dark" : "light");
            }}
          >
            <ThemeIcon className="fill-textColorLIGHT dark:fill-textColorDARK" />
          </button>
          <button onClick={menuHandle} className={NavBarStyles.buttonMenu()}>
            <div className={NavBarStyles.menuIcon(showMenu)}>
              <MenuButtonIcon className="stroke-borderColorLIGHT dark:stroke-borderColorDARK" />
            </div>
          </button>
        </div>
      </header>
      <aside
        id="socialMediaScrolAnimation"
        className={NavBarStyles.socialMediaWrapper()}
      >
        <span className="h-44 w-0.5 bg-primary mdm:hidden" />
        <div className={NavBarStyles.socialMediaWrapperMobile()}>
          {socialMediaIcons.map((icon, index) => (
            <a
              key={index}
              href={icon.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <icon.filePath className={NavBarStyles.socialMediaIcons()} />
            </a>
          ))}
        </div>
        <span className="h-44 w-0.5 bg-primary mdm:hidden" />
      </aside>
    </>
  );
};

export default NavBar;
