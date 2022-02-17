/* eslint-disable react/no-array-index-key */
import React, { FC } from 'react';
import './style.scss';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { staking } from '../../lib/mock/staking';
import { StakingCard } from '../../components/StakingCard';
import { Title } from '../../components/Title';
import { Description } from '../../components/Description';

export const Staking: FC = () => {
  const getDescription = () => (
    <Description>
      Pool is used to provide liquidity for flash loans and arbitrage transactions,
      the income from which is distributed between the protocol and stakers
    </Description>
  );

  return (
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
              <StakingCard title={item.title} list={item.list} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="staking__pagination" />
      </div>
      <div className="staking__description">
        {getDescription()}
      </div>
    </div>
  );
};
