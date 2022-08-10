import { styled } from "../../../../../../styles";

import {
  Popup,
  DropdownTrigger,
  DropdownTriggerLabel,
} from "../../../../../../components/atoms/styled";

export const Trade = styled("div", {
  display: "flex",
  alignItems: "center",

  paddingLeft: 10,
  marginTop: 24,

  [`& > ${Popup}`]: {
    flexShrink: 0,

    marginRight: 20,

    "& .input__flex-label": {
      color: "$text",
      fontSize: 11,
      fontWeight: 700,
      lineHeight: "13px",
    },
  },

  [`& ${DropdownTrigger}`]: {
    width: "100%",
  },

  [`& ${DropdownTriggerLabel}`]: {
    color: "$text",
    textAlign: "left",
  },

  "& .dropdown__trigger__label": {
    maxWidth: 120,
    fontWeight: 400,
    textAlign: "left",

    "& > span": {
      fontWeight: 700,
      wordBreak: "break-word",
    },
  },
});

export const Img = styled("img", {
  display: "block",

  width: 28,
});
