import { styled } from "../../../styles";

export const Modal = styled("div", {
  display: "none",
  alignItems: "center",
  justifyContent: "center",

  position: "fixed",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  zIndex: 100,

  backgroundColor: "rgba(0, 0, 0, 0.5)",

  variants: {
    visible: {
      true: {
        display: "flex",
      },
    },
  },
});

export const Wrapper = styled("div", {
  position: "relative",

  width: 300,
  padding: "20px 20px 32px",

  border: "1px solid $accent",
  backgroundColor: "$section",
  borderRadius: 12,
  boxShadow: "0 0 4px rgba(242, 146, 18, 0.4)",
});

export const Header = styled("div", {
  marginBottom: 16,
});

export const Title = styled("span", {
  fontFamily: "Roboto, sans-serif",
  color: "$gray",
  fontSize: 12,
  lineHeight: "14px",
});

export const CloseButton = styled("button", {
  position: "absolute",
  top: 10,
  right: 10,

  backgroundColor: "transparent",
  border: "none",
  cursor: "pointer",
});

export const Content = styled("div", {});
