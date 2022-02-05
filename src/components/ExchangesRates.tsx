import React from 'react';
import './ExchangesRates.scss';

export function ExchangesRates(props: any) {
  return (
    <div className="ExchangesRates">
      <div className="top">
        <div className="title">Exchange rates</div>
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
              <td>Amount</td>
              <td>Order fee</td>
              <td className="min">min</td>
              <td>max</td>
            </tr>
          </thead>
          <tbody>
            {mockData.redRates.map((rate) => (
              <tr className="red-rate">
                <td className="price">{rate.price}</td>
                <td className="amount">{rate.amount}</td>
                <td className="order-fee" />
                <td className="min">{rate.min}</td>
                <td className="max">{rate.max}</td>
              </tr>
            ))}
            {mockData.redRates.map((rate) => (
              <tr className="green-rate">
                <td className="price">{rate.price}</td>
                <td className="amount">{rate.amount}</td>
                <td className="order-fee" />
                <td className="min">{rate.min}</td>
                <td className="max">{rate.max}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="bottom">
        <div className="title">Oracle prices</div>

        <div className="lines">
          <div className="line">
            <span>Network fee — current</span>
            <span>0.0001</span>
          </div>
          <div className="line">
            <span>Order fee</span>
            <span>0.005</span>
          </div>
        </div>
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
