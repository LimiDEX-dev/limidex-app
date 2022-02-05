import React from 'react';
import './style.scss';

export function ExchangesRates(props: any) {
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
              // eslint-disable-next-line react/no-array-index-key
              <tr className="red-rate" key={`${rate.price}-${index}`}>
                <td className="price">{rate.price}</td>
                <td className="amount">{rate.amount}</td>
              </tr>
            ))}
            {mockData.redRates.map((rate, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <tr className="green-rate" key={`${rate.price}-${index}`}>
                <td className="price">{rate.price}</td>
                <td className="amount">{rate.amount}</td>
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
    },
    {
      price: '48 099',
      amount: '1 099.0990',
      min: '0.0001',
      max: '0.0009',
    },
    {
      price: '48 099',
      amount: '1 099.0990',
      min: '0.0001',
      max: '0.0009',
    },
    {
      price: '48 099',
      amount: '1 099.0990',
      min: '0.0001',
      max: '0.0009',
    },
    {
      price: '48 099',
      amount: '1 099.0990',
      min: '0.0001',
      max: '0.0009',
    },
    {
      price: '48 099',
      amount: '1 099.0990',
      min: '0.0001',
      max: '0.0009',
    },
    {
      price: '48 099',
      amount: '1 099.0990',
      min: '0.0001',
      max: '0.0009',
    },
    {
      price: '48 099',
      amount: '1 099.0990',
      min: '0.0001',
      max: '0.0009',
    },
    {
      price: '48 099',
      amount: '1 099.0990',
      min: '0.0001',
      max: '0.0009',
    },
  ],
  greenRates: [
    {
      price: '48 099',
      amount: '1 099.0990',
      min: '0.0001',
      max: '0.0009',
    },
    {
      price: '48 099',
      amount: '1 099.0990',
      min: '0.0001',
      max: '0.0009',
    },
    {
      price: '48 099',
      amount: '1 099.0990',
      min: '0.0001',
      max: '0.0009',
    },
    {
      price: '48 099',
      amount: '1 099.0990',
      min: '0.0001',
      max: '0.0009',
    },
    {
      price: '48 099',
      amount: '1 099.0990',
      min: '0.0001',
      max: '0.0009',
    },
    {
      price: '48 099',
      amount: '1 099.0990',
      min: '0.0001',
      max: '0.0009',
    },
    {
      price: '48 099',
      amount: '1 099.0990',
      min: '0.0001',
      max: '0.0009',
    },
    {
      price: '48 099',
      amount: '1 099.0990',
      min: '0.0001',
      max: '0.0009',
    },
    {
      price: '48 099',
      amount: '1 099.0990',
      min: '0.0001',
      max: '0.0009',
    },
    {
      price: '48 099',
      amount: '1 099.0990',
      min: '0.0001',
      max: '0.0009',
    },
    {
      price: '48 099',
      amount: '1 099.0990',
      min: '0.0001',
      max: '0.0009',
    },
  ],
};
