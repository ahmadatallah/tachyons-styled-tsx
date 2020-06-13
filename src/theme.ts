import TachyonsTheme, { tachyonsColors } from "tachyons-theme";

const theme: TachyonsTheme = {
  breakpoints: ["30em", "60em"],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fontSizes: [12, 16, 20, 24, 36, 48, 80, 96, 128],
  borderWidths: [0, "1px", "2px", "4px", "8px", "16px", "32px"],
  radii: [0, "2px", "4px", "16px", "9999px", "100%"],
  lineHeights: ["1.0", "1.25", "1.5"],
  textStyles: {
    caps: {
      textTransform: "uppercase",
      letterSpacing: "0.1em",
    },
    "tracked-tight": {
      letterSpacing: "-0.05em",
    },
    copy: {
      lineHeight: 1.5,
      maxWidth: "30em",
    },
    title: {
      lineHeight: 1.25,
      maxWidth: "30em",
    },
    capitalize: {
      textTransform: "capitalize",
    },
  },
  colors: tachyonsColors,
};

export default theme;
