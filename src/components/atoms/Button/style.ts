import { styled } from "../../../styles";

export const Button = styled("button", {
  width: "100%",
  padding: "12px 24px",

  backgroundColor: "$accent",
  boxShadow:
    "0 4px 16px rgba(71, 71, 70, 0.36), 0px 2px 5px rgba(97, 50, 6, 0.1)",
  borderRadius: 8,
  border: "none",
  cursor: "pointer",

  fontFamily: "Roboto, sans-serif",
  color: "$section",
  fontSize: 12,
  lineHeight: "14px",

  transition: "0.2s ease",

  variants: {
    size: {
      small: {
        width: "fit-content",
        padding: "5px 16px",
      },
      middle: {
        width: "fit-content",
        padding: "8px 12px",
      },
      large: {},
    },
  },

  "&:disabled": {
    opacity: 0.4,
    cursor: "default",
  },

  "&:hover:not(:disabled)": {
    opacity: 0.7,
  },
});
