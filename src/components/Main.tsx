import React from 'react';

import './Main.scss';

import { PlaceOrder } from './PlaceOrder';
import { ExchangesRates } from './ExchangesRates';
import { Orders } from './Orders';
import { Chart } from './Chart';

export function Main(props: any) {
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
