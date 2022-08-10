import { styled } from "../../../../../../styles";

export const ConvertDropdowns = styled("div");

export const Converter = styled("div", {
  position: "relative",
  width: "100%",
  marginBottom: 24,

  backgroundColor: "$blocks",
  border: "1px solid $stroke",
  borderRadius: 13,
});

export const ConverterHeader = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  padding: "8px 10px 0",
  marginBottom: 10,
});

export const ConverterHeaderItem = styled("span", {
  color: "$text",
  fontSize: 12,
  fontWeight: 300,
  lineHeight: "14px",
});

export const ConverterHeaderItemTitle = styled(ConverterHeaderItem, {
  fontWeight: 700,
});

export const ConverterContent = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-end",

  padding: "0 10px 8px 0",

  "& .dropdown__trigger__label": {
    marginLeft: 8,

    fontWeight: 700,
    textAlign: "left",

    "& > span": {
      fontWeight: 400,
    },
  },
});

export const CustomInput = styled("input", {
  display: "block",

  width: "100%",
  maxWidth: 150,

  backgroundColor: "transparent",
  border: "none",
  outline: "none",

  color: "$white",
  textAlign: "right",
  fontSize: 20,
  fontWeight: 700,
  lineHeight: "23px",
});

export const CustomInputTopLabel = styled("span", {
  display: "block",

  marginBottom: 2,

  fontSize: 10,
  fontWeight: 700,
  textAlign: "right",
  lineHeight: "12px",
});

export const SwapWrapper = styled("div", {
  display: "flex",
  justifyContent: "space-between",

  marginBottom: 10,

  variants: {
    noInputs: {
      true: {
        justifyContent: "center",

        margin: "-16px 0 10px",

        "& > .swap-icon": {
          margin: 0,
        },
      },
    },
  },
});

export const SwapButton = styled("button", {
  display: "block",
  flexShrink: 0,

  width: 18,
  height: 18,
  margin: 10,

  backgroundColor: "transparent",
  border: "none",
  cursor: "pointer",
});
