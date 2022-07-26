import { styled } from "../../../styles";
import { Button, Dropdown, DropdownTrigger } from "../../atoms/styled";

export const Header = styled("header", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  height: 110,

  "@toLaptop": {
    display: "none",

    position: "absolute",
    top: 60,
    right: 10,
    zIndex: 20,

    width: 200,
    height: "auto",
    padding: "26px 10px 2px",

    backgroundColor: "$section",
    border: "1px solid $accent",
    borderRadius: 12,
    boxShadow: "0 0 4px rgba(242, 146, 18, 0.4)",
  },

  variants: {
    isOpened: {
      true: {
        "@toLaptop": {
          display: "block",
        },
      },
    },
  },
});

export const Logo = styled("div", {
  display: "flex",
  alignItems: "center",

  "@toLaptop": {
    display: "none",
  },
});

export const Mobile = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  position: "absolute",
  top: 10,
  left: 10,
  right: 60,

  "@fromLaptop": {
    display: "none",
  },
});

export const MobileLogo = styled("div", {
  display: "flex",
  alignItems: "center",
});

export const Nav = styled("nav");

export const List = styled("ul", {
  display: "flex",
  alignItems: "center",

  margin: 0,
  padding: 0,

  listStyle: "none",

  "@toLaptop": {
    flexDirection: "column",
    alignItems: "flex-start",

    marginBottom: 20,
  },
});

export const Item = styled("li", {
  "&:not(:last-child)": {
    marginRight: 40,
  },

  "& > a": {
    opacity: 0.4,

    fontSize: 18,
    fontWeight: 500,
    fontStyle: "normal",
    lineHeight: "21px",
    textDecoration: "none",
    color: "$text",

    transition: "0.2s ease",

    "&.active": {
      opacity: 1,
    },
  },

  "@toLaptop": {
    "&:not(:last-child)": {
      marginRight: 0,
      marginBottom: 20,
    },

    "& > a": {
      fontFamily: "$robotoMono",
      fontSize: 14,
      fontWeight: 500,
      lineHeight: "18px",
      color: "$white",
    },
  },
});

export const SocialList = styled("ul", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  margin: 0,
  padding: 0,

  listStyle: "none",

  "@fromLaptop": {
    display: "none",
  },
});

export const SocialItem = styled("li", {
  "&:not(:last-child)": {
    marginRight: 8,
  },
});

export const CloseButton = styled("button", {
  position: "absolute",
  top: 10,
  right: 10,

  width: 16,
  height: 16,

  backgroundColor: "transparent",
  border: "none",
  cursor: "pointer",

  [`&::after,
    &::before`]: {
    content: "",

    position: "absolute",
    right: 3,
    left: 3,

    height: 1,

    backgroundColor: "$gray",
    borderRadius: 10,
  },

  "&::after": {
    transform: "rotate(45deg)",
  },

  "&::before": {
    transform: "rotate(-45deg)",
  },

  "@fromLaptop": {
    display: "none",
  },
});

export const Burger = styled("button", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  position: "absolute",
  top: 21,
  right: 10,

  width: 38,
  height: 38,

  backgroundColor: "transparent",
  border: "none",
  cursor: "pointer",

  "@fromLaptop": {
    display: "none",
  },

  "& > span": {
    position: "relative",

    width: 26,
    height: 2,

    backgroundColor: "$textGray",
    borderRadius: 10,

    [`&::after,
      &::before`]: {
      content: "",

      height: 2,

      position: "absolute",
      right: 0,
      left: 0,

      backgroundColor: "$textGray",
      borderRadius: 10,
    },

    "&::after": {
      top: -8,
    },

    "&::before": {
      bottom: -8,
    },
  },
});

export const UserNav = styled("div", {
  display: "flex",
  alignItems: "center",

  [`& > ${Button}`]: {
    margin: "10px auto 10px",

    fontWeight: 700,

    "@fromLaptop": {
      margin: "0 10px",
    },
  },

  [`& ${Dropdown}`]: {
    "@toLaptop": {
      display: "none",
    },

    [`& ${DropdownTrigger}`]: {
      marginRight: 8,

      border: "1px solid #F2EE93",
    },
  },
});

export const Balance = styled("div", {
  display: "flex",
  alignItems: "center",

  marginRight: 8,
  padding: "0 8px",

  fontFamily: "$roboto",
  fontStyle: "normal",
  fontWeight: 300,
  fontSize: 14,
  lineHeight: "14px",
  color: "$text",

  "@toLaptop": {
    display: "none",
  },
});

export const BalanceIcon = styled("span", {
  display: "block",
  flexShrink: 0,

  width: 16,
  height: 16,
  marginRight: 8,

  backgroundColor: "$gray",
  borderRadius: "100%",
});

export const Wallet = styled("span", {
  position: "relative",

  marginRight: 8,
  padding: "6px 8px",

  background: "$blocks",
  border: "1px solid $gray",
  borderRadius: 100,

  fontFamily: "$roboto",
  fontStyle: "normal",
  fontWeight: 300,
  fontSize: 14,
  lineHeight: "14px",
  color: "$text",

  "@toLaptop": {
    display: "none",
  },
});

export const WalletPendingStatus = styled("span", {
  display: "flex",
  alignItems: "center",

  position: "absolute",
  top: 32,
  right: 0,
  left: 0,

  height: 24,

  background: "$accent",
  border: "1px solid $gray",
  borderRadius: 100,
});

export const HeaderSettings = styled("div", {
  [`& > ${Button}`]: {
    margin: "20px 0 30px",
  },

  [`& > ${SocialList}`]: {
    display: "flex",
  },
});

export const Info = styled("div", {
  display: "flex",
  justifyContent: "space-around",

  marginBottom: 16,

  "@fromLaptop": {
    display: "none",
  },
});

export const InfoCard = styled("div", {
  width: "100%",
  padding: 10,

  color: "$textGray",
  fontSize: 12,
  fontWeight: 300,
  textAlign: "center",
  lineHeight: "14px",

  boxShadow: "0 0 4px rgba(242, 146, 18, 0.4)",
  borderRadius: 4,

  "& > span": {
    fontWeight: "bold",
  },
});

export const UserNavSettings = styled("button", {
  position: "absolute",
  top: 40,
  right: 10,

  backgroundColor: "transparent",
  border: "none",
  cursor: "pointer",

  "@fromLaptop": {
    position: "relative",
    top: "auto",
    right: "auto",
  },
});
