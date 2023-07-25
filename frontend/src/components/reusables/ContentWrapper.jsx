import React from "react";

const ContentWrapper = ({
  scrollPercentage = 0,
  children,
  id = "",
  optionScroll = false,
  isScrollable = false,
  rowOrCol = false,
}) => {
  const contentWrapperClasses = `
    ${
      scrollPercentage > 90 || (optionScroll && window.innerWidth < 1024)
        ? "overflow-y-auto"
        : "overflow-y-hidden"
    }
    overflow-x-hidden
    w-widthContentWrapperMobile
    h-heightContentWrapperMobile
    bg-backColorLIGHT 
    dark:bg-backColorDARK
    border 
    border-borderColorLIGHT
    dark:border-borderColorDARK 
    backdrop-blur-[8px]
    rounded-mainBorderRadiusDesktop 
    relative
    mx-auto
    mt-36
    mb-8 
    flex 
    ${rowOrCol ? "flex-row" : "flex-col"}
    justify-start
    items-start
    shadow-shadowLIGHT

    lg:w-widthContentWrapperDesktop
    ${
      isScrollable
        ? "lg:h-full lg:mt-[8.5rem] lg:mb-[4.5rem]"
        : "md:h-heightContentWrapperDesktop lg:mt-[8rem] lg:mb-[4.5rem]"
    }
    lg:shadow-shadowDesktop
    lg:dark:shadow-shadowDesktopDARK
    
  `;

  return (
    <div id={id} className={contentWrapperClasses}>
      {children}
    </div>
  );
};

export default ContentWrapper;
