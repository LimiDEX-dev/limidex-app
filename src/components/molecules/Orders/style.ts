import { styled } from "../../../styles";

export const Orders = styled("div", {
  width: "100%",
  height: "100%",
  maxHeight: "100%",
  padding: "24px 20px",

  backgroundColor: "$section",
  borderRadius: 8,

  "@toLaptop": {
    paddingTop: 10,
    marginTop: 24,

    border: "none",
  },
});

export const Container = styled("div", {
  width: "100%",
  height: "100%",

  overflow: "hidden",
});

export const Tabs = styled("div", {
  display: "flex",

  lineHeight: "14px",

  "@toLaptop": {
    justifyContent: "space-around",
  },
});

export const Tab = styled("button", {
  backgroundColor: "transparent",
  border: "none",
  cursor: "pointer",
  color: "$gray",
  fontWeight: 500,
  fontSize: 18,
  lineHeight: "21px",

  "&:not(:last-child)": {
    marginRight: 20,
  },

  variants: {
    isActive: {
      true: {
        color: "$textGray",
      },
    },
  },
});

export const Content = styled("div", {
  height: "calc(100% - 24px)",
  padding: "24px 20px",
  margin: "10px 0 0",

  backgroundColor: "$section",
  borderRadius: 8,
  overflow: "auto",

  "@fromLaptop": {
    border: "none",
    padding: 0,
  },
});

export const Table = styled("table", {
  width: "100%",
});

export const TableItemWrapper = styled("div", {
  display: "flex",
  alignItems: "center",

  height: 30,

  fontSize: 13,
  lineHeight: "15px",
});

const TableItemDefault = styled("td", {
  padding: "0 10px",

  variants: {
    textCenter: {
      true: {
        textAlign: "center",

        [`& > ${TableItemWrapper}`]: {
          justifyContent: "center",
        },
      },
    },
  },
});

export const TableHeaderItem = styled(TableItemDefault, {
  position: "sticky",
  top: 0,

  paddingBottom: 4,

  backgroundColor: "$section",

  color: "$text",
  fontSize: 13,
  fontWeight: 300,
  lineHeight: "15px",
});

export const TableItem = styled(TableItemDefault, {
  borderTop: "1px solid $textDark",
  verticalAlign: "middle",

  color: "$text",
  fontWeight: 300,
});

export const Text = styled("span", {
  variants: {
    bold: {
      true: {
        fontWeight: 700,
      },
    },
  },
});

export const DeleteButton = styled("button", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  minWidth: 35,
  height: 15,
  padding: "0 4px",

  background: "#88888D",
  border: "none",
  borderRadius: 10,
  cursor: "pointer",

  color: "$text",
  fontSize: 11,
  fontWeight: 500,
  whiteSpace: "nowrap",
  lineHeight: "13px",

  "& path": {
    fill: "$textDark",
  },
});
