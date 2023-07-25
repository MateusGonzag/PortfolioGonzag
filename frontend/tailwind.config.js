export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", './src/assets/images/*.svg'],
  theme: {
    extend: {
      fontSize: {
        smFontSize: "var(--custom-size)",
        lgFontSize: "min(0.83vw, 16px)",
      },
      spacing: {
        heightContentWrapperMobile: "calc(100% - 2rem - 9rem)",
        widthContentWrapperMobile: "calc(100% - 0.625rem - 0.625rem)",
        heightAvatarWrapperMobile: "calc(100% - 8rem - 16rem)",
        widthAvatarWrapperMobile: "calc(100% - 1.25rem - 1.25rem)",
        heightContentDiferencialMobile: "calc(100% - 2rem)",

        widthContentWrapperDesktop: "calc(100% - 14rem - 14rem)",
        heightContentWrapperDesktop: "calc(100% - 4.5rem - 8rem)",
      },
      screens: {
        smm: { max: "767px" },
        mdm: { max: "1023px" },
      },
      borderRadius: {
        mainBorderRadius: "15px",
        mainBorderRadiusDesktop: "10px",
      },
      backgroundImage: {
        'bgDefault': "url('@bg/fundoDesktop.svg')",
        'aboutDecoration': "url('@bg/NameDecoration.svg')",
      },
      keyframes: {
        bounceX: {
          "0%, 100%": {
            transform: "translateX(-2%)",
            animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateX(0)",
            animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
          },
        },
      },
      animation: {
        bounceX: "bounceX 1s infinite",
      },
      boxShadow: {
        shadowLIGHT: "-10px 10px 30px 0px #080808",
        shadowDARK: "-10px 10px 30px 0px #080808",
        shadowDesktop: "-20px 20px 75px 2px rgba(8, 8, 8, 0.20)",
        shadowDesktopDARK: "-20px 20px 75px 2px rgba(8, 8, 8, 1)",
        iconsSkillShadow: "5px 5px 15px #101010, -5px -5px 15px #181818",
      },
    },
    colors: {
      transparent: "transparent",
      primary: "#B66149",
      secondary: "#B66149",
      borderColorDARK: "#303030",
      backMenuColorDARK: "#141414CC",
      backColorDARK: "transparent",
      textColorDARK: "white",
      bgColorDARK: "#141414",
      borderColorLIGHT: "#ffffff",
      backMenuColorLIGHT: "#D9D9D980",
      backColorLIGHT: "rgba(186,186,186,0.3)",
      textColorLIGHT: "black",
      bgColorLIGHT: "#d9d9d9",
    },
  },
  plugins: [],
};
