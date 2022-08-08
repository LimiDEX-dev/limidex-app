import { styled } from "../../../styles";

import { List } from "../StakingCard/style";

export const Modal = styled("div", {
  [`& ${List}`]: {
    marginTop: 6,
  },
});
