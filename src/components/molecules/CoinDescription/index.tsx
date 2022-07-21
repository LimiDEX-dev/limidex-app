import React, { FC } from "react";

import { Modal, Button, Popup } from "../../atoms";

import { CoinDescriptionProps, Coin } from "./types";

import * as S from "./style";

export type { Coin };

export const CoinDescription: FC<CoinDescriptionProps> = ({
  isVisible,
  handleClose,
  coin,
}) => (
  <S.CoinDescription>
    <Modal isVisible={isVisible} handleClose={handleClose}>
      <S.Coin>
        <S.Title>{coin?.title}</S.Title>
        <S.Check>SAFE Check</S.Check>
        <Popup content="lorem ipsum dolor sit amet">
          <S.MainDescr>Honey pot: {coin?.pot}</S.MainDescr>
        </Popup>
        <Popup content="lorem ipsum dolor sit amet">
          <S.MainDescr>Transfer fee: {coin?.fee}</S.MainDescr>
        </Popup>
        <S.Descr>Proxy-contract: {coin?.proxyContract}</S.Descr>
        <S.Descr>Verified contract: {coin?.verifiedContract}</S.Descr>
        <S.Descr>Holders: {coin?.holders}</S.Descr>
        <S.Descr>Owner has most of supply: {coin?.supply}</S.Descr>
        <S.Submit>
          <S.SubmitDescr>If press “OK” you aggree with risks</S.SubmitDescr>
          <Button onClick={handleClose} size="small">
            Ok
          </Button>
        </S.Submit>
      </S.Coin>
    </Modal>
  </S.CoinDescription>
);
