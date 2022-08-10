import React, { FC } from "react";

import {
  Button,
  Dropdown,
  Input,
  Modal,
  Popup,
} from "../../../../components/atoms";
import { lockPeriodes } from "../../index";
import { useUser, useVeSPLX } from "../../../../store";

import { DepositModalProps } from "./types";

import * as Card from "../../../../components/molecules/StakingCard/style";
import * as S from "./style";

export const DepositModal: FC<DepositModalProps> = ({
  isVisible,
  setIsVisible,
  handleSubmit,
}) => {
  const {
    data: { lockSPLX, lockPeriod },
    actions: { setLockPeriod, setLockSPLX },
  } = useVeSPLX();
  const {
    data: { balance },
  } = useUser();

  const getVeSPLX = () => {
    if (lockPeriod.value === "0") {
      return (+lockSPLX * 10) / 100;
    }

    if (lockPeriod.value === "1") {
      return (+lockSPLX * 25) / 100;
    }

    if (lockPeriod.value === "2") {
      return (+lockSPLX * 50) / 100;
    }

    return lockSPLX;
  };

  return (
    <S.Modal>
      <Modal isVisible={isVisible} handleClose={() => setIsVisible(false)}>
        <Card.Header>
          <Card.HeaderPhoto src="/assets/split-tech.png" alt="" />
          <Card.HeaderTitle>LMX</Card.HeaderTitle>
        </Card.Header>
        <Input
          value={lockSPLX}
          onChange={setLockSPLX}
          label="Lock SPLX"
          currency="SPLX"
          topLabel={`Balance ${balance} SPLX`}
          onClickTopLabel={() => setLockSPLX(balance.toString())}
        />
        <Card.List>
          <Card.Item>
            <Popup content="Lorem ipsum dolor sit amet">
              <Card.ItemTitle>Get veSPLX</Card.ItemTitle>
            </Popup>
            <Card.ItemWrapper>
              <Card.ItemTitle>veSPLX</Card.ItemTitle>
              <Card.ItemDescr>{getVeSPLX()}</Card.ItemDescr>
            </Card.ItemWrapper>
          </Card.Item>
          <Card.Item>
            <Card.ItemTitle>Lock period</Card.ItemTitle>
            <Card.ItemWrapper>
              <Card.ItemTitle>
                <Dropdown items={lockPeriodes} onSelect={setLockPeriod}>
                  {lockPeriod.label}
                </Dropdown>
              </Card.ItemTitle>
            </Card.ItemWrapper>
          </Card.Item>
        </Card.List>
        <Card.Actions>
          <Button
            disabled={
              Number.isNaN(parseInt(lockSPLX, 10)) || +lockSPLX > balance
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
