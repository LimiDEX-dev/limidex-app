/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react';
import './style.scss';
import classnames from 'classnames';
import { Dropdown } from '../Dropdown';

const stepOptions = [
  {
    label: '$',
    value: '1 ',
  },
  {
    label: '$',
    value: '5 ',
  },
  {
    label: '$',
    value: '10',
  },
  {
    label: '$',
    value: '50',
  },
];

export const ExchangesRates = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [redDates, setRedDates] = useState(mockData.redRates);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [greenDates, setGreenDates] = useState(mockData.greenRates);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [currentPrice, setCurrentPrice] = useState(mockData.currentPrice);
  const [selectedStep, setSelectedStep] = useState(stepOptions[0]);

  useEffect(() => {
    // THERE IS FUNCTIONS THAT SET RATES DATA
    // setRedDates()
    // setGreenDates()
    // setCurrentPrice()
  }, []);

  return (
    <div className="ExchangesRates">
      <div className="top">
        <div className="title">Orderbook</div>
        <Dropdown items={stepOptions} onSelect={setSelectedStep} arrowHidden textAlign="right">
          <div className="step">
            <span>Step</span>
            <span>$</span>
            <span>{selectedStep.value}</span>
          </div>
        </Dropdown>
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
            {redDates.map((rate, index) => (
              <tr
                className="red-rate"
                key={`${rate.price}-${index}`}
              >
                <td className="price">{rate.price}</td>
                <td className="amount">
                  {rate.amount}
                  <div className="progress" style={{ width: `${rate.progress}%` }} />
                </td>
              </tr>
            ))}
            <tr
              className="red-rate red-rate--big"
              key="date-current-price"
            >
              <td className="price">{currentPrice.price}</td>
              <td className="amount">
                {currentPrice.amount}
                <div className="progress" style={{ width: `${currentPrice.progress}%` }} />
              </td>
            </tr>
            {greenDates.map((rate, index) => (
              <tr
                className="green-rate"
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
};

const mockData = {
  currentPrice: {
    price: '48 099',
    amount: '1 099.0990',
    min: '0.0001',
    max: '0.0009',
    progress: 25,
  },
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
    },
    {
      price: '48 099',
      amount: '1 099.0990',
      min: '0.0001',
      max: '0.0009',
      progress: 75,
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
  ],
};
