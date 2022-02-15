import React, { FC } from 'react';
import { Modal } from '../Modal';
import { Button } from '../Button';
import { Popup } from '../Popup';
import './style.scss';

export type Coin = {
  title: string;
  pot: string;
  fee: string;
  proxyContract: string;
  verifiedContract: string;
  holders: string;
  supply: string;
}

type CoinDescriptionProps = {
  isVisible: boolean;
  handleClose: () => void;
  coin?: Coin;
}

export const CoinDescription: FC<CoinDescriptionProps> = ({
  isVisible,
  handleClose,
  coin,
}) => (
  <Modal isVisible={isVisible} handleClose={handleClose}>
    <div className="coin">
      <span className="coin__title">
        {coin?.title}
      </span>
      <span className="coin__check">
        SAFE Check
      </span>
      <Popup content="lorem ipsum dolor sit amet">
        <span className="coin__main-desc">
          Honey pot:
          {' '}
          {coin?.pot}
        </span>
      </Popup>
      <Popup content="lorem ipsum dolor sit amet">
        <span className="coin__main-desc">
          Transfer fee:
          {' '}
          {coin?.fee}
        </span>
      </Popup>
      <span className="coin__desc">
        Proxy-contract:
        {' '}
        {coin?.proxyContract}
      </span>
      <span className="coin__desc">
        Verified contract:
        {' '}
        {coin?.verifiedContract}
      </span>
      <span className="coin__desc">
        Holders:
        {' '}
        {coin?.holders}
      </span>
      <span className="coin__desc">
        Owner has most of supply:
        {' '}
        {coin?.supply}
      </span>
      <div className="coin__ok">
        <span className="coin__ok__description">
          If press “OK” you aggree with risks
        </span>
        <Button onClick={handleClose} size="small">
          Ok
        </Button>
      </div>
    </div>
  </Modal>
);
