import { styled } from "../../styles";
import { Button, Description, Title } from "../../components/atoms/styled";

export const Referral = styled("div", {
  display: "flex",
  flexDirection: "column",
});

export const List = styled("ul", {
  margin: "0 0 0 30px",
  padding: 0,
});

export const Link = styled("span", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  marginBottom: 15,
  marginTop: 15,

  fontFamily: "$robotoMono",
  fontSize: 14,
  fontWeight: 500,
  lineHeight: "18px",

  "@fromLaptop": {
    justifyContent: "flex-start",

    padding: 0,
    marginTop: 20,
    marginBottom: 0,

    border: "none",

    fontFamily: "$roboto",
    fontSize: 18,
    fontWeight: 400,
    lineHeight: "21px",
  },
});

export const MainWrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  order: 2,

  [`& ${Link}`]: {
    display: "none",
  },

  "@fromLaptop": {
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "row",
    order: 1,

    marginTop: 40,

    [`& ${Link}`]: {
      display: "flex",
    },
  },
});

export const LinkHref = styled("a", {
  display: "block",

  marginLeft: 5,

  fontFamily: "$roboto",
  fontWeight: 500,
  color: "$accent",

  "@fromLaptop": {
    fontSize: 22,
    fontWeight: 700,
    lineHeight: "26px",
  },
});

export const LinkButton = styled("button", {
  display: "block",

  marginLeft: 8,

  backgroundColor: "transparent",
  border: "none",
  cursor: "pointer",

  "& > svg": {
    width: 24,
    height: 24,
  },

  "@fromLaptop": {
    "& > svg": {
      width: 36,
      height: 36,
    },
  },
});

export const EarnedTitle = styled("h3", {
  margin: 0,

  color: "$text",
  fontSize: 20,
  fontWeight: 700,
  lineHeight: "26px",

  "&:first-child": {
    marginBottom: 15,
  },

  "&:nth-child(2)": {
    marginBottom: 5,
  },

  "@fromLaptop": {
    fontSize: 30,
    lineHeight: "36px",

    "&:first-child": {
      marginBottom: 40,
    },

    "&:nth-child(2)": {
      marginBottom: 10,
    },
  },

  "& > span": {
    color: "$lightGreen",
  },
});

export const Wrapper = styled("div", {
  "&:first-child": {
    order: 2,

    [`& > ${Title}`]: {
      display: "none",
    },

    [`& > ${Description}`]: {
      display: "flex",
      flexDirection: "column",

      "& > span:first-child": {
        order: 2,
      },

      [`& > ${Link}`]: {
        order: 1,
      },
    },
  },

  "&:last-child": {
    order: 1,

    marginBottom: 20,

    [`& > ${Button}`]: {
      width: "auto",

      "@fromLaptop": {
        fontSize: 16,
        fontWeight: 500,
        lineHeight: "18px",
      },
    },
  },

  "@fromLaptop": {
    "&:first-child": {
      order: 1,

      width: "50%",
      marginRight: 100,

      [`& > ${Title}`]: {
        display: "block",
      },

      [`& > ${Description}`]: {
        "& > span:first-child": {
          order: 1,
        },

        [`& > ${Link}`]: {
          order: 2,
        },
      },
    },

    "&:last-child": {
      order: 2,

      width: "50%",
      marginBottom: 0,
    },
  },
});

export const Stats = styled("div", {
  width: "100%",
  padding: 10,
  margin: "20px 0",

  backgroundColor: "$section",
  borderRadius: 12,

  "@fromLaptop": {
    padding: "8px 20px",
  },
});

export const StatsTitle = styled("span", {
  display: "none",
  alignItems: "center",

  maxHeight: 300,
  marginBottom: 10,

  color: "$text",
  fontSize: 20,
  lineHeight: "23px",
  fontWeight: 500,

  "@fromLaptop": {
    display: "flex",
  },
});

export const StatsWrapper = styled("div", {
  order: 1,

  [`& > ${Link}`]: {
    "@fromLaptop": {
      display: "none",
    },
  },

  [`& > ${Title}`]: {
    fontSize: 20,
    fontWeight: 500,
    textAlign: "center",
    lineHeight: "26px",

    "@fromLaptop": {
      display: "none",
    },
  },

  "@fromLaptop": {
    order: 2,
  },
});

export const Table = styled("table", {
  width: "100%",

  borderCollapse: "collapse",
});

export const TableWrapper = styled("div", {
  maxHeight: 230,

  overflowY: "auto",

  "@fromLaptop": {
    maxHeight: 300,
  },
});

const TableDefaultItem = styled("td", {
  padding: "4px 8px",

  textAlign: "left",

  "@toTablet": {
    [`&:nth-child(2),
  &:nth-child(3),
  &:nth-child(4),
  &:nth-child(5),
  &:nth-child(6)`]: {
      display: "none",
    },
  },
});

export const TableHeaderItem = styled(TableDefaultItem, {
  position: "sticky",
  top: 0,

  backgroundColor: "$section",
  borderBottom: "1px solid $textDark",

  color: "$text",
  fontSize: 15,
  fontWeight: 500,
  lineHeight: "18px",

  "&:not(:first-child)": {
    textAlign: "center",
  },

  "@fromLaptop": {
    fontSize: 18,
    lineHeight: "21px",
  },
});

export const Row = styled("tr", {
  "&:not(:last-child)": {
    borderBottom: "1px solid $textDark",
  },
});

export const TableItem = styled(TableDefaultItem, {
  color: "$text",
  fontSize: 12,
  lineHeight: "14px",

  "&:not(:first-child)": {
    textAlign: "center",
  },

  "@fromLaptop": {
    fontSize: 15,
    lineHeight: "18px",
  },

  [`& > ${Button}`]: {
    padding: "2px 6px",
  },
});

export const ActionButtons = styled("div", {
  display: "flex",
  alignItems: "center",

  [`& > ${Button}:not(:last-child)`]: {
    marginRight: 20,
  },
});
