import { styled } from "../../../styles";
import { Button, Sort } from "../../atoms/styled";

export const PortfolioTable = styled("div", {
  height: "calc(100% - 70px)",
  maxHeight: 520,
  padding: "0 20px 16px",

  overflow: "auto",
  backgroundColor: "$section",
  borderRadius: 12,

  "@toLaptop": {
    maxHeight: 400,
  },
});

export const Table = styled("table", {
  position: "relative",

  width: "100%",
  height: "100%",

  overflow: "auto",
  borderCollapse: "collapse",
});

const TableItemDefault = styled("td", {
  padding: "0 10px",
});

export const TableHeaderItem = styled(TableItemDefault, {
  position: "sticky",
  top: 0,

  paddingTop: 16,
  paddingBottom: 6,

  backgroundColor: "$section",
  borderBottom: "1px solid $textDark",

  fontFamily: "Roboto Mono, sans-serif",
  color: "#55647D",
  fontSize: 12,
  fontWeight: 300,
  lineHeight: "10px",
  whiteSpace: "nowrap",

  [`& > ${Sort}`]: {
    position: "relative",
    right: 14,
  },
});

export const TableItemWrapper = styled("span", {
  display: "flex",
  alignItems: "center",

  padding: "10px 0",

  [`& > ${Button}`]: {
    width: "auto",

    "&:not(:last-child)": {
      marginRight: 10,
    },
  },

  "& > svg": {
    width: 24,
    height: 24,
  },
});

export const TableIcon = styled("span", {
  display: "block",

  width: 24,
  height: 24,
  marginRight: 10,

  backgroundColor: "#C4C4C4",
  borderRadius: "100%",
});

export const Icon = styled("img", {
  display: "block",

  width: 24,
  height: 24,
});

export const TableText = styled("span", {
  fontFamily: "$robotoMono",
  color: "rgba(255, 249, 249, 0.5)",
  fontSize: 14,
  fontWeight: 500,
  lineHeight: "14px",
  whiteSpace: "nowrap",

  variants: {
    isUnderline: {
      true: {
        fontWeight: 500,
        textDecoration: "underline",
      },
    },
    leftMargin: {
      true: {
        marginLeft: 8,
      },
    },
  },
});
