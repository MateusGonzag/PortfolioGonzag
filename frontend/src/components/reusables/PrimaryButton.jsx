import React from "react";

function PrimaryButton({
  type = "",
  disabled = false,
  icon,
  children,
  customClassName,
  iconPlace = true,
  link = null,
  onClick,
  isDownload = false
}) {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={customClassName}
    >
      <div
        className={`flex h-full w-full items-center rounded-[6px] bg-primary duration-200 hover:scale-110 ${
          iconPlace ? "justify-between" : "justify-center"
        }`}
      >
        <a
          href={link}
          target={!link ? "" : "_blank"}
          download={isDownload}
          className="mr-3 whitespace-nowrap pl-3 text-base font-medium leading-none text-textColorDARK dark:text-textColorLIGHT"
        >
          {children}
        </a>
        {iconPlace ? (
          <div className="flex h-full w-1/3 items-center justify-center rounded-r-[5px] bg-textColorLIGHT">
            {icon}
          </div>
        ) : null}
      </div>
    </button>
  );
}

export default PrimaryButton;
