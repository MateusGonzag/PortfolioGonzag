import React from "react";

const Arrow = ({
  id = "",
  animate = [false, false],
  rotate = 0,
  customClassName,
}) => {
  return (
    <div
      id={id}
      className={`${customClassName} absolute h-6 w-full ${
        animate[0] && animate[1]
          ? "animate-bounce"
          : animate[0] && !animate[1]
          ? "animate-bounceX"
          : "animate-none"
      }`}
    >
      <div
        style={{ transform: `rotate(${rotate}deg)` }}
        className={`mt-7 flex items-center justify-center`}
      >
        <div className="-mx-1 h-4 w-1 origin-top-left rotate-[60deg] transform-gpu rounded-lg bg-[#363636] dark:bg-[#d9d9d9]"></div>
        <div className="-mx-1 h-4 w-1 origin-top-right -rotate-[60deg] transform-gpu rounded-lg bg-[#363636] dark:bg-[#d9d9d9]"></div>
      </div>
    </div>
  );
};

export default Arrow;
