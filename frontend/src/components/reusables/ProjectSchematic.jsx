import React, { useContext } from "react";
import icons from "../../utils/importIcons";
import PrimaryButton from "../../components/reusables/PrimaryButton";
import { SlideContext } from "../../context/SlideContext";

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
  { name: "Jquery", filePath: icons.JqueryIcon },
];

const ProjectSchematic = ({
  skills = "",
  title,
  description,
  linkBt1,
  linkBt2,
  imgProject,
}) => {
  const { translations } = useContext(SlideContext);
  const filteredIcons = iconsData.filter((icon) => skills.includes(icon.name));

  return (
    <>
      <div className="flex h-full w-full flex-col lg:flex-row-reverse lg:justify-between">
        <div className="relative flex h-[19rem] w-full flex-col items-center justify-between bg-gradient-to-t from-[#fff] dark:from-[#000] lg:h-full lg:w-full lg:bg-none">
          <div className="mt-8 h-[12rem] w-[19rem] rounded-[10px] lg:ml-0 lg:mt-28 lg:h-[25.8rem] lg:w-[41.75rem]">
            <img
              className="h-full w-full rounded-[10px] border-2 border-borderColorLIGHT dark:border-borderColorDARK lg:rounded-[5px]"
              src={imgProject}
              alt="Project"
            />
          </div>
          <div
            className="mx-2 mt-4 flex h-[4rem] flex-wrap items-center justify-evenly lg:mb-6"
            id="iconsRender"
          >
            {filteredIcons.map((icon, index) => (
              <div
                key={index}
                className="mb-6 flex flex-col items-center text-transparent transition-colors duration-150 will-change-transform hover:text-textColorLIGHT hover:dark:text-textColorDARK lg:mb-0"
              >
                <icon.filePath
                  key={index}
                  className="mx-3 h-6 w-6 fill-primary transition-transform duration-150 lg:mx-5 lg:h-12 lg:w-12 lg:hover:scale-125"
                />
                <p className="mt-2 mdm:hidden">{icon.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative flex h-full w-full flex-col items-center justify-between lg:right-0 lg:h-full lg:w-[68rem] lg:justify-between lg:bg-gradient-to-b lg:from-[#fff] lg:dark:from-[#000]">
          <h1 className="mx-2 mt-5 text-center text-3xl font-bold text-primary lg:mt-28 lg:text-5xl lg:font-normal lg:tracking-tight lg:underline lg:underline-offset-4">
            {title}
          </h1>
          <p className="mx-4 mb-2 text-center text-sm font-normal leading-4 text-textColorLIGHT dark:text-textColorDARK md:mx-20 md:text-xl lg:mt-16 lg:h-[18.8rem] lg:font-medium lg:leading-7">
            {description}
          </p>
          <div className="mb-10 mt-0 flex w-full flex-col items-center lg:mt-20 lg:flex-row lg:justify-between lg:px-12">
            <PrimaryButton
              link={linkBt1}
              type="button"
              customClassName="w-[19rem] h-8 relative lg:w-60 lg:h-12"
              iconPlace={false}
            >
              {translations.projects[0][0]}
            </PrimaryButton>
            <PrimaryButton
              link={linkBt2}
              type="button"
              customClassName="w-[19rem] mt-3 h-8 relative lg:mt-0 lg:w-60 lg:h-12"
              iconPlace={false}
            >
              {translations.projects[0][1]}
            </PrimaryButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectSchematic;
