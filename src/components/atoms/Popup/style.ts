import { styled } from "../../../styles";

export const Popup = styled("div", {
  position: "relative",

  width: "fit-content",
});

export const Trigger = styled("button", {
  backgroundColor: "transparent",
  border: "none",
  cursor: "pointer",
});

export const Content = styled("div", {
  position: "absolute",
  zIndex: 12,
  bottom: "100%",
  left: "calc(50% - 80px)",
});

export const Wrapper = styled("div", {
  position: "relative",

  width: 160,
  padding: 10,
  marginBottom: 7,

  backgroundColor: "$section",
  boxShadow: "0px 0px 4px rgba(242, 146, 18, 0.4)",
  borderRadius: 4,

  fontFamily: "Roboto, sans-serif",
  color: "$textGray",
  fontSize: 11,
  fontWeight: 300,
  lineHeight: "13px",
  wordBreak: "break-word",
  whiteSpace: "normal",

  "&::after": {
    content: "",

    position: "absolute",
    bottom: -7,
    left: "50%",
    transform: "translateX(-50%)",

    display: "block",
    width: 0,
    height: 0,

    borderStyle: "solid",
    borderWidth: "8px 8px 0 8px",
    borderColor: "$section transparent transparent transparent",
  },
});
