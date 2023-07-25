import { useEffect, useContext } from "react";
import { SlideContext } from "../context/SlideContext";

const useScrollReveal = (elementId, config) => {
  const {
    translatePixels = 100,
    animationThreshold = 50,
    axis = "x",
    startOrEndAnimation = ">",
    customScrollPercentage = undefined,
    transitionOption = "all 0.3s ease-out",
    mobile = false,
  } = config;

  const {
    activeSlide,
    scrollPercentage,
    customScrollbarPercentage,
    setCustomScrollbarPercentage,
  } = useContext(SlideContext);

  const scrollPercentageForAnimation =
    customScrollPercentage === undefined
      ? scrollPercentage
      : customScrollbarPercentage;

  const getAnimationValues = () => {
    const shouldHide =
      activeSlide > 0 ||
      evaluateComparison(
        scrollPercentageForAnimation,
        animationThreshold,
        startOrEndAnimation
      )
        ? 0
        : 1;
    const translateValue =
      activeSlide > 0 ||
      evaluateComparison(
        scrollPercentageForAnimation,
        animationThreshold,
        startOrEndAnimation
      )
        ? translatePixels
        : 0;

    return { shouldHide, translateValue };
  };

  useEffect(() => {
    const element = document.getElementById(customScrollPercentage);

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = element;
      const percentage = (scrollTop / (scrollHeight - clientHeight)) * 100;
      setCustomScrollbarPercentage(percentage);
    };

    if (element) {
      element.addEventListener("scroll", handleScroll);
      return () => {
        element.removeEventListener("scroll", handleScroll);
      };
    }
  }, [customScrollPercentage]);

  const shouldApplyAnimation = !mobile || window.innerWidth < 1024;

  useEffect(() => {
    if (shouldApplyAnimation) {
      const element = document.getElementById(elementId);
      const { shouldHide, translateValue } = getAnimationValues();

      element.style.opacity = shouldHide;
      element.style.transform = `translate${axis}(${translateValue}px)`;
      element.style.transition = transitionOption;
      element.style.willChange = "opacity, transform";
      element.style.pointerEvents = activeSlide > 0 ? "none" : "auto";

      // Outros atributos de otimização
      element.style.backfaceVisibility = "hidden";
      element.style.perspective = "1000px";
      element.style.transformStyle = "preserve-3d";
    }
  }, [
    elementId,
    animationThreshold,
    axis,
    startOrEndAnimation,
    activeSlide,
    scrollPercentageForAnimation,
    customScrollbarPercentage,
    shouldApplyAnimation,
    translatePixels,
    transitionOption,
    scrollPercentage,
  ]);
};

const evaluateComparison = (value1, value2, operator) => {
  switch (operator) {
    case ">":
      return value1 > value2;
    case "<":
      return value1 < value2;
    case ">=":
      return value1 >= value2;
    case "<=":
      return value1 <= value2;
    case "===":
      return value1 === value2;
    default:
      return false;
  }
};

export default useScrollReveal;
