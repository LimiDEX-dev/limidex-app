import React, { useState } from 'react';
import './style.scss';

export function PlaceOrder(props: any) {
  const [activeTab, setActiveTab] = useState<0 | 1>(0);

  return (
    <div className="PlaceOrder">
      <div className="title">Place order</div>
      <div className="tab-switch">
        <button
          type="button"
          className={activeTab === 0 ? 'active' : ''}
          onClick={() => setActiveTab(0)}
        >
          Limit
        </button>
        <button
          type="button"
          className={activeTab === 1 ? 'active' : ''}
          onClick={() => setActiveTab(1)}
        >
          Market Order
        </button>
      </div>

      <div className="valute-swap">
        <div className="valute-converter">
          <div className="balance">Balance 12 WNBM</div>
          <div className="valute-dropdown">
            <span className="circle" />
            {' '}
            WNBM
            {' '}
            <span className="dropdown" />
          </div>
          <div className="valute-value">
            <span>To sell</span>
            <input value="10.00" />
          </div>
        </div>
        <div className="swap-icon" />
        <div className="valute-converter">
          <div className="balance">-1000$</div>
          <div className="valute-dropdown">
            <span className="circle" />
            {' '}
            BUSD
            {' '}
            <span className="dropdown" />
          </div>
          <div className="valute-value">
            <span>To buy</span>
            <input value="10.00" />
          </div>
        </div>
      </div>

      <div className="valute-toggle-container">
        <div className="valute-toggle">
          <div className="active">Buy</div>
          <div>Sell</div>
        </div>
        <div className="valute-costs">
          <span>1 WNBN costs</span>
          <span>$</span>
          <input value="520.00" />
        </div>
      </div>

      <div className="valute-tolerance">
        <span>Slippage tolerance</span>
        <span />
        <span>%</span>
        <input value="0.1" />
      </div>

      <div className="valute-impact">
        <span>Price impact</span>
        <span />
        <span>%</span>
        <input value="0.1" />
      </div>

      <div className="routes-container">
        <div className="routes-title">Routing</div>
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label>
          <input type="radio" name="routing" className="radio-input visually-hidden" defaultChecked />
          <div className="radio active" />
          <div className="radio-label">Self route</div>
          <div className="radio-title">Your order will be executed at the best opportunity at the time of the trade</div>
        </label>
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label>
          <input type="radio" name="routing" className="radio-input visually-hidden" />
          <div className="radio" />
          <div className="radio-label">Pancakeswap</div>
          <div className="radio-title">Slippage  0.5%  </div>
        </label>
      </div>

      <div className="more">
        Advanced
      </div>

      <div className="info">
        You will buy WBNB for USDT
        Target price – 0.001 WBNB. Network fee: slow
      </div>

      <button type="button" className="btn">
        Give permission to use WNBN
      </button>
    </div>
  );
}
