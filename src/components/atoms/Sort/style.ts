import { styled } from "../../../styles";

export const Descr = styled("span", {
  display: "block",

  marginLeft: 6,

  fontFamily: "Roboto Mono, sans-serif",
  color: "#55647D",
  fontSize: 12,
  fontWeight: 300,
  lineHeight: "10px",
});

export const Icons = styled("span", {
  display: "flex",
  alignItems: "center",

  "& > svg": {
    color: "#55647D",

    transition: "color 0.2s ease",

    "&:first-child": {
      transform: "rotate(180deg) translateX(-20px)",
    },

    "&:nth-child(2)": {
      visibility: "hidden",
    },

    "&:last-child": {
      transform: "translateX(4px)",
    },
  },
});

export const Sort = styled("button", {
  display: "flex",
  alignItems: "center",

  backgroundColor: "transparent",
  border: "none",
  cursor: "pointer",

  variants: {
    word: {
      true: {
        word: {
          [`${Icons} > svg`]: {
            "&:first-child": {
              transform: "rotate(180deg) translateX(-12px)",
            },
            "&:nth-child(2)": {
              visibility: "visible",
              transform: "translateX(8px)",
            },

            "&:last-child": {
              visibility: "hidden",
              transform: "translateX(3px)",
            },
          },
        },
      },
    },
    sort: {
      no: {},
      up: {
        [`${Icons} > svg`]: {
          color: "$accent",

          "&:first-child": {
            visibility: "hidden",
          },

          "&:last-child": {
            visibility: "visible",
          },
        },
      },
      down: {
        [`${Icons} > svg`]: {
          color: "$accent",

          "&:first-child": {
            visibility: "visible",
          },

          "&:last-child": {
            visibility: "hidden",
          },
        },
      },
    },
  },
});
