/* eslint-disable react/no-array-index-key */
import React, { FC, useRef } from 'react';

import './style.scss';
import { Title } from '../../components/Title';
import { Description } from '../../components/Description';
import { CopyIcon } from '../../lib/icons';
import { ambassador } from '../../lib/mock/ambassador';
import { Button } from '../../components/Button';

export const Referral: FC = () => {
  const linkRef = useRef<HTMLAnchorElement>(null);

  const handleCopy = () => {
    navigator.clipboard.writeText(linkRef.current.textContent);
  };

  return (
    <div className="ambassador">
      <div className="ambassador__main-wrapper">
        <div className="ambassador__wrapper">
          <Title>
            Claim Rewards
          </Title>
          <Description>
            <ul className="ambassador__list">
              <li>Lock SPLX as veSPLX to get share 2% of protocol revenue</li>
              <li>
                Get cashback from every trade which
                triggered arbs, up to 60% from arbitrage profit
              </li>
              <li>
                Invite friends and get 1% (1 lvl)
                and 0.2%(2 lvl) from their arb cashbacks
              </li>
              <li>
                If you have followers who copy
                your trades you will recieved 5% from their arb profits
              </li>
            </ul>

            <span className="ambassador__link">
              Your referral link:
              {' '}
              <a href="http://limidex.io/ref/tradex123" ref={linkRef}>
                limidex.io/ref/tradex123
              </a>
              <button type="button" onClick={handleCopy}>
                <CopyIcon />
              </button>
            </span>
          </Description>
        </div>
        <div className="ambassador__wrapper">
          <h3 className="ambassador__earned__title">
            You earned
            {' '}
            <span>123456$</span>
            {' '}
            in total
          </h3>
          <h3 className="ambassador__earned__title">
            Available to claim
            {' '}
            <span>200$</span>
          </h3>
          <Button size="large">Claim all</Button>
        </div>
      </div>
      <div className="ambassador__stats__wrapper">
        <Title>Claim rewards</Title>
        <span className="ambassador__link">
          Your referral link:
          {' '}
          <a href="http://limidex.io/ref/tradex123" ref={linkRef}>
            limidex.io/ref/tradex123
          </a>
          <button type="button" onClick={handleCopy}>
            <CopyIcon />
          </button>
        </span>

        <div className="ambassador__stats">
          <span className="ambassador__stats__title">
            Reward list
          </span>
          <div className="ambassador__stats__table__wrapper">
            <table className="ambassador__stats__table">
              <thead>
                <tr>
                  <th>Network</th>
                  <th>veSPLX</th>
                  <th>Cashback</th>
                  <th>Ref 1lvl (12)</th>
                  <th>Ref 2lvl (34) </th>
                  <th>Followers (3)</th>
                  <th>Total</th>
                  <th>Available</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {ambassador.stats.map((item, index) => (
                  <tr key={`${item.network}-${index}`}>
                    <td>{item.network}</td>
                    <td>{item.veSPLX}</td>
                    <td>{item.cashback}</td>
                    <td>{item.ref1}</td>
                    <td>{item.ref2}</td>
                    <td>{item.followers}</td>
                    <td>{item.total}</td>
                    <td>{item.available}</td>
                    <td>
                      <Button size="small">
                        Claim
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
