import { styled } from "../../../styles";

export const InputField = styled("input", {
  width: 50,

  backgroundColor: "transparent",
  border: "none",
  outline: "none",

  fontFamily: "Roboto Mono, sans-serif",
  color: "$text",
  fontSize: 12,
  fontWeight: 300,
  textAlign: "right",
  lineHeight: "10px",

  "&::-webkit-outer-spin-button, &::-webkit-inner-spin-button": {
    "-webkit-appearance": "none",
    margin: 0,
  },

  /* Firefox */
  "&[type=number]": {
    "-moz-appearance": "textfield",
  },
});

export const Input = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  position: "relative",

  width: "100%",
  padding: "7px 12px",

  border: "1px solid $stroke",
  borderRadius: 4,

  variants: {
    noBorder: {
      true: {
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        borderLeft: "none",
      },
    },
    fullWidth: {
      true: {
        [`& ${InputField}`]: {
          width: "100%",
          marginRight: 4,

          textAlign: "left",
        },
      },
    },
  },
});

export const TopLabel = styled("span", {
  position: "absolute",
  bottom: "calc(100% + 2px)",
  right: 2,

  fontFamily: "Roboto, sans-serif",
  color: "$text",
  fontSize: 10,
  fontWeight: 300,
  lineHeight: "11px",
});

const DefaultText = styled("span", {
  fontFamily: "Roboto, sans-serif",
  color: "$text",
  fontSize: 11,
  fontWeight: 300,
  lineHeight: 1,
});

export const Label = styled(DefaultText, {
  marginLeft: 14,
});

export const Currency = styled(DefaultText, {
  marginLeft: "auto",
  marginRight: 4,

  fontWeight: 700,
});
