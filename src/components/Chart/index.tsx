import React from 'react';
import { CandleStickChart } from '../CandleStickChart';
import './style.scss';

export function Chart(props: any) {
  return (
    <div className="Chart">
      <div className="chart__header">
        <div className="chart__header__flex-wrapper">
          <span className="chart__header__title">
            Rates
          </span>
          <div className="chart__header__timeframe">
            <span className="chart__header__timeframe__text">
              Timeframe
            </span>
            <span className="chart__header__timeframe__wrapper">
              <span className="chart__header__timeframe__text">
                m
              </span>
              <span className="chart__header__timeframe__minutes">
                10
              </span>
            </span>
          </div>
        </div>
        <div className="chart__header__current">
          <div className="chart__header__valute">
            <span className="chart__header__valute__icon" />
            <span className="chart__header__valute__icon" />
            <span className="chart__header__valute__text">
              WNBN / WNBN
            </span>
          </div>
          <span className="chart__header__current__text">
            556.7373732987
          </span>
          <span className="chart__header__current__change">
            +0.00018
          </span>
        </div>
      </div>
      <CandleStickChart />
    </div>
  );
}
