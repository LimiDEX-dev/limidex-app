/* eslint-disable react/no-array-index-key */
import React from 'react';
import './style.scss';
import classnames from 'classnames';

export function ExchangesRates() {
  return (
    <div className="ExchangesRates">
      <div className="top">
        <div className="title">Orderbook</div>
        <div className="step">
          <span>Step</span>
          <span>$</span>
          <span>10</span>
        </div>
      </div>

      <div className="content">
        <table>
          <thead>
            <tr>
              <td className="price">Price — BUSD</td>
              <td className="amount">Amount</td>
            </tr>
          </thead>
          <tbody>
            {mockData.redRates.map((rate, index) => (
              <tr
                className={classnames('red-rate', {
                  'red-rate--big': rate.isBig,
                })}
                key={`${rate.price}-${index}`}
              >
                <td className="price">{rate.price}</td>
                <td className="amount">
                  {rate.amount}
                  <div className="progress" style={{ width: `${rate.progress}%` }} />
                </td>
              </tr>
            ))}
            {mockData.greenRates.map((rate, index) => (
              <tr
                className={classnames('green-rate', {
                  'green-rate--big': rate.isBig,
                })}
                key={`${rate.price}-${index}`}
              >
                <td className="price">{rate.price}</td>
                <td className="amount">
                  {rate.amount}
                  <div className="progress" style={{ width: `${rate.progress}%` }} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const mockData = {
  redRates: [
    {
      price: '48 099',
      amount: '1 099.0990',
      min: '0.0001',
      max: '0.0009',
      progress: 25,
    },
    {
      price: '48 099',
      amount: '1 099.0990',
      min: '0.0001',
      max: '0.0009',
      progress: 50,
    },
    {
      price: '48 099',
      amount: '1 099.0990',
      min: '0.0001',
      max: '0.0009',
      progress: 25,
    },
    {
      price: '48 099',
      amount: '1 099.0990',
      min: '0.0001',
      max: '0.0009',
      progress: 10,
    },
    {
      price: '48 099',
      amount: '1 099.0990',
      min: '0.0001',
      max: '0.0009',
      progress: 100,
    },
    {
      price: '48 099',
      amount: '1 099.0990',
      min: '0.0001',
      max: '0.0009',
      progress: 25,
    },
    {
      price: '48 099',
      amount: '1 099.0990',
      min: '0.0001',
      max: '0.0009',
      progress: 25,
      isBig: true,
    },
    {
      price: '48 099',
      amount: '1 099.0990',
      min: '0.0001',
      max: '0.0009',
      progress: 75,
    },
    {
      price: '48 099',
      amount: '1 099.0990',
      min: '0.0001',
      max: '0.0009',
      progress: 25,
    },
  ],
  greenRates: [
    {
      price: '48 099',
      amount: '1 099.0990',
      min: '0.0001',
      max: '0.0009',
      progress: 25,
    },
    {
      price: '48 099',
      amount: '1 099.0990',
      min: '0.0001',
      max: '0.0009',
      progress: 0,
    },
    {
      price: '48 099',
      amount: '1 099.0990',
      min: '0.0001',
      max: '0.0009',
      progress: 10,
    },
    {
      price: '48 099',
      amount: '1 099.0990',
      min: '0.0001',
      max: '0.0009',
      progress: 25,
    },
    {
      price: '48 099',
      amount: '1 099.0990',
      min: '0.0001',
      max: '0.0009',
      progress: 25,
    },
    {
      price: '48 099',
      amount: '1 099.0990',
      min: '0.0001',
      max: '0.0009',
      progress: 75,
    },
    {
      price: '48 099',
      amount: '1 099.0990',
      min: '0.0001',
      max: '0.0009',
      progress: 100,
    },
    {
      price: '48 099',
      amount: '1 099.0990',
      min: '0.0001',
      max: '0.0009',
      progress: 15,
    },
    {
      price: '48 099',
      amount: '1 099.0990',
      min: '0.0001',
      max: '0.0009',
      progress: 25,
    },
    {
      price: '48 099',
      amount: '1 099.0990',
      min: '0.0001',
      max: '0.0009',
      progress: 50,
    },
    {
      price: '48 099',
      amount: '1 099.0990',
      min: '0.0001',
      max: '0.0009',
      progress: 25,
      isBig: true,
    },
  ],
};
