import React, { FC, useState } from 'react';
import { Title } from '../../components/Title';
import { Description } from '../../components/Description';
import './style.scss';
import { lmx } from '../../lib/mock/lmx';
import { StakingCard } from '../../components/StakingCard';
import { Modal } from '../../components/Modal';
import { Input } from '../../components/Input';
import { Dropdown } from '../../components/Dropdown';
import { Button } from '../../components/Button';
import { Popup } from '../../components/Popup';

const lockPeriodes = [
  {
    value: 'year',
    label: '1 Year',
  },
  {
    value: 'year',
    label: '1 Year',
  },
  {
    value: 'year',
    label: '1 Year',
  },
  {
    value: 'year',
    label: '1 Year',
  },
];

export const LMX: FC = () => {
  const [isModal, setIsModal] = useState(false);
  const [lockLMX, setLockLMX] = useState<string>('100.00');
  const [selectedPeriod, setSelectedPeriod] = useState(lockPeriodes[0]);

  const getDescription = () => (
    <Description>
      Each participant must lock LMX tokens for a specified period of time,
      for which he receives a unique link for the invitation and the right
      to receive part of the profits of the protocol
      <br />
      <br />
      Use multipliers to increase rewards:
      <span className="lmx__description">
        <span className="lmx__description__wrapper">
          <span className="lmx__description__title">Time Lock</span>
          <span className="lmx__description__content">
            3 Month - 0.1
            {' '}
            <br />
            1 Year - 0.5
            {' '}
            <br />
            2 Year - 0.75
            {' '}
            <br />
            3 Year - 1
          </span>
        </span>
        <span className="lmx__description__wrapper">
          <span className="lmx__description__title">Rewards per Year</span>
          <span className="lmx__description__content">
            100-1 000$ - 0.1
            {' '}
            <br />
            1 000-10 00$ - 0.5
            {' '}
            <br />
            100 000-500 000$ - 0.75
            {' '}
            <br />
            {'>'}
            {' '}
            500 000$ - 1
          </span>
        </span>
      </span>
    </Description>
  );

  return (
    <>
      <div className="lmx-modal">
        <Modal isVisible={isModal} handleClose={() => setIsModal(false)}>
          <div className="staking__card__header">
            <span className="staking__card__header__photo" />
            <span className="staking__card__header__title">LMX</span>
          </div>
          <Input value={lockLMX} onChange={setLockLMX} label="Lock LMX" currency="LMX" topLabel="Balance 12 LMX" />
          <ul className="staking__card__list">
            <li className="staking__card__item">
              <Popup content="Lorem ipsum dolor sit amet">
                <span className="staking__card__title">ROI</span>
              </Popup>
              <span className="staking__card__wrapper">
                <span className="staking__card__currency">$</span>
                <span className="staking__card__descr">1 200 000</span>
              </span>
            </li>
            <li className="staking__card__item">
              <Popup content="Lorem ipsum dolor sit amet">
                <span className="staking__card__title">Get LP</span>
              </Popup>
              <span className="staking__card__wrapper">
                <span className="staking__card__currency">LP</span>
                <span className="staking__card__descr">1.2</span>
              </span>
            </li>
            <li className="staking__card__item">
              <span className="staking__card__title">Lock period</span>
              <span className="staking__card__wrapper">
                <span className="staking__card__descr">
                  <Dropdown items={lockPeriodes} onSelect={setSelectedPeriod}>
                    {selectedPeriod.label}
                  </Dropdown>
                </span>
              </span>
            </li>
          </ul>
          <div className="staking__card__actions">
            <Button onClick={() => setIsModal(false)}>
              Approve
            </Button>
            <Button disabled>
              Stake
            </Button>
          </div>
        </Modal>
      </div>
      <div className="lmx">
        <div className="lmx__wrapper">
          <Title>
            Lock LMX to be an Ambassador
          </Title>
          {getDescription()}
        </div>
        <div className="lmx__wrapper">
          {lmx.cards.map((card) => (
            <StakingCard
              title={card.title}
              list={card.list}
              description={card.description}
              handleDeposit={() => setIsModal(true)}
            />
          ))}
        </div>
        <div className="lmx__description__main-wrapper">
          {getDescription()}
        </div>
      </div>
    </>
  );
};
