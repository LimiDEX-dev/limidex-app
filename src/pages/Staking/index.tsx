/* eslint-disable react/no-array-index-key */
import React, { FC } from 'react';
import './style.scss';
import { staking } from '../../lib/mock/staking';
import { StakingCard } from '../../components/StakingCard';
import { Title } from '../../components/Title';
import { Description } from '../../components/Description';

export const Staking: FC = () => (
  <div className="staking">
    <div className="staking__wrapper">
      <Title>
        Stake and Earn protocol profits
      </Title>
      <Description>
        Pool is used to provide liquidity for flash loans and arbitrage transactions,
        the income from which is distributed between the protocol and stakers
      </Description>
    </div>
    <div className="staking__wrapper">
      {staking.cards.map((item, index) => (
        <StakingCard key={`${item.title}-${index}`} title={item.title} list={item.list} />
      ))}
    </div>
  </div>
);
