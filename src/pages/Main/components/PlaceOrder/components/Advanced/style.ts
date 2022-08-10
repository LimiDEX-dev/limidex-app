import { styled } from "../../../../../../styles";

import { Input, Button } from "../../../../../../components/atoms/styled";

export const More = styled("button", {
  display: "flex",
  alignItems: "center",

  position: "relative",

  margin: "24px 0 0",

  backgroundColor: "transparent",
  border: "none",
  cursor: "pointer",

  fontFamily: "Roboto, sans-serif",
  fontSize: 12,
  lineHeight: "14px",
  color: "$text",

  "& > svg": {
    marginLeft: 8,

    transition: "0.2s ease",
  },

  variants: {
    isOpened: {
      true: {
        "& > svg": {
          transform: "rotate(180deg)",
        },
      },
    },
  },
});

export const Advanced = styled("div", {
  marginTop: 14,
});

export const AdvancedInputs = styled("div", {
  display: "flex",
  alignItems: "center",
  flexWrap: "wrap",

  [`& > ${Input}`]: {
    width: "calc(50% - 5px)",
    marginBottom: 8,

    "&:not(:nth-child(2n))": {
      marginRight: 8,
    },

    "& input": {
      width: 30,
    },
  },
});

export const AdvancedSubmit = styled("div", {
  display: "flex",
  justifyContent: "flex-end",

  [`& > ${Button}`]: {
    marginTop: 0,
  },
});
