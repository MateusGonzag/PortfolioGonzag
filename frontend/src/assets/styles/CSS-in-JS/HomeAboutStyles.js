// AvatarStyles
export const avatarWrapper = () => `
sticky
top-40
h-heightAvatarWrapperMobile
w-full
flex
items-center

lg:top-28
lg:h-[46.5rem]
`;

export const avatarImageStyles = () => `
absolute 
left-2/4 
-translate-x-2/4 
max-w-full 
max-h-full 
bottom-2 

md:h-[33rem]
md:w-[33rem]
md:top-1/2
md:-translate-y-1/2

lg:translate-0
lg:bottom-[7.5rem] 
lg:left-auto 
lg:translate-x-0 
lg:right-72 
`;

// HomeStyles
export const homeWrapper = () => `
flex
flex-col
h-full
w-full
px-4
-mt-4

md:-mt-3
md:pl-8

lg:hidden
`;

export const homeWrapperDesktop = () => `
flex
flex-col
h-full
justify-center
items-start
mt-4
ml-[24rem]

mdm:hidden
`;

export const nameHomeAbout = () => `
text-lg
font-extrabold
leading-none
text-primary
flex
flex-wrap
flex-row
self-start

md:text-2xl
md:font-semibold
md:tracking-[-0.15rem]

lg:text-4xl
`;

export const webDevPlaceHolder = () => `
h-8
text-4xl
font-light
leading-9
text-textColorLIGHT
dark:text-textColorDARK

md:text-4xl
md:font-bold
md:tracking-[-0.15rem]

lg:leading-[3rem]
lg:text-6xl
`;

export const introHome = () => `
mt-6
text-base
font-normal
leading-none
text-textColorLIGHT
dark:text-textColorDARK

md:text-xl
md:whitespace-break-spaces
md:w-[28rem]
md:mt-5

lg:mt-10
lg:text-2xl
`;

export const downloadName = () => `
absolute
left-[0.4rem]
top-[1rem]
text-[0.875rem]
font-normal
leading-none
text-textColorDARK
whitespace-nowrap
`;

// AboutStyles
export const aboutWrapper = () => `
absolute
w-full
h-full
-z-10

lg:flex
lg:justify-start
lg:items-center
`;

export const aboutContentWrapper = () => `
flex
flex-col
items-start
justify-center
mx-6
mt-7
duration-700
opacity-0

md:flex-row
md:flex-wrap
lg:mt-44  
lg:ml-[4.5rem]
lg:justify-start

`;

export const aboutMeText = () => `
mt-[5vh]
text-[2vh]
font-normal
leading-none
text-textColorLIGHT
dark:text-textColorDARK
whitespace-break-spaces

md:mx-8

lg:text-justify
lg:text-xl
lg:font-normal
lg:leading-[175%]
lg:w-[28.5rem]
lg:tracking-[0.03rem]
lg:ml-10
lg:mt-3
`;

export const yearPlaceHolder = () => `
text-sm
font-bold
leading-none
text-secondary

md:text-3xl
`;

export const infoYearPlaceHolder = () => `
text-xs
font-normal
text-textColorLIGHT
dark:text-textColorDARK

md:text-lg
`;

export const dividerAboutStyle = (scrollPercentage) => `
mdm:hidden 
absolute 
left-[45%] 
-translate-x-1/2 
top-44
${scrollPercentage > 70 ? "opacity-100" : "opacity-0"}
`;

export const aboutDesktopPlaceHolder = () => `
md:bg-bgColorDARK 
md:dark:bg-bgColorLIGHT 
md:bg-aboutDecoration
md:bg-center
md:w-[36.5rem] 
md:h-[16rem]
lg:h-[21.5rem] 
md:rounded-mainBorderRadius 
md:flex 
md:justify-center 
md:items-center 
md:flex-col
`;

export const scrollPlaceHolder = (scrollHorizontal) => `
text-textColorLIGHT 
dark:text-textColorDARK 
self-end
right-52
absolute 
-mb-24 
duration-200 
${scrollHorizontal > 0 ? "opacity-0" : "opacity-100"}

mdm:hidden 
`;

// SoftSkillsStyles
export const differencesWrapper = (scrollPercentage) => `
flex
flex-col
items-center
justify-start
w-full
h-full
mt-6
rounded-t-mainBorderRadius
bg-gradient-to-b
from-[#fff]
dark:from-[#000]
to-30%
z-50

lg:absolute
lg:-right-[22.75rem]  
lg:top-0
lg:mt-0
lg:h-full
lg:rounded-none
lg:w-[36.5rem]
lg:bg-[#fff]
lg:dark:bg-[#000]
lg:bg-opacity-80
${scrollPercentage > 70 ? "lg:opacity-100" : "lg:opacity-0"}
`;

export const differencesHold = () => `
w-[calc(90%)] 
mx-5 
h-full 
flex 
flex-col 
mt-4 
justify-around 
items-center 
relative

lg:w-auto
lg:mx-16
`;

export const differencesCard = () => `
flex 
flex-col 
items-center

lg:flex-row
lg:w-full
lg:h-full
`;

export const differencesIcon = () => `
w-20 
h-20 
bg-primary
mb-4  
rounded-[10px]
flex
items-center
justify-center

lg:mr-8
lg:mb-0
md:w-28
md:h-28
`;

export const differencesText = () => `
text-textColorLIGHT 
dark:text-textColorDARK 
text-sm 
font-medium 
text-center
mx-4

md:text-base

lg:w-56
lg:mx-0
lg:text-left
`;
