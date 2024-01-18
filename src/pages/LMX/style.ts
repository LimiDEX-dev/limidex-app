import { styled } from "../../styles";
import {
  Button,
  Description as DescriptionInstance,
  Title,
} from "../../components/atoms/styled";
import { List } from "../../components/molecules/StakingCard/style";

export const LMX = styled("div", {
  height: "calc(100% - 150px)",
  marginTop: 40,

  "@toLaptop": {
    marginTop: 0,
  },
});

export const Link = styled("a", {
  display: "block",

  color: "#C4C4C4",
});

export const Wrapper = styled("div", {
  "&:first-child": {
    marginBottom: 60,
  },
});

export const Cards = styled("div", {
  display: "grid",
  gap: 40,
  gridTemplateColumns: "4fr 3fr 4fr",
});

export const Card = styled("div", {
  display: "flex",
  flexDirection: "column",

  padding: "14px 20px 18px",

  borderRadius: "12px",
  border: "1px solid #F29212",
});

export const Divider = styled("div", {
  width: "calc(100% + 40px)",
  marginLeft: -20,
  marginBottom: 12,
  height: 1,

  backgroundColor: "#202734",
});

export const NftCardFooter = styled("div", {
  marginTop: "auto",

  fontSize: "15px",
  fontWeight: "700",
});

export const CardTitle = styled("h3", {
  margin: "0 0 30px",

  color: "#88888D",
  textAlign: "center",
  fontSize: "20px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "normal",
});

export const Table = styled("table", {
  width: "100%",
});

export const Cell = styled("td", {
  paddingTop: 16,
  paddingBottom: 15,

  textAlign: "center",
});

export const CellCoin = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: 12,
});

export const CellCoinImageWrapper = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  width: 30,
  height: 30,

  borderRadius: 100,
  backgroundColor: "#D9D9D9",

  "& > img": {
    width: 21,
    height: 21,
  },
});

export const CellCoinTextWrapper = styled("div", {
  display: "grid",
  gap: 6,
});

export const CellCoinText = styled("span", {
  fontSize: 15,
  fontWeight: 600,
  textAlign: "left",

  variants: {
    small: {
      true: {
        fontSize: 13,
        fontWeight: 400,
        color: "#C4C4C4",
      },
    },
  },
});

export const Lock = styled("div", {
  marginTop: "auto",
});

export const LockHeader = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  marginBottom: 12,
});

export const LockAmount = styled("span", {
  color: "#F29212",
  fontSize: "12px",
  fontWeight: 700,
});

export const LockBalance = styled(LockAmount, {
  color: "#C4C4C4",
});

export const LockInput = styled("div", {
  display: "flex",

  padding: "4px 8px",

  borderRadius: "12px",
  border: "1px solid #F29212",
  background: "rgba(25, 25, 25, 0.00)",
});

export const LockInputContent = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: 4,

  width: "50%",
});

export const LockInputText = styled("span", {
  fontSize: "15px",
  fontWeight: "500",
});

export const LockInputDivider = styled("div", {
  width: 1,
  margin: "-4px auto",
  backgroundColor: "#F29212",
});

export const LockInputComponent = styled("input", {
  width: "50%",
  marginLeft: 10,

  border: "none",
  backgroundColor: "transparent",
  outline: "none",

  color: "$white",
});

export const LockButtons = styled("div", {
  display: "flex",
  justifyContent: "space-between",
});

export const LockButton = styled("button", {
  padding: "8px 10px",
  marginTop: 12,
  marginBottom: 22,
  border: "none",
  borderRadius: 10,
  backgroundColor: "#55647D",
  boxShadow:
    "0px 2px 5px 0px rgba(97, 50, 6, 0.10), 0px 4px 16px 0px rgba(71, 71, 70, 0.36)",
  cursor: "pointer",

  fontSize: "12px",
  fontWeight: "400",
  color: "$white",

  transition: "0.2s ease-in-out",

  variants: {
    isActive: {
      true: {
        backgroundColor: "$accent",
      },
    },
  },
});

export const LockList = styled("div", {
  display: "grid",
  gap: 12,
});

export const LockListItem = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  "&:first-child": {
    marginBottom: 12,
  },
});

export const LockListItemText = styled("span", {
  color: "#B8B5B8",
  fontSize: "12px",
  fontWeight: 600,

  variants: {
    isWhite: {
      true: {
        color: "$textGray",
      },
    },
  },
});

export const LockAction = styled(Button, {
  display: "block",
  width: "auto",
  margin: "30px auto 0",
  padding: "16px 24px",

  fontSize: "22px",
  fontWeight: 700,
});
