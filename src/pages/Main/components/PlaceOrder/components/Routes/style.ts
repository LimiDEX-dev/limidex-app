import { styled } from "../../../../../../styles";

export const Routes = styled("div", {
  position: "relative",
  margin: "24px 0 0",
  padding: 10,

  backgroundColor: "$blocks",
  borderRadius: 15,
});

export const RoutesLabel = styled("label", {
  display: "block",
  cursor: "pointer",

  "&:not(:last-child)": {
    marginBottom: 6,
  },
});

export const RoutesRadio = styled("div", {
  display: "inline-block",

  position: "relative",

  width: 10,
  height: 10,

  border: "1px solid $accent",
  borderRadius: 5,
});

export const RoutesInput = styled("input", {
  [`&:checked ~ ${RoutesRadio}`]: {
    "&:after": {
      content: "",

      display: "block",

      position: "absolute",
      left: 2,
      top: 2,

      width: 4,
      height: 4,

      background: "$accent",
      borderRadius: 2,
    },
  },
});

export const RoutesRadioLabel = styled("span", {
  display: "inline-block",

  marginLeft: 9,

  fontSize: 13,
  lineHeight: "14px",
  color: "$text",
});

export const RoutesRadioTitle = styled("span", {
  display: "block",

  marginLeft: 19,
  marginTop: 4,

  color: "rgba(255, 255, 255, 0.5)",
  fontSize: 11,
  fontWeight: 300,
  lineHeight: "11px",
});
