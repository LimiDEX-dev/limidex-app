import { globalCss } from "@stitches/react";

export const setupFonts = globalCss({
  "@font-face": [
    {
      fontWeight: 400,
      fontFamily: "Righteous",
      fontStyle: "normal",
      fontDisplay: "swap",
      src: 'local("Righteous"), url("../public/assets/fonts/Righteous/Regular/righteous-regular.woff2") format("woff2"), url("../public/assets/fonts/Righteous/Regular/righteous-regular.woff2") format("woff")',
    },
  ],
});
