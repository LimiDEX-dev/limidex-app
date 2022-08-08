import React, { FC } from "react";

import { Button, Input, Modal, Popup } from "../../atoms";

import { WithdrawModalProps } from "./types";

import * as S from "./style";
import * as Card from "../StakingCard/style";

export const WithdrawModal: FC<WithdrawModalProps> = ({
  isVisible,
  setIsVisible,
  handleSubmit,
  lpTokens,
  setLpTokens,
  tokensReturned,
  tokensInMoney,
  balanceInLp,
  icon,
  title,
}) => (
  <S.Modal>
    <Modal isVisible={isVisible} handleClose={() => setIsVisible(false)}>
      <Card.Header>
        <Card.HeaderPhoto src={icon} alt="" />
        <Card.HeaderTitle>{title}</Card.HeaderTitle>
      </Card.Header>
      <Input
        value={lpTokens}
        onChange={setLpTokens}
        label="Withdraw LP Token"
        currency="LP"
        topLabel={`Balance ${balanceInLp} LP`}
        onClickTopLabel={() => setLpTokens(balanceInLp)}
      />
      <Card.List>
        <Card.Item>
          <Popup content="Lorem ipsum dolor sit amet">
            <Card.ItemTitle>Get token</Card.ItemTitle>
          </Popup>
          <Card.ItemWrapper>
            <Card.ItemTitle>WBNB/$</Card.ItemTitle>
            <Card.ItemDescr>
              {tokensReturned}/{tokensInMoney}$
            </Card.ItemDescr>
          </Card.ItemWrapper>
        </Card.Item>
      </Card.List>
      <Card.Actions>
        <Button
          disabled={
            Number.isNaN(parseInt(lpTokens, 10)) || +lpTokens > +balanceInLp
          }
          onClick={handleSubmit}
        >
          Approve
        </Button>
        <Button disabled>Withdraw</Button>
      </Card.Actions>
    </Modal>
  </S.Modal>
);
