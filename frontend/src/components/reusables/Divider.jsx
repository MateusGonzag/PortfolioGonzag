import React from "react";

function Divider({ children, id, customClassName }) {
  return (
    <div
      id={id}
      className={`z-50 mt-5 flex items-center justify-center ${customClassName}`}
    >
      <div className="z-50 h-px w-20 bg-textColorLIGHT dark:bg-textColorDARK md:h-0.5 md:w-36"></div>
      <span className="z-50 mx-2 w-auto whitespace-nowrap text-center text-sm font-bold leading-none text-textColorLIGHT dark:text-textColorDARK md:text-xl lg:mx-8 lg:text-[1.75rem] lg:font-extralight">
        {children}
      </span>
      <div className="z-50 h-px w-20 bg-textColorLIGHT dark:bg-textColorDARK md:h-0.5 md:w-36"></div>
    </div>
  );
}

export default Divider;
