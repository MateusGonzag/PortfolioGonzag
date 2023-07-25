//SkillsWrapper
export const skillsWrapperStyles = () => `
flex 
bg-[#ffffff80] 
dark:bg-[#0000009b] 
h-[26rem] 
flex-col 
items-center 
border-b 
border-borderColorLIGHT 
dark:border-borderColorDARK 
justify-start
w-full 
relative

md:h-full

lg:h-full
lg:w-full
lg:rounded-r-none
lg:flex-row
lg:flex-wrap
lg:justify-center
`;

export const swiperContainerStyles = () => `
w-full 
h-[11.5rem] 

md:h-full

flex 
justify-center 
items-center
`;

export const swiperStyles = () => `
mx-4 
flex 
h-full
`;

export const swiperSlideStyles = () => `
h-full 
flex 
flex-col
items-center
`;

export const iconContainerStyles = () => `
mt-8 
w-[5rem] 
h-[5rem] 
rounded-[5px]
bg-primary

md:mt-20
md:w-32
md:h-32
`;

export const iconBackgroundStyles = () => `
w-full 
h-full 
bg-gradient-to-tr 
from-[#d3d3d31e] 
dark:from-[#00000032] 
flex 
rounded-[5px]
justify-center 
items-center
`;

export const iconNameStyles = () => `
mt-4 
whitespace-nowrap 
font-medium 
text-transparent

md:mt-8
md:text-xl
`;

export const inProgressContainerStyles = () => `
-mt-4
mb-6
mx-4
self-start
whitespace-break-spaces
text-center

md:mt-8

lg:mb-0
lg:mt-2
lg:mx-14
`;

//Services
export const containerStyles = () => `
w-full 
h-full
`;

export const innerLeftTrayStyles = () => `
w-full 
h-full
flex 
items-center 
justify-start

lg:flex-col
lg:items-center
lg:justify-end
`;
export const innerRightTrayStyles = () => `
w-full 
h-full
flex 
justify-end 
items-center

lg:flex-col
lg:items-center
lg:justify-start
`;

export const textContainerLeftStyles = () => `
w-40
text-sm
leading-none
font-medium 
ml-4

md:ml-16
md:w-72
md:whitespace-pre-wrap
md:text-lg

lg:absolute
lg:leading-8
lg:text-center
lg:ml-0
lg:top-52
lg:w-96
`;

export const textContainerRightStyles = () => `
w-40
mr-4
text-sm
leading-none
font-medium 

md:mr-16
md:w-72
md:whitespace-pre-wrap
md:text-lg

lg:absolute
lg:bottom-52
lg:mr-0
lg:text-center
lg:leading-8
lg:w-96

`;

export const leftCircleStyles = () => `
w-20 
h-20 
bg-bgColorDARK
dark:bg-bgColorLIGHT 
rounded-full
flex
justify-center
items-center

lg:mb-28
lg:w-32
lg:h-32
`;

export const rightCircleStyles = () => `
w-20 
h-20 
bg-bgColorDARK
dark:bg-bgColorLIGHT 
rounded-full
flex
justify-center
items-center

lg:mt-28
lg:w-32
lg:h-32
`;

export const leftArrowContainerStyles = () => `
animate-bounceX 
left-14 
w-20 
absolute

lg:hidden
`;

export const rightArrowContainerStyles = () => `
animate-bounceX 
right-14 
w-20 
absolute

lg:hidden
`;
