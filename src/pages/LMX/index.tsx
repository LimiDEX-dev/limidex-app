import React, { FC } from 'react';
import { Title } from '../../components/Title';
import { Description } from '../../components/Description';
import './style.scss';
import { lmx } from '../../lib/mock/lmx';
import { StakingCard } from '../../components/StakingCard';

export const LMX: FC = () => {
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
    <div className="lmx">
      <div className="lmx__wrapper">
        <Title>
          Lock LMX to be an Ambassador
        </Title>
        {getDescription()}
      </div>
      <div className="lmx__wrapper">
        {lmx.cards.map((card) => (
          <StakingCard title={card.title} list={card.list} description={card.description} />
        ))}
      </div>
      <div className="lmx__description__main-wrapper">
        {getDescription()}
      </div>
    </div>
  );
};
