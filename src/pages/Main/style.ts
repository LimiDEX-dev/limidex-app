import { styled } from "../../styles";
import { Orders, PlaceOrder } from "../../components/molecules/styled";

export const Actions = styled("div", {
  display: "none",
  alignItems: "center",
  justifyContent: "center",
  order: 2,

  marginTop: 8,

  "@fromLaptop": {
    display: "none !important",
  },
});

export const ActionButton = styled("button", {
  backgroundColor: "transparent",
  border: "none",
  cursor: "pointer",

  "&:not(:last-child)": {
    marginRight: 20,
  },
});

export const LeftContent = styled("div", {
  alignSelf: "flex-start",
  order: 4,

  margin: "0 auto",

  "@fromLaptop": {
    paddingLeft: 10,
  },
});

export const RightContent = styled("div", {
  display: "none",
  flexDirection: "column",
  order: 1,

  height: 300,
  padding: "0 16px",
  margin: "0 -16px",

  overflow: "hidden",

  "@fromLaptop": {
    order: 3,

    height: "auto",
    width: "100%",
    margin: 0,
    padding: 0,

    border: "none",
  },
});

export const Main = styled("div", {
  display: "flex",
  flexDirection: "column",

  width: "100%",
  height: "calc(100% - 110px)",

  "@fromLaptop": {
    flexDirection: "row",
  },

  [`& > ${Orders}`]: {
    order: 5,

    display: "none",

    "@fromLaptop": {
      display: "none !important",
    },
  },

  variants: {
    isExpertMode: {
      true: {
        [`& ${Orders}`]: {
          display: "block",
        },

        [`& ${RightContent}`]: {
          display: "flex",
        },

        [`& ${LeftContent}`]: {
          alignSelf: "stretch",

          margin: 0,
        },

        [`& ${Actions}`]: {
          display: "flex",
        },

        [`& ${PlaceOrder}`]: {
          "@fromLaptop": {
            width: 330,
          },
        },
      },
    },
  },
});

export const RightTop = styled("div", {
  width: "100%",
  height: "100%",

  "@fromLaptop": {
    display: "flex",

    height: "60%",
    paddingRight: 10,
    paddingBottom: 10,
  },
});

const RightTopContentContainer = styled("div", {
  display: "none",

  height: "100%",

  "@fromLaptop": {
    display: "block",
  },

  variants: {
    isActive: {
      true: {
        display: "block",
      },
    },
  },
});

export const ChartContainer = styled(RightTopContentContainer, {
  width: "100%",

  "@fromLaptop": {
    paddingLeft: 10,
  },
});

export const ExchangeRatesContainer = styled(RightTopContentContainer, {
  "@fromLaptop": {
    paddingRight: 10,
  },
});

export const RightBottom = styled("div", {
  display: "none",

  paddingTop: 10,
  height: "40%",

  "@fromLaptop": {
    display: "block",
    paddingRight: 10,
  },
});
