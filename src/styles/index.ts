import { createStitches } from "@stitches/react";

import { setupFonts } from "./fonts";
import { setupStyles } from "./global";

export const { styled, keyframes } = createStitches({
  theme: {
    colors: {
      background: "#0A0A0A",
      text: "#E5E5E5",
      textGray: "#FFF9F9",
      textGraySecondary: "#8F9096",
      textDark: "#202734",
      accent: "#F29212",
      section: "#191919",
      blocks: "#2E2D2C",
      gray: "#4D4B49",
      stroke: "#615447",
      red: "#FF4124",
      deepRed: "#DE442C",
      green: "#5ABD13",
      deepGreen: "#19801E",
      lightGreen: "#3BD795",
      white: "#FFFFFF",
    },
  },
  media: {
    fromLaptop: "only screen and (min-width: 1200px)",
    toLaptop: "only screen and (max-width: 1199px)",
  },
});

export const setupGlobalStyles = () => {
  setupFonts();
  setupStyles();
};
