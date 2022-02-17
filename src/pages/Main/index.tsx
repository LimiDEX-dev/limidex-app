import React, { useState } from 'react';

import './style.scss';

import { PlaceOrder } from '../../components/PlaceOrder';
import { ExchangesRates } from '../../components/ExchangesRates';
import { Orders } from '../../components/Orders';
import { Chart } from '../../components/Chart';
import { ChartIcon, RatesIcon } from '../../lib/icons';

export const Main = () => {
  const [activeTab, setActiveTab] = useState<0 | 1>(0);

  return (
    <div className="Main">
      <div className="left">
        <PlaceOrder />
      </div>

      <div className="right">
        <div className="right-top" data-active-tab={activeTab}>
          <div className="chart-container">
            <Chart />
          </div>
          <div className="exchanges-rates-container">
            <ExchangesRates />
          </div>
        </div>

        <div className="right-bottom">
          <Orders />
        </div>
      </div>
      <div className="actions">
        <button type="button" onClick={() => setActiveTab(0)}>
          <ChartIcon />
        </button>
        <button type="button" onClick={() => setActiveTab(1)}>
          <RatesIcon />
        </button>
      </div>
      <Orders />
    </div>
  );
};
