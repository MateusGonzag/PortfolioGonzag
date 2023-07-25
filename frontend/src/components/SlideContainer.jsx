import React, {
  useState,
  useRef,
  useEffect,
  useCallback,
  useContext,
} from "react";
import "../assets/styles/SlideContainer.css";
import defaultNext from "../assets/images/setaNext.png";
import defaultPrevious from "../assets/images/setaPrevious.png";
import { SlideContext } from "../context/SlideContext.jsx";

const useSlide = React.memo(({ slides, slidesConfig }) => {
  const slideContext = useContext(SlideContext);
  const {
    activeSlide,
    setActiveSlide,
    scrollPercentage,
    setScrollPercentage,
    customScrollbarPercentage,
  } = slideContext;

  const [touchConfirmation, setTouchConfirmation] = useState(false);
  const [navigationLocked, setNavigationLocked] = useState(false);
  const [activeSlidesHorizontal, setActiveSlidesHorizontal] = useState(
    Array(slides.length).fill(0)
  );

  const touchStartRef = useRef(null);
  const slideContainerRef = useRef(null);
  const scrollableRefs = useRef([]);

  const defaultConfig = {
    normalFlow: false,
    showVerticalIndicator: true,
    showHorizontalIndicator: true,
    excludeScrollIndicator: [],
    horizontalButtons: true,
    buttonNext: defaultNext,
    buttonPrevious: defaultPrevious,
    ancors: [],
    scrollDuration: 500,
    scrollPadding: 50,
    slideHorizontalLoop: true
  };

  const slidesConfigs = { ...defaultConfig, ...slidesConfig };

  const handleScrollDirection = (event) => {
    const { deltaY } = event;

    if (!slidesConfigs.normalFlow) {
      if (deltaY > 0) {
        goToSlideVertical("down");
      } else if (deltaY < 0) {
        goToSlideVertical("up");
      }
    } else {
      if (deltaY > 0 && !isHorizontalSlideActive(activeSlide)) {
        goToSlideVertical("down");
      } else if (deltaY < 0 && !isHorizontalSlideActive(activeSlide)) {
        goToSlideVertical("up");
      } else if (
        deltaY > 0 &&
        isHorizontalSlideActive(activeSlide) &&
        slidesConfigs.normalFlow
      ) {
        goToSlideHorizontal("left");
      } else if (
        deltaY < 0 &&
        isHorizontalSlideActive(activeSlide) &&
        slidesConfigs.normalFlow
      ) {
        goToSlideHorizontal("right");
      }
    }
  };

  const handleKeyDown = (event) => {
    const key = event.key;

    if (key === "ArrowDown" || key === "PageDown") {
      goToSlideVertical("down");
    } else if (key === "ArrowUp" || key === "PageUp") {
      goToSlideVertical("up");
    } else if (key === "ArrowLeft" && isHorizontalSlideActive(activeSlide)) {
      goToSlideHorizontal("right");
    } else if (key === "ArrowRight" && isHorizontalSlideActive(activeSlide)) {
      goToSlideHorizontal("left");
    } else if (key === "Home") {
      setActiveSlide(0);
    } else if (key === "End") {
      setActiveSlide(slides.length - 1);
    }
  };

  const handleTouchDirection = (event) => {
    const touch = event.changedTouches[0];
    const touchStart = touchStartRef.current;

    if (!touchStart) {
      touchStartRef.current = {
        clientX: touch.clientX,
        clientY: touch.clientY,
      };
      return;
    }

    const touchDiffX = touchStart.clientX - touch.clientX;
    const touchDiffY = touchStart.clientY - touch.clientY;
    const touchDistance = Math.sqrt(
      Math.pow(touchDiffX, 2) + Math.pow(touchDiffY, 2)
    );
    const minDistance = 10;

    if (touchDistance < minDistance) {
      touchStartRef.current = null;
      return;
    }

    if (Math.abs(touchDiffX) > Math.abs(touchDiffY)) {
      if (touchDiffX > 0) {
        goToSlideHorizontal("left");
      } else {
        goToSlideHorizontal("right");
      }
    } else {
      if (touchDiffY > 0) {
        if(customScrollbarPercentage > 99 || activeSlide > 0) {
          setTouchConfirmation(true);
        } else {
          setTouchConfirmation(false);
        }
        if (touchConfirmation) {
          goToSlideVertical("down");
        }
      } else {
        goToSlideVertical("up");
      }
    }

    touchStartRef.current = null;
  };

  const timerAnimation = useCallback(() => {
    setTimeout(() => {
      setNavigationLocked(false);
    }, slidesConfigs.scrollDuration);
  }, [slidesConfigs.scrollDuration]);

  const goToSlideVertical = useCallback(
    (direction) => {
      const element = document.querySelector(".slide-wrapper");
      if (navigationLocked) return;
      setNavigationLocked(true);

      const scrollableRef = scrollableRefs.current[activeSlide];
      const currentIndex = activeSlide;
      let newIndex = currentIndex;

      if (
        direction === "up" &&
        currentIndex > 0 &&
        scrollableRef &&
        scrollableRef.scrollTop < scrollableRef.scrollHeight * 0.01
      ) {
        newIndex--;
        setScrollPercentage(100);
        element.scrollTo({
          top: element.scrollHeight,
          behavior: "smooth",
        });
      } else if (
        direction === "down" &&
        currentIndex < slides.length - 1 &&
        scrollableRef &&
        scrollableRef.scrollTop + scrollableRef.clientHeight >
          scrollableRef.scrollHeight * 0.99 &&
        customScrollbarPercentage > 99
      ) {
        newIndex++;
        setScrollPercentage(0);
      }

      if (newIndex !== currentIndex) {
        setActiveSlide(newIndex);
      }

      timerAnimation();
    },
    [
      activeSlide,
      customScrollbarPercentage,
      navigationLocked,
      setScrollPercentage,
      slides.length,
      slidesConfigs.scrollDuration,
      timerAnimation,
    ]
  );

  const goToSlideHorizontal = useCallback(
    (direction) => {
      if (navigationLocked) return;
      setNavigationLocked(true);

      const currentIndex = activeSlidesHorizontal[activeSlide];
      const slideLength = slides[activeSlide].length - 1;
      let newIndex = currentIndex;

      if (direction === "right" && currentIndex >= 0) {
        currentIndex === 0
          ? slidesConfigs.normalFlow
            ? (goToSlideVertical("up"), (newIndex = 0))
            : slidesConfigs.slideHorizontalLoop ? (newIndex = slideLength) : null
          : newIndex--;
      } else if (direction === "left" && currentIndex <= slideLength) {
        currentIndex === slideLength
          ? slidesConfigs.normalFlow
            ? goToSlideVertical("down")
            : slidesConfigs.slideHorizontalLoop ? (newIndex = 0) : null
          : newIndex++;
      }

      if (newIndex !== currentIndex) {
        setActiveSlidesHorizontal((prevSlides) => {
          const updatedSlides = [...prevSlides];
          updatedSlides[activeSlide] = newIndex;
          return updatedSlides;
        });
      }

      timerAnimation();
    },
    [
      activeSlide,
      activeSlidesHorizontal,
      navigationLocked,
      slides,
      slidesConfigs.normalFlow,
      timerAnimation,
      goToSlideVertical,
    ]
  );

  const renderVerticalSlideIndicators = useCallback(() => {
    return slides.map((slide, i) => {
      const active = activeSlide === i;
      const scrollableRef = scrollableRefs.current[i];
      const { scrollHeight, clientHeight } = scrollableRef || {};
      const hasScrollBar = scrollHeight > clientHeight;

      if (hasScrollBar && !slidesConfigs.excludeScrollIndicator.includes(i)) {
        const indicatorScrollStyle1 =
          active && scrollPercentage < slidesConfigs.scrollPadding
            ? "slide-indicator-active"
            : "slide-indicator-inactive";
        const indicatorScrollStyle2 =
          active && scrollPercentage >= slidesConfigs.scrollPadding
            ? "slide-indicator-active"
            : "slide-indicator-inactive";

        return (
          <React.Fragment key={i}>
            <div className={indicatorScrollStyle1}>
              {slidesConfigs.ancors[i]}
            </div>
            <div className={indicatorScrollStyle2}>
              {slidesConfigs.ancors[i + 1]}
            </div>
          </React.Fragment>
        );
      } else if (slidesConfigs.showVerticalIndicator) {
        const indicatorStyle = active
          ? "slide-indicator-active"
          : "slide-indicator-inactive";
        const indicatorIndex = hasScrollBar ? i : i + 1;

        return (
          <React.Fragment key={i}>
            <div className={indicatorStyle}>
              {slidesConfigs.ancors[indicatorIndex]}
            </div>
          </React.Fragment>
        );
      }

      return null;
    });
  }, [
    activeSlide,
    scrollableRefs,
    scrollPercentage,
    slides,
    slidesConfigs.ancors,
    slidesConfigs.excludeScrollIndicator,
    slidesConfigs.scrollPadding,
    slidesConfigs.showVerticalIndicator,
  ]);

  const renderHorizontalSlideIndicators = useCallback(
    (slide, index) => {
      if (!slidesConfigs.showHorizontalIndicator) {
        return null;
      }

      return (
        <div key={index} className="horizontal-slide-indicator-container">
          {slide.map((_, horizontalIndex) => (
            <div
              key={horizontalIndex}
              className={`horizontal-slide-indicator ${
                activeSlidesHorizontal[index] === horizontalIndex
                  ? "active"
                  : "inactive"
              }`}
            />
          ))}
        </div>
      );
    },
    [activeSlidesHorizontal, slidesConfigs.showHorizontalIndicator]
  );

  const renderHorizontalSlideButtons = useCallback(() => {
    if (!slidesConfigs.horizontalButtons) {
      return null;
    }

    return (
      <div className="horizontal-slide-buttons-container">
        <button
          className="slide-horizontal-button buttonPrev"
          onClick={() => goToSlideHorizontal("right")}
        >
          <img src={slidesConfigs.buttonPrevious} alt="Previous" />
        </button>
        <button
          className="slide-horizontal-button buttonNext"
          onClick={() => goToSlideHorizontal("left")}
        >
          <img src={slidesConfigs.buttonNext} alt="Next" />
        </button>
      </div>
    );
  }, [
    goToSlideHorizontal,
    slidesConfigs.buttonNext,
    slidesConfigs.buttonPrevious,
    slidesConfigs.horizontalButtons,
  ]);

  const renderSlides = useCallback(() => {
    return slides.map((slide, index) => {
      const isVerticalSlide = Array.isArray(slide);
      const isActiveSlide = activeSlide === index;

      let slideContent = null;
      if (isVerticalSlide) {
        const horizontalSlides = slide.map(
          (horizontalSlide, horizontalIndex) => (
            <div
              key={horizontalIndex}
              className={`slide-horizontal-wrapper horizontal-slide ${
                isActiveSlide &&
                activeSlidesHorizontal[index] === horizontalIndex
                  ? "active"
                  : ""
              }`}
              style={{
                transform: `translateX(${
                  (horizontalIndex - activeSlidesHorizontal[index]) * 100
                }%)`,
                transition: "transform 0.8s ease-in-out",
                overflow: "hidden",
              }}
            >
              {horizontalSlide}
            </div>
          )
        );

        slideContent = (
          <div
            key={index}
            className={`slide-wrapper vertical-slide ${
              isActiveSlide ? "active" : ""
            }`}
            style={{
              transform: `translateY(${(index - activeSlide) * 100}%)`,
              transition: `transform ${slidesConfigs.scrollDuration}ms cubic-bezier(.24,-0.03,.61,1.34)`,
            }}
            ref={(ref) => (scrollableRefs.current[index] = ref)}
          >
            {horizontalSlides}
            {renderHorizontalSlideIndicators(slide, index)}
            {renderHorizontalSlideButtons(index)}
          </div>
        );
      } else {
        slideContent = (
          <div
            key={index}
            className={`slide-wrapper vertical-slide ${
              isActiveSlide ? "active" : ""
            }`}
            style={{
              transform: `translateY(${(index - activeSlide) * 100}%)`,
              transition: `transform ${slidesConfigs.scrollDuration}ms cubic-bezier(.24,-0.03,.61,1.34)`,
            }}
            ref={(ref) => (scrollableRefs.current[index] = ref)}
          >
            {slide}
          </div>
        );
      }

      return slideContent;
    });
  }, [
    activeSlide,
    activeSlidesHorizontal,
    renderHorizontalSlideButtons,
    renderHorizontalSlideIndicators,
    scrollableRefs,
    slides,
    slidesConfigs.scrollDuration,
  ]);

  const isHorizontalSlideActive = useCallback(
    (index) => {
      return Array.isArray(slides[index]);
    },
    [slides]
  );

  useEffect(() => {
    const slideContainer = slideContainerRef.current;

    const handleTouchMove = (event) => {
      if (event.target === slideContainer) {
        event.preventDefault();
      }
    };

    slideContainer.addEventListener("touchmove", handleTouchMove, {
      passive: false,
    });

    return () => {
      slideContainer.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  useEffect(() => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);

    const handleResize = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const scrollableRef = scrollableRefs.current[activeSlide];

    if (scrollableRef) {
      const handleScrollPercentage = () => {
        const { scrollTop, scrollHeight, clientHeight } = scrollableRef;
        setScrollPercentage((scrollTop / (scrollHeight - clientHeight)) * 100);
      };

      scrollableRef.addEventListener("scroll", handleScrollPercentage);

      return () => {
        scrollableRef.removeEventListener("scroll", handleScrollPercentage);
      };
    }
  }, [activeSlide, scrollableRefs, setScrollPercentage]);

  return (
    <>
      <div
        ref={slideContainerRef}
        className="slide-container"
        onWheel={handleScrollDirection}
        onKeyDown={handleKeyDown}
        onTouchStart={handleTouchDirection}
        onTouchEnd={handleTouchDirection}
      >
        {renderSlides()}
      </div>
      <div className="slide-indicator-container">
        {renderVerticalSlideIndicators()}
      </div>
    </>
  );
});

export default useSlide;
