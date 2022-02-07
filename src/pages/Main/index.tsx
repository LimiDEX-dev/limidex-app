import React from 'react';

import './style.scss';

import { PlaceOrder } from '../../components/PlaceOrder';
import { ExchangesRates } from '../../components/ExchangesRates';
import { Orders } from '../../components/Orders';
import { Chart } from '../../components/Chart';

export function Main() {
  return (
    <div className="Main">
      <div className="left">
        <PlaceOrder />
      </div>

      <div className="right">
        <div className="right-top">
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
    </div>
  );
}
