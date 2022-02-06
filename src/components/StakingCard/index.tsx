/* eslint-disable react/no-array-index-key */
import React, { FC } from 'react';
import { Button } from '../Button';
import './style.scss';

type StakingCardProps = {
  title: string;
  list: {
    title: string;
    currency: string;
    descr: string;
  }[];
}

export const StakingCard: FC<StakingCardProps> = ({ title, list }) => (
  <div className="staking__card">
    <div className="staking__card__header">
      <span className="staking__card__header__photo" />
      <span className="staking__card__header__title">
        {title}
      </span>
    </div>
    <ul className="staking__card__list">
      {list.map((item, index) => (
        <li className="staking__card__item" key={`${item.title}-${index}`}>
          <span className="staking__card__title">{item.title}</span>
          <span className="staking__card__wrapper">
            <span className="staking__card__currency">{item.currency}</span>
            <span className="staking__card__descr">{item.descr}</span>
          </span>
        </li>
      ))}
    </ul>
    <div className="staking__card__actions">
      <Button>
        Deposit
      </Button>
      <Button disabled>
        Withdraw
      </Button>
      <Button disabled>
        Claim
      </Button>
      <Button disabled>
        Exit
      </Button>
    </div>
  </div>
);
