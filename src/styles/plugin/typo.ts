import * as plugin from "tailwindcss/plugin";

const typography = plugin.withOptions(() => {
  return ({ addUtilities }) => {
    addUtilities({
      ".typo-10": {
        fontSize: "10px",
        lineHeight: "17.5px",
        letterSpacing: "-0.12px"
      },
      ".typo-12": {
        fontSize: "12px",
        lineHeight: "17.5px",
        letterSpacing: "-0.12px"
      },
      ".typo-14": {
        fontSize: "14px",
        lineHeight: "20px",
        letterSpacing: "0.28px"
      },
      ".typo-16": {
        fontSize: "16px",
        lineHeight: "23px",
        letterSpacing: "-0.192px"
      },
      ".typo-18": {
        fontSize: "18px",
        lineHeight: "27px",
        letterSpacing: "0px"
      },
      ".typo-20": {
        fontSize: "20px",
        lineHeight: "28px",
        letterSpacing: "-0.24px"
      }
    });
  };
});

export default typography;
