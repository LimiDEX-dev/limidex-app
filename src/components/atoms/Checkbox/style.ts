import { styled } from "../../../styles";

export const StyledCheckbox = styled("span", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  width: 24,
  height: 24,
  marginRight: 8,

  backgroundColor: "transparent",
  border: "1px solid $text",
  borderRadius: 4,

  transition: "0.2s ease",

  "& > svg": {
    display: "none",
  },
});

export const CheckboxInput = styled("input", {});

export const CheckboxLabel = styled("span", {
  fontFamily: "Roboto, sans-serif",
  color: "$text",
  fontSize: 11,
  fontWeight: 300,
  lineHeight: "14px",
});

export const Checkbox = styled("label", {
  display: "flex",
  alignItems: "center",

  cursor: "pointer",

  variants: {
    type: {
      switch: {
        [`${CheckboxLabel}`]: {
          fontWeight: 700,
        },
        [`& ${StyledCheckbox}`]: {
          position: "relative",

          width: 28,
          height: 10,

          backgroundColor: "$blocks !important",
          border: "1px solid $gray !important",
          borderRadius: 100,

          "&::after": {
            content: "",

            position: "absolute",
            left: -2,

            width: 15,
            height: 15,

            backgroundColor: "$accent",
            borderRadius: 100,

            transition: "0.2s ease",
          },
        },

        [`${CheckboxInput}:checked ~ ${StyledCheckbox}`]: {
          backgroundColor: "transparent",
          borderColor: "$text",

          "&::after": {
            left: 14,
          },

          "& > svg": {
            display: "none",
          },
        },
      },
      checkbox: {},
    },
  },

  [`&:checked ~ ${StyledCheckbox}`]: {
    backgroundColor: "$accent",
    borderColor: "$accent",

    "& > svg": {
      display: "block",
    },
  },
});
