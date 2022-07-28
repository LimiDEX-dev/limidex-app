import { styled } from "../../../styles";

export const DropdownTriggerIcon = styled("span", {
  display: "block",

  marginLeft: "auto",
  paddingLeft: 8,

  "& > svg": {
    marginLeft: "auto",

    transform: "rotate(0)",

    transition: "0.2s ease",
  },
});

export const ItemTrigger = styled("button", {
  display: "flex",
  alignItems: "center",

  width: "100%",
  minHeight: 20,
  padding: "4px 8px",

  backgroundColor: "transparent",
  border: "none",
  cursor: "pointer",

  transition: "0.2s ease",

  "&:hover": {
    opacity: 0.8,
  },
});

export const ItemLabel = styled("span", {
  fontFamily: "Roboto, sans-serif",
  color: "$text",
  fontSize: 12,
  whiteSpace: "pre-wrap",
  lineHeight: "14px",

  variants: {
    small: {
      true: {
        fontSize: 11,
        fontWeight: 300,
        lineHeight: 1,
      },
    },
  },
});

export const Dropdown = styled("div", {
  display: "flex",
  flexShrink: 0,

  position: "relative",

  variants: {
    opened: {
      true: {
        [`& ${DropdownTriggerIcon} > svg`]: {
          transform: "rotate(180deg)",
        },
      },
    },
    right: {
      true: {
        [`& ${ItemTrigger}`]: {
          justifyContent: "flex-end",
        },
        [`& ${ItemLabel}[data-value="true"]`]: {
          marginLeft: 6,

          fontFamily: "Roboto Mono, sans-serif",
          fontSize: 14,
          lineHeight: "16px",
          color: "$text",
        },
      },
    },
  },
});

export const DropdownTrigger = styled("button", {
  display: "flex",
  alignItems: "center",

  padding: "6px 8px 6px 12px",

  backgroundColor: "$blocks",
  border: "1px solid $text",
  borderRadius: 100,
  cursor: "pointer",

  color: "$text",
  fontSize: 12,
  fontWeight: 300,
  lineHeight: "13px",

  "& > svg, & > img": {
    marginRight: 8,
  },

  "& > span": {
    flexShrink: 0,
  },

  variants: {
    notRightBorderRadius: {
      true: {
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
      },
    },
    noBorder: {
      true: {
        border: "none",
      },
    },
  },
});

export const DropdownTriggerLabel = styled("span", {
  display: "block",

  marginRight: 10,

  fontFamily: "Roboto, sans-serif",
  color: "$gray",
  fontSize: 12,
  lineHeight: "14px",
});

export const List = styled("ul", {
  position: "absolute",
  zIndex: 15,
  top: "calc(100% + 6px)",
  left: 0,

  width: 116,
  maxHeight: 260,
  margin: 0,
  padding: 0,

  backgroundColor: "$section",
  border: "1px solid $stroke",
  boxShadow: "0 0 4px rgba(242, 146, 18, 0.4)",
  borderRadius: 4,
  listStyle: "none",
  overflow: "auto",
});

export const Item = styled("li", {
  variants: {
    addCustom: {
      true: {
        position: "sticky",
        bottom: 0,
        zIndex: 1,

        borderTop: "1px solid $stroke",
        borderRadius: "0 0 4px 4px",
        backgroundColor: "$section",

        [`& > ${ItemTrigger}`]: {
          "&:hover": {
            backgroundColor: "transparent",
          },
        },
      },
    },
    search: {
      true: {
        position: "sticky",
        top: 0,
        zIndex: 1,

        padding: "4px 8px",

        borderBottom: "1px solid $stroke",
        borderRadius: "4px 4px 0 0",
        backgroundColor: "$section",

        "& > label": {
          display: "flex",
          alignItems: "center",

          "& > input": {
            width: "100%",
            marginLeft: 6,

            backgroundColor: "transparent",
            border: "none",
            outline: "none",

            color: "$text",
            fontSize: 12,
            lineHeight: "14px",
          },

          "& > svg": {
            flexShrink: 0,
          },
        },
      },
    },
  },
});

export const ItemIcon = styled("span", {
  display: "flex",
  alignItems: "center",

  marginRight: 8,
});

export const DropdownTriggerValueIcon = styled("span", {
  display: "block",

  marginRight: 8,
});
