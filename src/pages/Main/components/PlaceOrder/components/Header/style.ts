import { styled } from "../../../../../../styles";

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
