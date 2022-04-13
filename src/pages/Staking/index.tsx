/* eslint-disable react/no-array-index-key */
import React, { FC, useState } from 'react';
import './style.scss';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { staking } from '../../lib/mock/staking';
import { StakingCard } from '../../components/StakingCard';
import { Title } from '../../components/Title';
import { Description } from '../../components/Description';
import { Modal } from '../../components/Modal';
import { Input } from '../../components/Input';
import { Popup } from '../../components/Popup';
import { Button } from '../../components/Button';

export const Staking: FC = () => {
  const [selectedCard, setSelectedCard] = useState<
    null |
    { title: string; roi: string; lp: string; }
    >(null);
  const [stateToken, setStateToken] = useState<string>('100.00');

  const getDescription = () => (
    <Description>
      Native assets are used by the protocol for flashloans and arbitrage deals.
      You can stake these coins to provide liquidity and make money from it,
      essentially a new tool for staking native network coins
      <br />
      <br />
      The protocol distributes 10% of arbitrage and 60% of flashloan profits to LP&apos;s
    </Description>
  );

  return (
    <>
      <div className="staking-modal">
        <Modal isVisible={!!selectedCard} handleClose={() => setSelectedCard(null)}>
          <div className="staking__card__header">
            <span className="staking__card__header__photo" />
            <span className="staking__card__header__title">{selectedCard?.title}</span>
          </div>
          <Input value={stateToken} onChange={setStateToken} label="Stake Token" currency="WBNB" topLabel="Balance 12 WNBN" />
          <ul className="staking__card__list">
            <li className="staking__card__item">
              <Popup content="Lorem ipsum dolor sit amet">
                <span className="staking__card__title">ROI</span>
              </Popup>
              <span className="staking__card__wrapper">
                <span className="staking__card__currency">$</span>
                <span className="staking__card__descr">{selectedCard?.roi}</span>
              </span>
            </li>
            <li className="staking__card__item">
              <Popup content="Lorem ipsum dolor sit amet">
                <span className="staking__card__title">Get LP</span>
              </Popup>
              <span className="staking__card__wrapper">
                <span className="staking__card__currency">LP</span>
                <span className="staking__card__descr">{selectedCard?.lp}</span>
              </span>
            </li>
          </ul>
          <div className="staking__card__actions">
            <Button onClick={() => setSelectedCard(null)}>
              Approve
            </Button>
            <Button disabled>
              Stake
            </Button>
          </div>
        </Modal>
      </div>
      <div className="staking">
        <div className="staking__wrapper">
          <Title>
            Stake and Earn protocol profits
          </Title>
          {getDescription()}
        </div>
        <div className="staking__wrapper">
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
            {staking.cards.map((item, index) => (
              <SwiperSlide key={`${item.title}-${index}`}>
                <StakingCard
                  title={item.title}
                  list={item.list}
                  handleDeposit={() => setSelectedCard({
                    title: item.title,
                    roi: '1 200 000',
                    lp: '1.2',
                  })}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="staking__pagination" />
        </div>
        <div className="staking__description">
          {getDescription()}
        </div>
      </div>
    </>
  );
};
