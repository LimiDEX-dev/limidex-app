import React, { FC } from "react";

import { Button, Input, Modal, Popup } from "../../../../components/atoms";
import { useStaking, useUser } from "../../../../store";

import { DepositModalProps } from "./types";

import * as Card from "../../../../components/molecules/StakingCard/style";
import * as S from "./style";

export const DepositModal: FC<DepositModalProps> = ({ handleSubmit }) => {
  const {
    data: { balance },
  } = useUser();
  const {
    data: { selectedCard, stateToken, lpTokens },
    actions: { setStateToken, setSelectedCard },
  } = useStaking();

  return (
    <S.Modal>
      <Modal
        isVisible={!!selectedCard}
        handleClose={() => setSelectedCard(null)}
      >
        <Card.Header>
          <Card.HeaderPhoto src="https://place-hold.it/64x64" alt="" />
          <Card.HeaderTitle>{selectedCard?.title}</Card.HeaderTitle>
        </Card.Header>
        <Input
          value={stateToken}
          onChange={setStateToken}
          label="Stake Token"
          currency={selectedCard?.currency}
          topLabel={`Balance ${balance} ${selectedCard?.currency}`}
          onClickTopLabel={() => setStateToken(balance.toString())}
        />
        <Card.List>
          <Card.Item>
            <Popup content="Lorem ipsum dolor sit amet">
              <Card.ItemTitle>Get veSPLX</Card.ItemTitle>
            </Popup>
            <Card.ItemWrapper>
              <Card.ItemTitle>veSPLX</Card.ItemTitle>
              <Card.ItemDescr>{lpTokens}</Card.ItemDescr>
            </Card.ItemWrapper>
          </Card.Item>
        </Card.List>
        <Card.Actions>
          <Button
            disabled={
              Number.isNaN(parseInt(stateToken, 10)) || +stateToken > balance
            }
            onClick={handleSubmit}
          >
            Approve
          </Button>
          <Button disabled>Stake</Button>
        </Card.Actions>
      </Modal>
    </S.Modal>
  );
};
