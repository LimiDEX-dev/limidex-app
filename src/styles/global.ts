import { globalCss } from "@stitches/react";

export const setupStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },

  body: {
    background: "$background",

    color: "$text",
    fontFamily: "Roboto, sans-serif",
  },

  "html, body": {
    width: "100%",

    "@media (min-width: 1200px)": {
      height: "100%",
    },
  },

  ".apexcharts-tooltip": {
    color: "$section",
  },

  "#root": {
    width: "100%",
    height: "100%",
  },

  ".visually-hidden": {
    position: "absolute",

    width: 1,
    height: 1,
    margin: -1,
    border: 0,
    padding: 0,

    whiteSpace: "nowrap",

    clipPath: "inset(100%)",
    clip: "rect(0 0 0 0)",
    overflow: "hidden",
  },

  ".input__flex-label": {
    display: "flex",
    alignItems: "center",

    wordBreak: "keep-all",
    whiteSpace: "nowrap",
    color: "$text",

    "& > div": {
      marginLeft: 4,
    },
  },

  "#chart": {
    width: "100%",
    height: "calc(100% - 50px)",
    margin: "0 -40px",

    svg: {
      width: "100%",
      height: "100%",
    },

    "@fromTablet": {
      height: "100%",
      margin: 0,
    },
  },
});
