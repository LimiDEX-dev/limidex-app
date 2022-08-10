import { styled } from "../../../../styles";

import { Currency, TopLabel } from "../../../../components/atoms/Input/style";
import {
  Button,
  Input,
  Popup,
  DropdownTrigger,
  DropdownTriggerLabel,
} from "../../../../components/atoms/styled";

export const PlaceOrder = styled("div", {
  height: "100%",
  padding: "24px 20px",

  overflow: "auto",
  backgroundColor: "$section",
  borderRadius: 8,

  fontFamily: "Roboto, sans-serif",
  fontStyle: "normal",
  fontWeight: "normal",

  "@fromLaptop": {
    width: 360,

    borderRadius: 12,
  },

  "@toLaptop": {
    marginTop: 24,
  },
});

export const Content = styled("div", {
  "@fromLaptop": {
    padding: 0,

    border: "none",
  },
});

export const Valute = styled("div", {});

export const ValuteConverterWrapper = styled("div", {
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "space-between",

  marginBottom: 10,
});

export const ValuteToggle = styled("div", {
  display: "flex",
});

export const ValuteToggleButton = styled("button", {
  padding: "5px 10px",

  backgroundColor: "transparent",
  border: "1px solid $text",
  cursor: "pointer",

  color: "$text",
  fontSize: 11,
  fontWeight: 500,
  lineHeight: "11px",

  transition: "0.2s ease",

  "&:first-child": {
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
    borderRight: "none",
  },

  "&:last-child": {
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
    borderLeft: "none",
  },

  variants: {
    isActive: {
      true: {
        background: "$accent",
        borderColor: "$accent",
      },
    },
  },
});

export const Chain = styled("div", {
  display: "flex",

  position: "relative",
});

export const ChainTitle = styled("span", {
  display: "block",

  position: "absolute",
  bottom: "calc(100% + 2px)",
  left: 2,

  color: "$textGraySecondary",
  fontSize: 11,
  fontWeight: 700,
  lineHeight: "13px",
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

export const BurnLmx = styled("div");

export const BurnLmxInfo = styled("div", {
  marginTop: 0,
  marginBottom: 24,

  fontSize: 13,
  fontWeight: 700,
  lineHeight: "15px",
});

export const CustomInputContainer = styled("div", {
  [`& ${Input}`]: {
    order: 1,

    // width: 60,

    color: "$white",
    fontSize: 15,
    fontWeight: 700,
    textAlign: "left",
    lineHeight: 18,
  },

  [`& ${Currency}`]: {
    order: 2,
  },

  [`& ${TopLabel}, & .input__flex-label`]: {
    right: "auto",
    left: 2,

    color: "$textGraySecondary",
    fontSize: 11,
    fontWeight: 700,
    lineHeight: "13px",
  },
});

export const Info = styled("div", {
  marginTop: 24,

  color: "$text",
  fontSize: 12,
  fontWeight: 700,
  lineHeight: "14px",
});

export const SubmitButton = styled(Button, {
  marginTop: 70,
});
