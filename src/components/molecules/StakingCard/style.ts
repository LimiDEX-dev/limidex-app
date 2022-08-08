import { styled } from "../../../styles";
import { Button } from "../../atoms/styled";

export const StakingCard = styled("div", {
  display: "flex",
  flexDirection: "column",

  width: "100%",
  maxWidth: 310,
  padding: "40px 20px 20px",

  border: "1px solid $accent",
  borderRadius: 12,
  backdropFilter: "blur(40px)",

  "@toLaptop": {
    margin: "0 auto",
  },

  "&:not(:last-child)": {
    "@fromLaptop": {
      marginRight: 22,
    },
  },
});

export const Header = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  marginBottom: 40,
});

export const HeaderPhoto = styled("img", {
  display: "block",

  width: 64,
  height: 64,
  marginBottom: 8,

  borderRadius: "100%",
});

export const HeaderTitle = styled("span", {
  color: "$gray",
  fontSize: 18,
  fontWeight: 500,
  lineHeight: "21px",
});

export const List = styled("ul", {
  margin: "0 0 20px",
  padding: "0",

  listStyle: "none",
});

export const Item = styled("li", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  padding: "8px 12px",

  borderBottom: "1px solid $stroke",

  "&:first-child": {
    borderTop: "1px solid $stroke",
  },
});

export const ItemTitle = styled("span", {
  color: "$gray",
  fontSize: 12,
  lineHeight: "14px",
});

export const ItemWrapper = styled("span", {
  display: "flex",
  alignItems: "center",
});

export const ItemDescr = styled("span", {
  display: "block",

  marginLeft: 4,

  fontFamily: "$robotoMono",
  color: "$textGray",
  fontSize: 14,
  fontWeight: 500,
  lineHeight: "18px",
});

export const TokensTitle = styled("span", {
  display: "block",

  marginBottom: 10,

  color: "$gray",
  fontSize: 12,
  fontWeight: "bold",
  textAlign: "center",
  lineHeight: "14px",
});

export const Tokens = styled("ul", {
  maxHeight: 64,
  margin: 0,
  padding: 0,

  border: "1px solid $stroke",
  borderRadius: 4,
  backdropFilter: "blur(40px)",
  listStyle: "none",
  overflowY: "auto",
});

export const TokensItem = styled("li", {
  display: "flex",
  alignItems: "center",

  padding: "3px 8px",

  "&:not(:last-child)": {
    borderBottom: "1px solid $stroke",
  },
});

export const TokensItemText = styled("span", {
  fontFamily: "$robotoMono",
  color: "$gray",
  fontSize: 12,
  fontWeight: 800,
  textAlign: "center",
  lineHeight: "14px",

  "&:last-child": {
    marginLeft: "auto",
  },
});

export const TokensItemBullet = styled("span", {
  display: "block",

  position: "relative",

  width: 10,
  height: 10,
  marginRight: 4,

  border: "1px solid $accent",
  borderRadius: 100,

  "&::after": {
    content: "",

    position: "absolute",
    top: 2,
    left: 2,

    width: 4,
    height: 4,

    backgroundColor: "$accent",
    borderRadius: 100,
  },
});

export const Actions = styled("div", {
  display: "flex",
  alignItems: "center",
  flexWrap: "wrap",
  justifyContent: "center",

  marginTop: 30,

  [`& > ${Button}`]: {
    width: "calc(50% - 5px)",
    marginBottom: 10,

    "&:not(:nth-child(2n))": {
      marginRight: 10,
    },
  },
});
