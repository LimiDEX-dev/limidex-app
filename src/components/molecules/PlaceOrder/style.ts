import { styled } from "../../../styles";

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
