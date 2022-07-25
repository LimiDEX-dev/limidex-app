import { styled } from "../../styles";
import {
  Description as DescriptionInstance,
  Title,
} from "../../components/atoms/styled";
import { StakingCard } from "../../components/molecules/styled";
import { List } from "../../components/molecules/StakingCard/style";

export const Staking = styled("div", {
  display: "flex",
  justifyContent: "space-between",

  height: "calc(100% - 150px)",
  marginTop: 40,

  "@toLaptop": {
    flexDirection: "column",
    justifyContent: "flex-start",

    marginTop: 0,
  },

  [`& ${StakingCard}`]: {
    "@toLaptop": {
      width: "80%",
    },
  },
});

export const Description = styled("div", {
  "@fromLaptop": {
    display: "none",
  },
});

export const Wrapper = styled("div", {
  "&:first-child": {
    width: "40%",

    "@toLaptop": {
      width: "auto",

      [`& > ${DescriptionInstance}`]: {
        display: "none",
      },

      [`& > ${Title}`]: {
        textAlign: "center",
      },
    },
  },

  "&:nth-child(2)": {
    display: "flex",
    justifyContent: "flex-end",

    width: "70%",

    "@toLaptop": {
      display: "block",

      width: "auto",
      margin: "0 -32px 30px",
    },

    "& .swiper": {
      "@fromLaptop": {
        margin: 0,

        overflow: "unset",

        "&-wrapper": {
          alignItems: "flex-start",
          justifyContent: "flex-end",
          flexWrap: "wrap",

          transform: "none !important",
        },

        "&-slide": {
          flexShrink: 1,

          width: "auto !important",
          height: "auto",
          marginBottom: 32,
          marginRight: 40,
        },
      },
    },
  },
});

export const Pagination = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  marginTop: 14,

  "@fromLaptop": {
    display: "none",
  },

  "& > .swiper-pagination-bullet": {
    display: "block",

    width: 16,
    height: 16,
    marginLeft: "0 !important",

    backgroundColor: "transparent",

    color: "#B8B5B8",

    "&:not(:last-child)": {
      marginRight: 4,
    },

    "&-active": {
      color: "$accent",
    },
  },
});

export const Modal = styled("div", {
  [`& ${List}`]: {
    marginTop: 6,
  },
});
