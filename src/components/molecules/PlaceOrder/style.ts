import { styled } from "../../../styles";

import { Currency, TopLabel } from "../../atoms/Input/style";
import {
  Button,
  Input,
  Popup,
  DropdownTrigger,
  DropdownTriggerLabel,
} from "../../atoms/styled";

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

export const TitleWrapper = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  marginBottom: 20,
});

export const TabSwitch = styled("div", {
  display: "flex",
  justifyContent: "space-between",

  position: "relative",

  height: 31,
  marginBottom: 35,

  "&::after": {
    content: "",

    position: "absolute",
    bottom: -2,
    left: 0,

    width: "100%",
    height: 2,

    backgroundColor: "$accent",
    opacity: 0.3,
  },

  "@toLaptop": {
    marginTop: 0,
    marginBottom: 12,
  },
});

export const TabSwitchButton = styled("button", {
  position: "relative",

  backgroundColor: "transparent",
  border: "none",
  cursor: "pointer",

  color: "$text",
  fontSize: 18,
  fontWeight: 500,
  lineHeight: "21px",

  transition: "0.2s ease",

  "&::after": {
    content: "",

    position: "absolute",
    bottom: -2,
    left: 0,

    width: "100%",
    height: 2,

    backgroundColor: "$accent",
    opacity: 0,

    transition: "0.2s ease",
  },

  "&:not(:last-child)": {
    marginRight: 10,
  },

  variants: {
    isActive: {
      true: {
        "&::after": {
          opacity: 1,
        },
      },
    },
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

export const ValuteConverter = styled("div", {
  position: "relative",
  width: "100%",
  marginBottom: 24,

  backgroundColor: "$blocks",
  border: "1px solid $stroke",
  borderRadius: 13,
});

export const ValuteConverterHeader = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  padding: "8px 10px 0",
  marginBottom: 10,
});

export const ValuteConverterHeaderItem = styled("span", {
  color: "$text",
  fontSize: 12,
  fontWeight: 300,
  lineHeight: "14px",
});

export const ValuteConverterHeaderItemTitle = styled(
  ValuteConverterHeaderItem,
  {
    fontWeight: 700,
  },
);

export const ValuteConverterContent = styled("div", {
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

export const Routes = styled("div", {
  position: "relative",
  margin: "24px 0 0",
  padding: 10,

  backgroundColor: "$blocks",
  borderRadius: 15,
});

export const RoutesLabel = styled("label", {
  display: "block",
  cursor: "pointer",

  "&:not(:last-child)": {
    marginBottom: 6,
  },
});

export const RoutesRadio = styled("div", {
  display: "inline-block",

  position: "relative",

  width: 10,
  height: 10,

  border: "1px solid $accent",
  borderRadius: 5,
});

export const RoutesInput = styled("input", {
  [`&:checked ~ ${RoutesRadio}`]: {
    "&:after": {
      content: "",

      display: "block",

      position: "absolute",
      left: 2,
      top: 2,

      width: 4,
      height: 4,

      background: "$accent",
      borderRadius: 2,
    },
  },
});

export const RoutesRadioLabel = styled("span", {
  display: "inline-block",

  marginLeft: 9,

  fontSize: 13,
  lineHeight: "14px",
  color: "$text",
});

export const RoutesRadioTitle = styled("span", {
  display: "block",

  marginLeft: 19,
  marginTop: 4,

  color: "rgba(255, 255, 255, 0.5)",
  fontSize: 11,
  fontWeight: 300,
  lineHeight: "11px",
});

export const Trade = styled("div", {
  display: "flex",
  alignItems: "center",

  paddingLeft: 10,
  marginTop: 24,

  [`& > ${Popup}`]: {
    flexShrink: 0,

    marginRight: 20,

    "& .input__flex-label": {
      color: "$text",
      fontSize: 11,
      fontWeight: 700,
      lineHeight: "13px",
    },
  },

  [`& ${DropdownTrigger}`]: {
    width: "100%",
  },

  [`& ${DropdownTriggerLabel}`]: {
    color: "$text",
    textAlign: "left",
  },

  "& .dropdown__trigger__label": {
    marginLeft: 8,

    fontWeight: 700,
    textAlign: "left",

    "& > span": {
      fontWeight: 400,
    },
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
