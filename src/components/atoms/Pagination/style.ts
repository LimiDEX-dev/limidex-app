import { styled } from "../../../styles";

export const Pagination = styled("div", {
  display: "flex",
  justifyContent: "flex-end",

  marginTop: 10,
});

export const Page = styled("button", {
  width: 35,
  padding: "4px 0",

  backgroundColor: "transparent",
  border: "1px solid $stroke",
  borderRadius: 2,
  cursor: "pointer",

  color: "$text",
  fontSize: 18,

  transition: "0.2s ease-in-out",

  "&:not(:last-child)": {
    marginRight: 4,
  },

  "&:disabled": {
    cursor: "default",
  },

  variants: {
    isActive: {
      true: {
        backgroundColor: "$accent",
        borderColor: "$accent",
      },
    },
  },
});
