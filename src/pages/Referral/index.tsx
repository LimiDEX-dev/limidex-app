/* eslint-disable react/no-array-index-key */
import React, { FC, useRef } from 'react';

import './style.scss';
import { Title } from '../../components/Title';
import { Description } from '../../components/Description';
import { CopyIcon } from '../../lib/icons';
import { Rewards } from '../../components/Rewards';
import { lmx } from '../../lib/mock/lmx';
import { ambassador } from '../../lib/mock/ambassador';
import { Button } from '../../components/Button';

export const Referral: FC = () => {
  const linkRef = useRef<HTMLAnchorElement>(null);

  const handleCopy = () => {
    navigator.clipboard.writeText(linkRef.current.textContent);
  };

  return (
    <div className="ambassador">
      <div className="ambassador__wrapper">
        <Title>
          Join the Referral Program
        </Title>
        <Description>
          <span>
            Share link with your friends and get rewards in native network coins for their trading
          </span>

          <span className="ambassador__link">
            Your link:
            {' '}
            <a href="http://limidex.io/ref/tradex123" ref={linkRef}>
              limidex.io/ref/tradex123
            </a>
            <button type="button" onClick={handleCopy}>
              <CopyIcon />
            </button>
          </span>
        </Description>
        <Rewards data={lmx.rewards} />
      </div>
      <div className="ambassador__wrapper">
        <div className="ambassador__stats">
          <span className="ambassador__stats__title">
            Refferal stats
            <Button size="small">
              Claim all rewards
            </Button>
          </span>
          <div className="ambassador__stats__table__wrapper">
            <table className="ambassador__stats__table">
              <thead>
                <tr>
                  <th>Affiliate</th>
                  <th>LVL (%)</th>
                  <th>Network</th>
                  <th>Token</th>
                  <th>Rewards</th>
                  <th>Claim</th>
                </tr>
              </thead>
              <tbody>
                {ambassador.stats.map((item, index) => (
                  <tr key={`${item.affiliate}-${index}`}>
                    <td>{item.affiliate}</td>
                    <td>{item.lvl}</td>
                    <td>{item.network}</td>
                    <td>{item.token}</td>
                    <td>{item.rewards}</td>
                    <td>
                      <button type="button">
                        Reward
                      </button>
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
