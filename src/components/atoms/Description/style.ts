import { styled } from "../../../styles";

export const Description = styled("span", {
  color: "$textGray",
  fontSize: 18,
  lineHeight: "21px",

  "@toLaptop": {
    fontFamily: "Roboto Mono, sans-serif",
    fontSize: 14,
    fontWeight: 500,
    lineHeight: "18px",
  },
});
