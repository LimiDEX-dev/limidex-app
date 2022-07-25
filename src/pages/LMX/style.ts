import { styled } from "../../styles";
import {
  Description as DescriptionInstance,
  Title,
} from "../../components/atoms/styled";
import { List } from "../../components/molecules/StakingCard/style";

export const LMX = styled("div", {
  display: "flex",
  justifyContent: "space-between",

  height: "calc(100% - 150px)",
  marginTop: 40,

  "@toLaptop": {
    flexDirection: "column",
    justifyContent: "flex-start",

    marginTop: 0,
  },
});

export const Wrapper = styled("div", {
  "&:first-child": {
    [`& > ${DescriptionInstance}`]: {
      display: "none",
    },

    [`& > ${Title}`]: {
      textAlign: "center",
    },

    [`& > .lmx__rewards`]: {
      display: "none",
    },

    "@fromLaptop": {
      width: "40%",
      marginRight: 80,

      [`& > ${DescriptionInstance}`]: {
        display: "block",
      },

      [`& > ${Title}`]: {
        textAlign: "left",
      },

      [`& > .lmx__rewards`]: {
        display: "block",
      },
    },
  },

  "&:nth-child(2)": {
    margin: "0 -32px 12px",

    "@fromLaptop": {
      width: "60%",

      "& .swiper": {
        "&-wrapper": {
          flexWrap: "wrap",
          justifyContent: "center",
        },

        "&-slide": {
          width: "calc(50% - 20px) !important",
          maxWidth: 310,

          "&:first-child": {
            display: "flex",
            justifyContent: "center",

            width: "100% !important",
            maxWidth: "none",
            marginBottom: 30,
          },

          "&:nth-child(2)": {
            marginRight: 40,
          },
        },
      },
    },
  },
});

export const Description = styled("span", {
  display: "flex",
  alignItems: "flex-start",

  marginTop: 20,
});

export const DescriptionWrapper = styled("span", {
  width: "100%",
});

export const DescriptionMainWrapper = styled("div", {
  "@fromLaptop": {
    display: "none",
  },
});

export const DescriptionTitle = styled("span", {
  display: "block",

  marginBottom: 20,

  fontWeight: "bold",
});

export const DescriptionContent = styled("span", {
  whiteSpace: "pre-wrap",
});

export const Modal = styled("div", {
  [`& ${List}`]: {
    marginTop: 6,
  },
});
