export const headerWrapper = (showMenu) => `
  fixed 
  bg-backMenuColorLIGHT
  dark:bg-backMenuColorDARK 
  w-full
  transform-gpu
  will-change-transform
  ${!showMenu ? "h-[7.3rem]" : "h-4/5"} 
  -mt-1 
  flex justify-center items-start 
  z-20 
  border-b 
  border-b-borderColorLIGHT 
  dark:border-b-borderColorDARK
  rounded-b-[15px]
  transition-all duration-700 
  text-textColorLIGHT
  dark:text-textColorDARK 
  backdrop-blur-[7px]
  shadow-shadowLIGHT
  dark:shadow-shadowDARK

  lg:shadow-transparent
  lg:dark:shadow-transparent
  lg:dark:bg-transparent
  lg:dark:border-transparent
  lg:border-transparent 
  lg:bg-transparent 
  lg:backdrop-blur-none
`;

export const navBarWrapper = () => `
  flex 
  w-full
  mx-4
  mt-10
  justify-between 
  items-center

  lg:mx-9
  lg:mt-7
`;

export const logoWrapper = () => `
  m-0 
  flex 
  items-center 
  text-2xl 
  transition-all
  ease-in-out 
  duration-500  
  cursor-pointer 
  tracking-[-0.15rem] 
  font-semibold
  transform-gpu

  lg:text-[2.3rem]
  lg:font-semibold

  lg:hover:scale-110
`;

export const logoAnimation = (activeSlide, showMenu, scrollPercentage) => `
${
  (activeSlide > 0 && !showMenu && window.innerWidth < 1024) ||
  (scrollPercentage > 50 && !showMenu && window.innerWidth < 1024)
    ? "opacity-0 -translate-x-8"
    : "opacity-100 translate-x-0"
} 
transform-gpu 
will-change-transform 
duration-300
`;

export const navBar = (showMenu) => `
  absolute 
  flex 
  translate-y-1/2
  left-1/2
  transform-gpu
  will-change-transform 
  -translate-x-1/2
  ${!showMenu ? "opacity-0 pointer-events-none" : "opacity-100"} 
  items-center
  flex-col 
  transition-all 
  duration-700

  mdm:bottom-1/2

  lg:translate-x-0
  lg:translate-y-0
  lg:opacity-100
  lg:mt-2
  lg:left-72
  lg:flex-row
  lg:pointer-events-auto
`;

export const ancorsLink = () => `
  mt-3 
  font-normal 
  text-base
  relative 
  cursor-pointer 
  no-underline 
  leading-snug  
  text-textColorLIGHT
  dark:text-textColorDARK
  transform-gpu
  will-change-transform

  lg:mr-14
  lg:mt-1
  lg:text-xl

  lg:after:absolute
  lg:after:content-[""]
  lg:after:bg-textColorLIGHT
  lg:after:dark:bg-textColorDARK
  lg:after:w-1.5
  lg:after:h-1.5
  lg:after:top-1/3
  lg:after:ml-6
  lg:after:rounded-full
  lg:after:last:bg-transparent
  lg:after:dark:last:bg-transparent

  lg:before:absolute
  lg:before:content-[""]
  lg:before:bg-primary
  lg:before:w-full
  lg:before:h-0.5
  lg:before:-bottom-0
  lg:before:scale-0
  lg:before:transition-all
  lg:before:duration-500
  lg:before:ease-in

  lg:hover:before:scale-100
`;

export const ancorsMobileLines = () => `
mt-3 
h-px
w-80 
bg-textColorLIGHT 
dark:bg-textColorDARK 

lg:hidden
`;

export const buttonMenu = () => `
  w-[2.375rem]
  h-[2.375rem] 
  bg-transparent 
  border-none 
  p-0 
  m-0
  mt-[0.4rem] 
  flex

  lg:hidden
`;

export const menuIcon = (showMenu) => `
  w-full 
  transition-all 
  duration-700
  transform-gpu
  will-change-transform
  ${!showMenu ? "rotate-0" : "rotate-90"}
`;

export const buttonLanguage = (showMenu) => `
  absolute 
  text-xl 
  text-textColorLIGHT
  dark:text-textColorDARK
  duration-700 
  transform-gpu
  will-change-transform
  bottom-8
  ml-10 
  ${!showMenu ? "opacity-0 smm:pointer-events-none" : "opacity-100"} 

  md:opacity-100 
  md:top-1 
  md:relative 
  md:ml-auto 
  md:mr-20

  lg:mr-11 
  lg:text-lg
  lg:pointer-events-auto
`;

export const languageChange = (language, actualLanguage) => `
  duration-500 
  ${
    language.substr(0, 2) != actualLanguage
      ? "text-textColorLIGHT dark:text-textColorDARK hover:scale-125 no-underline"
      : "text-primary underline"
  }
`;

export const buttonTheme = (showMenu) => `
  absolute 
  scale-150 
  duration-300 
  ${!showMenu ? "opacity-0 smm:pointer-events-none" : "opacity-100"} 
  bottom-8 
  right-20 
  transform-gpu
  will-change-transform

  hover:scale-125

  md:right-8 
  md:top-1 
  md:opacity-100 
  md:relative 
  md:mr-8

  lg:right-0
  lg:scale-100 
  lg:pointer-events-auto
`;

export const socialMediaWrapper = () => `
  absolute
  z-10
  flex
  flex-col
  items-center
  top-[20vh]
  smm:left-[10%]

  md:right-1/2

  lg:right-1
  lg:top-[24%]
`;

export const socialMediaWrapperMobile = () => `
flex-row 
items-center 
justify-center
rounded-[5px] 
flex 
h-[2.6875rem] 
w-[11.125rem] 
bg-primary 

md:translate-x-1/2
md:h-16
md:w-64

lg:translate-x-0
lg:flex-col 
lg:w-full 
lg:h-full 
lg:bg-transparent
`;

export const socialMediaIcons = () => `
dark:fill-textColorLIGHT 
  fill-textColorDARK
  mx-[0.935rem]
  w-7
  h-7
  duration-300

  md:mx-4
  md:w-11
  md:h-11

  lg:my-4
  lg:w-7 
  lg:h-7
  lg:fill-textColorLIGHT
  lg:dark:fill-textColorDARK

  lg:hover:scale-125
`;
