import { styled } from "../../../styles";

export const Title = styled("h1", {
  marginTop: 0,
  marginBottom: 50,

  color: "$textGray",
  fontSize: 48,
  lineHeight: 56,

  "@toTablet": {
    marginBottom: 14,

    fontFamily: "Roboto Mono, sans-serif",
    fontSize: 14,
    fontWeight: 500,
    lineHeight: "18px",
  },
});
