import { styled } from "../../../styles";

import { DropdownTrigger } from "../../atoms/Dropdown/style";

export const Chart = styled("div", {
  padding: "24px 20px",
  width: "100%",
  height: "100%",

  backgroundColor: "$section",
  borderRadius: 8,

  "@toLaptop": {
    border: "none",
    padding: 0,

    backgroundColor: "transparent",
  },
});

export const Header = styled("div");

export const HeaderWrapper = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  marginBottom: 16,

  [`& ${DropdownTrigger}`]: {
    padding: "4px 8px",

    borderColor: "$gray",
    borderRadius: 4,
  },
});

export const HeaderTitle = styled("span", {
  fontFamily: "Roboto, sans-serif",
  color: "$text",
  fontSize: 14,
  lineHeight: "16px",
});

export const TimeframeText = styled("span", {
  fontFamily: "Roboto, sans-serif",
  color: "$text",
  fontSize: 11,
  fontWeight: 700,
  lineHeight: "11px",
});

export const TimeframeWrapper = styled("span", {
  display: "flex",
  alignItems: "center",

  marginLeft: 12,
});

export const TimeframeMinutes = styled("span", {
  display: "block",

  marginLeft: 4,

  fontFamily: "Roboto Mono, sans-serif",
  color: "$text",
  fontSize: 11,
  fontWeight: 300,
  lineHeight: "15px",
});

export const HeaderCurrent = styled("div", {
  display: "flex",
  flexDirection: "column",

  "@fromLaptop": {
    flexDirection: "row",
    alignItems: "flex-end",
  },
});

export const HeaderCurrentText = styled("span", {
  display: "block",

  marginRight: 6,

  fontFamily: "Roboto Mono, sans-serif",
  color: "$text",
  fontSize: 18,
  fontWeight: 500,
  lineHeight: "24px",
});

export const HeaderCurrentChange = styled("span", {
  fontFamily: "Roboto Mono, sans-serif",
  color: "$green",
  fontSize: 11,
  fontWeight: 300,
  lineHeight: "10px",
});

export const HeaderCurrentWrapper = styled("div", {
  display: "flex",
  alignItems: "flex-end",
});

export const HeaderValute = styled("div", {
  display: "flex",
  alignItems: "center",

  marginBottom: 4,

  "@fromLaptop": {
    marginRight: 40,
    marginBottom: 0,
  },
});

export const HeaderValuteIcon = styled("span", {
  display: "block",
  flexShrink: 0,

  width: 24,
  height: 24,
  marginRight: 8,

  backgroundColor: "#C4C4C4",
  borderRadius: "100%",
});

export const HeaderValuteText = styled("span", {
  fontFamily: "Roboto, sans-serif",
  color: "$text",
  fontSize: 18,
  fontWeight: 500,
  lineHeight: "21px",
});
