import { styled } from "../../../../../../styles";
import { Button } from "../../../../../../components/atoms/styled";

export const Error = styled("span", {
  display: "block",

  marginTop: 4,

  color: "#B0685D",
  fontSize: 12,
  lineHeight: "14px",
});

export const ModalText = styled("div", {
  margin: "24px 0",
});

export const ModalTextTitle = styled("span", {
  display: "block",

  marginBottom: 8,

  color: "#B0685D",
  fontSize: 12,
  lineHeight: "14px",
});

export const ModalTextDescription = styled("span", {
  color: "$gray",
  fontSize: 12,
  lineHeight: "14px",
});

export const StyledButton = styled(Button, {
  marginTop: 24,
});
