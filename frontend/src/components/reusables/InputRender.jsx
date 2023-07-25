import React from "react";

const InputRender = ({ inputConfigurations, submitPermission, children }) => {
  return (
    <form
      className="grid h-full w-full grid-flow-row grid-cols-2 grid-rows-5 gap-x-3 gap-y-4 lg:grid-flow-col lg:grid-rows-3 lg:gap-x-8 lg:gap-y-6"
      onSubmit={submitPermission}
    >
      {inputConfigurations.map((config, index) => (
        <div key={index} className={`flex flex-col ${config.orderGrid}`}>
          <label
            className="text-lg font-bold text-textColorLIGHT dark:text-textColorDARK lg:text-2xl"
            htmlFor={config.id}
          >
            {config.label}
          </label>
          <config.typeInput
            className={`inputPrimary mt-1 h-full w-full resize-none rounded-[5px] border border-borderColorLIGHT bg-backColorLIGHT p-6 text-textColorLIGHT placeholder:text-xs placeholder:font-medium placeholder:text-textColorLIGHT placeholder:text-opacity-50 focus:outline-none focus:-outline-offset-2 focus:outline-primary dark:border-borderColorDARK dark:bg-backColorDARK dark:text-textColorDARK dark:placeholder:text-textColorDARK lg:mt-4 lg:text-2xl lg:placeholder:text-lg`}
            placeholder={config.placeholder}
            type={config.type}
            id={config.id}
            value={config.value}
            onChange={config.onChange}
          />
          {config.button}
        </div>
      ))}
      {children}
    </form>
  );
};

export default InputRender;
