import { styled } from "../../../styles";
import { Button } from "../../atoms/styled";

export const Rewards = styled("div", {
  maxHeight: 200,
  padding: "8px 20px",
  margin: "30px 0",

  border: "1px solid $accent",
  borderRadius: 12,
  backdropFilter: "blur(40px)",

  "@fromLaptop": {
    marginTop: 100,
    marginBottom: 0,
  },
});

export const Title = styled("h3", {
  display: "flex",
  alignItems: "center",

  marginTop: 0,
  marginBottom: 10,

  fontSize: 18,
  color: "$textGray",
  fontWeight: 500,
  lineHeight: "21px",

  [`& > ${Button}`]: {
    marginLeft: 16,
  },
});

export const TableWrapper = styled("div", {
  maxHeight: 150,

  overflowY: "auto",
});

export const Table = styled("table", {
  width: "100%",

  borderCollapse: "collapse",
});

export const TableHeaderItem = styled("th", {
  position: "sticky",
  top: 0,

  padding: "4px 8px",

  backgroundColor: "$background",
  borderTop: "1px solid $textDark",
  borderBottom: "1px solid $textDark",

  fontSize: 15,
  color: "$text",
  fontWeight: 300,
  lineHeight: "18px",
  textAlign: "left",
});

export const TableItem = styled("td", {
  padding: "4px 8px",

  color: "$text",
  fontSize: 13,
  lineHeight: "15px",
  textAlign: "left",
});

export const TableItemButton = styled("button", {
  padding: "2px 6px",

  background: "$gray",
  border: "none",
  borderRadius: 8,
  cursor: "pointer",

  color: "$text",
  fontSize: 12,
  fontWeight: 500,
  lineHeight: "14px",
});

export const Row = styled("tr", {
  "&:not(:last-child)": {
    borderBottom: "1px solid $textDark",
  },
});
