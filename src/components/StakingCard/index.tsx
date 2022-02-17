/* eslint-disable react/no-array-index-key */
import React, { FC, useEffect } from 'react';
import { useSwiper } from 'swiper/react';
import { Button } from '../Button';
import './style.scss';

type StakingCardProps = {
  title: string;
  list: {
    title: string;
    currency: string;
    descr: string;
  }[];
  description?: string;
  handleDeposit?: () => void;
}

export const StakingCard: FC<StakingCardProps> = ({
  title, list, description, handleDeposit,
}) => {
  const swiper = useSwiper();

  useEffect(() => {
    if (!swiper) {
      return;
    }

    const handleResize = (event: Event) => {
      const window = (event.target) as Window;

      if (window.innerWidth >= 1200) {
        swiper.disable();
        return;
      }

      swiper.enable();
    };

    window.addEventListener('resize', handleResize);

    if (window.innerWidth >= 1200) {
      swiper.disable();
    } else {
      swiper.enable();
    }

    // eslint-disable-next-line consistent-return
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [swiper]);

  return (
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
      <span className="staking__card__description">
        {description}
      </span>
      <div className="staking__card__actions">
        <Button onClick={handleDeposit}>
          Deposit
        </Button>
        <Button disabled>
          Withdraw
        </Button>
      </div>
    </div>
  );
};
