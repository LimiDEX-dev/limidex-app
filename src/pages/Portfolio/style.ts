import { styled } from "../../styles";
import { Button, Input } from "../../components/atoms/styled";

export const Portfolio = styled("div", {
  height: "100%",
  marginBottom: 70,
});

export const Info = styled("div", {
  padding: 20,
  marginBottom: 20,

  background: "$section",
  borderRadius: 10,

  "@fromLaptop": {
    display: "flex",
    alignItems: "flex-start",

    paddingBottom: 50,
  },
});

export const InfoWrapper = styled("div", {
  "@fromLaptop": {
    marginRight: 80,
  },
});

export const InfoWallet = styled("div", {
  display: "flex",
  alignItems: "center",
  flexWrap: "wrap",

  marginBottom: 10,

  [`& > ${Button}`]: {
    "&:first-of-type": {
      marginRight: 8,
    },
  },
});

export const InfoWalletTitle = styled("span", {
  display: "block",

  marginRight: 20,

  fontSize: 14,
  fontWeight: 500,
  lineHeight: "16px",
  wordBreak: "break-all",

  "@fromLaptop": {
    fontSize: 18,
    lineHeight: "21px",
  },
});

export const InfoStats = styled("div", {
  display: "flex",
  alignItems: "center",

  marginBottom: 14,

  "@fromLaptop": {
    marginBottom: 30,
  },
});

export const InfoStatsItem = styled("span", {
  display: "block",

  fontSize: 18,
  fontWeight: 500,
  lineHeight: "21px",

  "& > span": {
    color: "#C4C4C4",
  },

  "&:not(:last-child)": {
    marginRight: 30,
  },
});

export const InfoRewards = styled("div", {
  display: "flex",
  alignItems: "center",
});

export const InfoBalance = styled("div");

export const InfoBalanceTitle = styled("span", {
  display: "block",

  marginBottom: 16,

  fontSize: 18,
  fontWeight: 700,
  lineHeight: "21px",

  "@fromLaptop": {
    fontSize: 30,
    lineHeight: "35px",
  },
});

export const InfoBalanceTags = styled("div", {
  display: "flex",
  alignItems: "center",
});

export const InfoBalanceTag = styled("span", {
  padding: "6px 8px",

  background: "$blocks",
  border: "1px solid $gray",
  borderRadius: 13,
  opacity: 0.7,

  color: "$text",
  fontSize: 12,
  fontWeight: 400,
  lineHeight: "14px",

  "&:not(:last-child)": {
    marginRight: 4,
  },

  "@fromLaptop": {
    "&:last-child": {
      marginLeft: "auto",
    },
  },

  variants: {
    red: {
      true: {
        "& > span": {
          color: "$red",
        },
      },
    },
    green: {
      true: {
        "& > span": {
          color: "$green",
        },
      },
    },
  },
});

export const List = styled("ul", {
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",

  margin: "0 0 20px",
  padding: 0,

  listStyle: "none",
  overflowX: "auto",
});

export const Title = styled("span", {
  display: "block",

  marginBottom: 20,

  fontFamily: "$robotoMono",
  color: "#FFF9F9",
  fontSize: 14,
  fontWeight: 500,
  lineHeight: "18px",

  "@fromLaptop": {
    display: "none",
  },
});

export const ModalTitle = styled("span", {
  display: "block",

  marginBottom: 24,

  fontFamily: "$robotoMono",
  fontSize: 12,
  fontWeight: 400,
  textAlign: "center",
  lineHeight: "14px",
});

export const ModalActions = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  [`& > ${Input}`]: {
    width: "auto",
  },
});
