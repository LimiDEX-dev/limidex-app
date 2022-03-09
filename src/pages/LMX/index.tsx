/* eslint-disable react/no-array-index-key */
import React, { FC, useState } from 'react';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

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
import { Rewards } from '../../components/Rewards';

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

  const getFirstDescription = () => (
    <Description>
      Each participant must lock LMX tokens for a specified period of time,
      to get right to receive part of the protocol profit in all networks
      <br />
      <br />
    </Description>
  );

  const getRewardsDescription = () => (
    <span className="lmx__rewards-description">
      <Description>
        Use multipliers to increase rewards:
        <span className="lmx__description">
          <span className="lmx__description__wrapper">
            <span className="lmx__description__title">Time Lock</span>
            <span className="lmx__description__content">
              3 Months - 0.1
              {' '}
              <br />
              6 Months - 0.25
              {' '}
              <br />
              1 Year - 0.5
              {' '}
              <br />
              2 Years - 0.75
              {' '}
              <br />
              3 Years - 1
            </span>
          </span>
        </span>
      </Description>
    </span>
  );

  const getDescription = () => (
    <Description>
      {getFirstDescription()}
      {getRewardsDescription()}
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
            Lock LMX to Earn protocol profits
          </Title>
          {getDescription()}
          <Rewards data={lmx.rewards} />
        </div>
        <div className="lmx__wrapper">
          <Swiper
            modules={[Pagination]}
            slidesPerView={1}
            spaceBetween={0}
            pagination={{
              clickable: true,
              el: '.staking__pagination',
              renderBullet: (index, className) => `
              <span class="${className}">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="8" cy="8" r="2" fill="currentColor" />
                  <circle cx="8" cy="8" r="4.5" stroke="currentColor" />
                </svg>
              </span>
            `,
            }}
          >
            {lmx.cards.map((card, index) => (
              <SwiperSlide key={`${card.title}-${index}`}>
                <StakingCard
                  title={card.title}
                  list={card.list}
                  handleDeposit={() => setIsModal(true)}
                  tokens={card.tokens}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="staking__pagination" />
        </div>
        <div className="lmx__description__main-wrapper">
          {getFirstDescription()}
          <Rewards data={lmx.rewards} />
          {getRewardsDescription()}
        </div>
      </div>
    </>
  );
};
