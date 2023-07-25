import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

const HelloSVG = () => {
  const parentRef = useRef(null);
  const svgRef = useRef(null);
  const helloPath1Ref = useRef(null);
  const helloPath2Ref = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const helloPath1Element = helloPath1Ref.current;
    const helloPath2Element = helloPath2Ref.current;
    const textElement = textRef.current;
    const svgElement = svgRef.current;
    const parentElement = parentRef.current;

    gsap.set([helloPath1Element, helloPath2Element], {
      strokeDasharray: 1511,
      strokeDashoffset: 1511,
      fill: "none",
    });

    const masterTimeline = gsap.timeline({ onComplete: shrinkParent });

    masterTimeline
      .to(helloPath1Element, {
        strokeDashoffset: 0,
        duration: 1.2,
        opacity: "1",
        fill: "#B66149",
        ease: "power1.inOut",
      })
      .to(
        helloPath2Element,
        {
          strokeDashoffset: 0,
          duration: 1.2,
          opacity: "1",
          fill: "#B66149",
          ease: "power1.inOut",
        },
        "-=1"
      );

    function shrinkParent() {
      gsap.fromTo(
        svgElement,
        { x: 0 },
        {
          x: window.innerWidth < 1024 ? 0 : "-50%",
          duration: 1,
          ease: "power1.inOut",
        }
      );
      gsap.fromTo(
        textElement,
        { opacity: 0, x: "-40%" },
        { opacity: 1, x: "50%", duration: 0.5, ease: "power1.inOut" }
      );

      gsap.to(parentElement, {
        scale: 0,
        duration: 0.5,
        delay: 1,
      });
    }
  }, []);

  return (
    <div
      className={`w-screen h-screen ${
        localStorage.theme === "dark" ? "bg-bgColorDARK" : "bg-bgColorLIGHT"
      }`}
    >
      <div
        ref={parentRef}
        className="w-full z-50 flex justify-center items-center h-full"
      >
        <svg
          ref={svgRef}
          className="hello h-44"
          viewBox="0 0 312 335"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_952_182)">
            <path
              ref={helloPath1Ref}
              strokeMiterlimit="10"
              d="M224.333 159.225C206.704 246.645 192.294 319.518 192.154 320.986C191.874 323.522 192.853 323.655 219.996 324.056L248.258 324.323L248.957 321.386C250.916 313.912 312.896 4.13745 312.896 2.26893C312.896 0.266937 310.098 4.55976e-06 284.634 4.55976e-06H256.233L224.333 159.225ZM308.279 6.27291C307.86 7.60757 293.449 78.745 276.24 164.43L245.04 320.319H220.975C202.927 320.319 196.771 319.918 196.771 318.717C196.771 317.382 253.015 37.1036 258.471 10.9442L259.87 4.00399H284.355C307.02 4.00399 308.839 4.13745 308.279 6.27291Z"
              fill="none"
              stroke="#B66149"
              strokeWidth="2"
            />
            <path
              ref={helloPath2Ref}
              strokeMiterlimit="10"
              d="M140.61 28.4283C126.339 41.9084 88.843 77.1434 57.0834 106.906L-0.419739 160.827L84.0861 242.241C158.099 313.645 168.732 323.388 170.411 321.52C171.39 320.319 174.888 305.637 178.106 288.821L184.122 258.39L133.474 210.076C105.632 183.516 83.1067 161.227 83.3865 160.693C83.6664 160.026 106.192 138.805 133.195 113.58C173.769 75.9422 182.443 67.2669 181.883 64.8646C180.624 59.9263 169.991 6.53985 169.991 5.20519C169.991 1.6016 164.115 6.27292 140.61 28.4283ZM172.23 38.7052L177.966 66.7331L127.039 113.847L76.2511 160.827L128.018 210.209L179.785 259.592L174.048 287.62C170.97 302.968 168.172 315.914 167.752 316.181C166.913 316.982 6.99551 162.695 6.99551 160.96C6.99551 159.492 164.255 10.8108 165.934 10.6773C166.353 10.6773 169.152 23.3566 172.23 38.7052Z"
              fill="none"
              stroke="#B66149"
              strokeWidth="2"
            />
          </g>
        </svg>
        <div
          ref={textRef}
          className={`${
            localStorage.theme === "dark"
              ? "text-textColorDARK"
              : "text-textColorLIGHT"
          } mdm:hidden absolute opacity-0 text-6xl font-semibold tracking-[-0.30rem]`}
        >
          Gonzag
        </div>
      </div>
    </div>
  );
};

export default HelloSVG;
