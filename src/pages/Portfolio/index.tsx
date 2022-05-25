/* eslint-disable react/no-array-index-key */
import React, { FC, useEffect, useState } from 'react';
import './style.scss';
import { portfolio } from '../../lib/mock/portfolio';
import { NetworkItem } from '../../components/NetworkItem';
import { PortfolioTable, PortfolioTableFields } from '../../components/PortfolioTable';
import { SortType } from '../../components/Sort';
import { Button } from '../../components/Button';
import { Modal } from '../../components/Modal';
import { Input } from '../../components/Input';

export const Portfolio: FC = () => {
  const [activeNetwork, setActiveNetwork] = useState<number>(0);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [networks, setNetworks] = useState(portfolio.networks);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [trading, setTrading] = useState(portfolio.trading);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [wallet, setWallet] = useState(portfolio.wallet);
  const [sort, setSort] = useState<{ field: PortfolioTableFields; by: SortType }>({ field: 'type', by: 'no' });
  const [isFollowModal, setIsFollowModal] = useState<boolean>(false);
  const [tokenValue, setTokenValue] = useState<string>('100');

  const handleChangeActiveNetwork = (index: number) => {
    setActiveNetwork(index);

    if (activeNetwork === 0) {
      setSort({ field: 'type', by: 'no' });

      return;
    }

    setSort({ field: 'network', by: 'no' });
  };

  const handleFollow = () => {
    setIsFollowModal(true);
  };

  useEffect(() => {
    // THERE IS FUNCTION THAT SET NETWORKS DATA
    // setNetworks(someData);
    // AND PORTFOLIO TABLE DATA
    // setList(someData);
  }, []);

  return (
    <div className="portfolio">
      <Modal isVisible={isFollowModal} handleClose={() => setIsFollowModal(false)}>
        <span className="portfolio__modal__title">
          Are you sure you want to follow for this trader?
          After that you will start copying his trades
          <br />
          {' '}
          <br />
          Set allowed volume to copy trades
        </span>
        <div className="portfolio__modal__actions">
          <Input
            value={tokenValue}
            onChange={setTokenValue}
            type="number"
            max={100}
            topLabel="Token value"
            min={0}
            currency="%"
          />
          <Button size="middle" onClick={() => setIsFollowModal(false)}>
            Subscribe
          </Button>
        </div>
      </Modal>
      <div className="portfolio__info">
        <div className="portfolio__info__wrapper">
          <div className="portfolio__info__wallet">
            <span className="portfolio__info__wallet__title">
              0x039e1e57a1a1028819f7ecd11d67b49b86316e37
            </span>
            <Button size="middle">
              Share
            </Button>
            <Button size="middle">
              Follow
            </Button>
          </div>
          <div className="portfolio__info__stats">
            <span className="portfolio__info__stats__item">
              Following
              {' '}
              <span>0</span>
            </span>
            <span className="portfolio__info__stats__item">
              Followers
              {' '}
              <span>0</span>
            </span>
          </div>
          <div className="portfolio__info__rewards">
            <span className="portfolio__info__rewards__title">
              Rewards: $12,357,554
            </span>
          </div>
        </div>
        <div className="portfolio__info__wrapper">
          <div className="portfolio__info__balance">
            <span className="portfolio__info__balance__title">
              Balance: $12,357,554
            </span>
            <div className="portfolio__info__balance__tags">
              <span className="portfolio__info__balance__tag">
                <span>
                  Weekly PnL:
                  {' '}
                  <span className="red">-10%</span>
                </span>
              </span>
              <span className="portfolio__info__balance__tag">
                <span>
                  Monthly PnL:
                  {' '}
                  <span className="green">10%</span>
                </span>
              </span>
              <span className="portfolio__info__balance__tag">
                <span>
                  Quarterly PnL:
                  {' '}
                  <span className="green">124%</span>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <ul className="portfolio__networks__list">
        {networks.map((item, index) => (
          <NetworkItem
            title={item.title}
            isActive={index === activeNetwork}
            handleChange={() => handleChangeActiveNetwork(index)}
            key={`${item.title}-${index}`}
          />
        ))}
      </ul>
      <span className="portfolio__title">
        All assets - 12453$
      </span>
      <PortfolioTable
        sort={sort}
        handleChangeSort={setSort}
        trading={trading}
        wallet={wallet}
        activeNetwork={activeNetwork}
        handleFollow={handleFollow}
      />
    </div>
  );
};
