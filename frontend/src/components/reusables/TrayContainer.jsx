import React, { useState, useRef, useEffect } from "react";

const Tray = ({
  isLeftTray,
  children,
  leftTrayTitle,
  rightTrayTitle,
  disableHover,
}) => {
  const [isTrayTouchActive, setIsTrayTouchActive] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [trayDragDistance, setTrayDragDistance] = useState(0);
  const trayStartXRef = useRef(0);
  const trayRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleSize = () => {
      window.innerWidth < 1024 ? setIsMobile(true) : setIsMobile(false);
    };

    window.addEventListener("resize", handleSize);
    handleSize();

    return () => {
      window.removeEventListener("resize", handleSize);
    };
  }, []);

  const handleTrayTouchStart = (e) => {
    if (isTrayTouchActive || disableHover) return;

    setIsTrayTouchActive(true);
    trayStartXRef.current = e.touches[0].clientX;
    setTrayDragDistance(0);
  };

  const handleTrayTouchMove = (e) => {
    if (!isTrayTouchActive || disableHover) return;

    const { clientX } = e.touches[0];
    const startX = trayStartXRef.current;
    const deltaX = clientX - startX;
    const containerWidth = trayRef.current.clientWidth;
    const maxDragDistance = containerWidth / 2;

    if ((isLeftTray && deltaX > 0) || (!isLeftTray && deltaX < 0)) {
      setTrayDragDistance(Math.min(Math.abs(deltaX), maxDragDistance));
    } else {
      setTrayDragDistance(0);
    }
  };

  const handleTrayTouchEnd = () => {
    if (!isTrayTouchActive || disableHover) return;

    setIsTrayTouchActive(false);
    setTrayDragDistance(0);
  };

  const handleTrayMouseEnter = () => {
    if (isTrayTouchActive || disableHover) return;

    setIsHovered(true);
    setTrayDragDistance(trayRef.current.clientHeight / 2);
  };

  const handleTrayMouseLeave = () => {
    if (isTrayTouchActive || disableHover) return;

    setIsHovered(false);
    setTrayDragDistance(0);
  };

  const getTitle = () => {
    if (isLeftTray) {
      return leftTrayTitle;
    } else {
      return rightTrayTitle;
    }
  };

  const getTitleOpacity = () => {
    if (trayDragDistance > 30) {
      return 1;
    } else {
      return trayDragDistance / 30;
    }
  };

  return (
    <div
      onTouchStart={handleTrayTouchStart}
      onTouchMove={handleTrayTouchMove}
      onTouchEnd={handleTrayTouchEnd}
      onMouseEnter={handleTrayMouseEnter}
      onMouseLeave={handleTrayMouseLeave}
      style={{
        transform: `translate${isMobile ? "X" : "Y"}(${
          isLeftTray ? "" : "-"
        }${trayDragDistance}px)`,
        transition: isTrayTouchActive ? "none" : "all .2s ease-in-out",
        zIndex: isTrayTouchActive || isHovered ? 50 : null,
      }}
      className={`absolute z-10 h-full w-full transform-gpu will-change-transform ${
        trayDragDistance > 20 ? "bg-primary" : "bg-transparent"
      } flex items-center ${
        isLeftTray
          ? isMobile
            ? "-left-1/2"
            : "-top-1/2"
          : isMobile
          ? "-right-1/2"
          : "-bottom-1/2"
      }`}
      ref={trayRef}
    >
      <p
        className="absolute left-1/2 top-4 -translate-x-1/2 font-bold text-textColorDARK dark:text-textColorLIGHT lg:top-12 lg:text-2xl"
        style={{ opacity: getTitleOpacity() }}
      >
        {getTitle()}
      </p>
      {children}
    </div>
  );
};

export default Tray;
