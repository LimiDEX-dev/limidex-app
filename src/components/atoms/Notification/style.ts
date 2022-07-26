import { keyframes, styled } from "../../../styles";

const notificationIn = keyframes({
  "0%": {
    right: -260,
  },

  "100%": {
    right: 66,
  },
});

const notificationOut = keyframes({
  "0%": {
    right: 66,
  },

  "100%": {
    right: -260,
  },
});

export const Title = styled("span", {
  display: "block",

  marginTop: 6,
  marginBottom: 18,

  color: "$lightGreen",
  fontSize: 15,
  fontWeight: 700,
  lineHeight: "18px",
});

export const Notification = styled("div", {
  display: "flex",

  position: "fixed",
  zIndex: 20,
  top: 110,
  right: 66,

  padding: "12px 120px 26px 14px",

  backgroundColor: "$section",
  backdropFilter: "blur(40px)",
  borderRadius: 8,

  animation: `${notificationIn} 0.2s ease-in-out`,

  variants: {
    closed: {
      true: {
        animation: `${notificationOut} 0.2s ease-in-out`,
      },
    },
    status: {
      error: {
        [`& ${Title}`]: {
          color: "$red",
        },
      },
      success: {},
    },
  },
});

export const Wrapper = styled("div", {
  "&:first-child": {
    marginRight: 8,
  },
});

export const CloseButton = styled("button", {
  position: "absolute",
  top: 16,
  right: 16,

  backgroundColor: "transparent",
  border: "none",
  cursor: "pointer",

  "& > svg > path": {
    fillOpacity: 1,
  },
});

export const Content = styled("div", {
  fontSize: 13,
  lineHeight: "15px",

  "& a": {
    color: "inherit",
    fontWeight: 700,
    textDecoration: "none",
  },
});
