import React, { useRef, useEffect } from "react";
import { Transition } from "react-transition-group";

const CustomAlertModal = ({ isOpen, message, onRequestClose }) => {
  const modalRef = useRef(null);

  const duration = 300;
  const defaultStyle = {
    transition: `transform ${duration}ms ease-in-out`,
    transform: "translateX(100%)",
  };

  const transitionStyles = {
    entering: { transform: "translateX(100%)" },
    entered: { transform: "translateX(0)" },
    exiting: { transform: "translateX(100%)" },
    exited: { transform: "translateX(100%)" },
  };

  useEffect(() => {
    if (isOpen) {
      const timeoutId = setTimeout(() => {
        onRequestClose();
      }, 3000);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [isOpen, onRequestClose]);

  return (
    <Transition in={isOpen} timeout={duration} nodeRef={modalRef} unmountOnExit>
      {(state) => (
        <div
          className="fixed inset-0 mb-52 flex items-end justify-end"
          style={{
            ...defaultStyle,
            ...transitionStyles[state],
          }}
          ref={modalRef}
        >
          <div className="rounded-l-xl border-y border-l border-borderColorLIGHT bg-backMenuColorLIGHT p-4 shadow-lg dark:border-borderColorDARK dark:bg-backMenuColorDARK">
            <div className="mb-4">
              <h2 className="text-xl font-bold text-textColorLIGHT dark:text-textColorDARK">
                Alerta
              </h2>
            </div>
            <div className="mb-4 text-textColorLIGHT dark:text-textColorDARK">
              <p>{message}</p>
            </div>
          </div>
        </div>
      )}
    </Transition>
  );
};

export default CustomAlertModal;
