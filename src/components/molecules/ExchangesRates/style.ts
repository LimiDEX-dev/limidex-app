import { styled } from "../../../styles";
import { DropdownTrigger } from "../../atoms/styled";

export const ExchangeRates = styled("div", {
  display: "flex",
  flexDirection: "column",

  height: "100%",
  padding: 0,

  backgroundColor: "$section",
  borderRadius: 8,

  "@fromLaptop": {
    width: 310,
  },

  "@toLaptop": {
    border: "none",
  },
});

export const Header = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  padding: "24px 20px 0",

  [`& ${DropdownTrigger}`]: {
    padding: "4px 8px",

    borderColor: "$gray",
    borderRadius: 4,
  },
});

export const Title = styled("span", {
  display: "block",

  color: "$text",
  fontSize: 14,
  lineHeight: "16px",
});

export const Step = styled("div", {
  display: "flex",
  alignItems: "center",
});

export const StepItem = styled("span", {
  color: "$text",
  fontSize: 11,
  fontWeight: 700,
  lineHeight: "11px",

  "&:first-child": {
    marginRight: 12,
  },
});

export const Content = styled("div", {
  height: "100%",
  padding: "0 20px",

  overflow: "auto",
});

export const Table = styled("table", {
  position: "relative",

  width: "100%",

  borderCollapse: "collapse",
});

export const TableHeaderItem = styled("td", {
  position: "sticky",
  zIndex: 2,
  top: 0,

  padding: "13px 0",

  backgroundColor: "$section",

  color: "$text",
  fontSize: 13,
  fontWeight: 500,

  "&:first-child": {
    paddingRight: 29,
  },

  "&:last-child": {
    paddingRight: 17,
    textAlign: "right",
  },
});

export const TableItem = styled("td", {
  fontFamily: "$robotoMono",
  color: "$text",
  fontSize: 13,
  fontWeight: 300,
  lineHeight: "11px",

  "&:last-child": {
    textAlign: "right",

    "& > span": {
      position: "relative",
      zIndex: 1,
    },
  },
});

export const Progress = styled("div", {
  position: "absolute",
  zIndex: 0,
  right: 0,

  height: 16,

  transform: "translateY(-14px)",
});

export const Row = styled("tr", {
  height: 16,

  variants: {
    redRate: {
      true: {
        [`& ${TableItem}`]: {
          color: "$red",

          [`& ${Progress}`]: {
            backgroundColor: "rgba(255, 65, 36, 0.3)",
          },
        },
      },
    },
    big: {
      true: {
        [`& ${TableItem}`]: {
          color: "inherit",

          [`& ${Progress}`]: {
            display: "none",
          },
        },
      },
    },
    greenRate: {
      true: {
        [`& ${TableItem}`]: {
          color: "green",

          [`& ${Progress}`]: {
            backgroundColor: "rgba(90, 189, 19, 0.3)",
          },
        },
      },
    },
  },
});
