import { styled } from "../../../../styles";

import { List } from "../../../../components/molecules/StakingCard/style";

export const Modal = styled("div", {
  [`& ${List}`]: {
    marginTop: 6,
  },
});
