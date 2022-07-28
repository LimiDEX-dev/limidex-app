import { styled } from "../../../styles";

export const CoinDescription = styled("div");

export const Coin = styled("div");

export const Title = styled("span", {
  display: "block",

  marginBottom: 6,

  color: "$gray",
  fontSize: 12,
  textAlign: "center",
  fontWeight: "bold",
  lineHeight: "14px",
});

export const Check = styled("span", {
  display: "block",

  marginBottom: 6,

  color: "#B0685D",
  fontSize: 12,
  fontWeight: "bold",
  lineHeight: "14px",
});

export const MainDescr = styled("span", {
  display: "flex",
  alignItems: "center",

  marginBottom: 4,

  fontFamily: "Roboto Mono, sans-serif",
  color: "$white",
  fontSize: 11,
  fontWeight: 300,
  lineHeight: "10px",
});

export const Descr = styled("span", {
  display: "flex",
  alignItems: "center",

  marginBottom: 2,

  color: "$gray",
  fontSize: 11,
  fontWeight: 300,
  lineHeight: "11px",
});

export const Submit = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  marginTop: 20,
});

export const SubmitDescr = styled("span", {
  color: "#FFFFFF",
  fontSize: 11,
  fontWeight: 300,
  lineHeight: "11px",
});
