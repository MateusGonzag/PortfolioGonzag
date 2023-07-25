import React, { useContext } from "react";
import Arrow from "../../../../components/reusables/Arrow";
import { SlideContext } from "../../../../context/SlideContext";

const HomePortfolio = () => {
  const { translations } = useContext(SlideContext);
  return (
    <div className="w-full h-full flex flex-col items-center lg:justify-center">
      <div className="mt-52 text-4xl w-56 justify-center font-bold text-primary md:mt-96 lg:mt-0 lg:text-6xl lg:flex lg:w-full">
        {translations.projects[0][2]}
        <span className="text-textColorLIGHT dark:text-textColorDARK lg:mx-4"> & </span>
        {translations.projects[0][3]}
      </div>
      <p className="mt-16 text-textColorLIGHT dark:text-textColorDARK font-medium text-lg text-center mx-4 leading-8 tracking-wider md:text-2xl lg:mt-8 lg:max-w-2xl lg:leading-loose lg:tracking-widest">
        {translations.projects[0][4]}
      </p>
      <Arrow
        customClassName="mt-20 relative scale-150 lg:mt-8 lg:scale-[2]"
        rotate={90}
      />
    </div>
  );
};

export default HomePortfolio;
