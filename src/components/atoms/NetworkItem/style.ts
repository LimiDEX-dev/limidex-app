import { styled } from "../../../styles";

export const NetworkItem = styled("li", {
  flexShrink: 0,

  "&:not(:last-child)": {
    marginRight: 10,
  },
});

export const Title = styled("span", {
  opacity: 0.5,

  fontSize: 12,
  color: "$text",
  lineHeight: "14px",

  transition: "0.2s ease",
});

export const TriggerButton = styled("button", {
  display: "flex",
  alignItems: "center",

  padding: "8px 12px",

  backgroundColor: "$blocks",
  border: "none",
  borderRadius: 4,
  cursor: "pointer",

  transition: "0.2s ease",

  variants: {
    isActive: {
      true: {
        backgroundColor: "$accent",
        [`& ${Title}`]: {
          opacity: 1,

          color: "$textDark",
        },
      },
    },
  },
});

export const Icon = styled("span", {
  display: "block",

  marginRight: 10,
});
