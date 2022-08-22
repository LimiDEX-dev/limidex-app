/* eslint-disable react/no-array-index-key */
import React, { useEffect } from "react";

import { Dropdown } from "../../atoms";
import { ActionsObject, useLocalStore } from "../../../pages/Main/context";
import { stepOptions } from "../../../pages/Main/context/store";

import * as S from "./style";

export const ExchangesRates = () => {
  const localStore = useLocalStore();
  const {
    rates: { selectedStep, redRates, greenRates, currentPrice },
  } = localStore.data;
  const {
    rates: { setSelectedStep },
  } = localStore.actions as ActionsObject;

  useEffect(() => {
    // THERE IS FUNCTIONS THAT SET RATES DATA
    // setRedDates()
    // setGreenDates()
    // setCurrentPrice()
  }, []);

  return (
    <S.ExchangeRates>
      <S.Header>
        <S.Title>Orderbook</S.Title>
        <Dropdown
          items={stepOptions}
          onSelect={setSelectedStep}
          arrowHidden
          textAlign="right"
          listWidth={90}
        >
          <S.Step>
            <S.StepItem>Step</S.StepItem>
            <S.StepItem>$</S.StepItem>{" "}
            <S.StepItem>{selectedStep.value}</S.StepItem>
          </S.Step>
        </Dropdown>
      </S.Header>

      <S.Content>
        <S.Table>
          <thead>
            <tr>
              <S.TableHeaderItem>Price — BUSD</S.TableHeaderItem>
              <S.TableHeaderItem>Amount</S.TableHeaderItem>
            </tr>
          </thead>
          <tbody>
            {redRates.map((rate, index) => (
              <S.Row redRate key={`${rate.price}-${index}`}>
                <S.TableItem>{rate.price}</S.TableItem>
                <S.TableItem>
                  <span>{rate.amount}</span>
                  <S.Progress style={{ width: `${rate.progress}%` }} />
                </S.TableItem>
              </S.Row>
            ))}
            <S.Row redRate big>
              <S.TableItem>{currentPrice.price}</S.TableItem>
              <S.TableItem>
                <span>{currentPrice.amount}</span>
                <S.Progress style={{ width: `${currentPrice.progress}%` }} />
              </S.TableItem>
            </S.Row>
            {greenRates.map((rate, index) => (
              <S.Row greenRate key={`${rate.price}-${index}`}>
                <S.TableItem>{rate.price}</S.TableItem>
                <S.TableItem>
                  <span>{rate.amount}</span>
                  <S.Progress style={{ width: `${rate.progress}%` }} />
                </S.TableItem>
              </S.Row>
            ))}
          </tbody>
        </S.Table>
      </S.Content>
    </S.ExchangeRates>
  );
};

const mockData = {
  currentPrice: {
    price: "48 099",
    amount: "1 099.0990",
    min: "0.0001",
    max: "0.0009",
    progress: 25,
  },
  redRates: [
    {
      price: "48 099",
      amount: "1 099.0990",
      min: "0.0001",
      max: "0.0009",
      progress: 25,
    },
    {
      price: "48 099",
      amount: "1 099.0990",
      min: "0.0001",
      max: "0.0009",
      progress: 50,
    },
    {
      price: "48 099",
      amount: "1 099.0990",
      min: "0.0001",
      max: "0.0009",
      progress: 25,
    },
    {
      price: "48 099",
      amount: "1 099.0990",
      min: "0.0001",
      max: "0.0009",
      progress: 10,
    },
    {
      price: "48 099",
      amount: "1 099.0990",
      min: "0.0001",
      max: "0.0009",
      progress: 100,
    },
    {
      price: "48 099",
      amount: "1 099.0990",
      min: "0.0001",
      max: "0.0009",
      progress: 25,
    },
    {
      price: "48 099",
      amount: "1 099.0990",
      min: "0.0001",
      max: "0.0009",
      progress: 25,
    },
    {
      price: "48 099",
      amount: "1 099.0990",
      min: "0.0001",
      max: "0.0009",
      progress: 75,
    },
    {
      price: "48 099",
      amount: "1 099.0990",
      min: "0.0001",
      max: "0.0009",
      progress: 75,
    },
    {
      price: "48 099",
      amount: "1 099.0990",
      min: "0.0001",
      max: "0.0009",
      progress: 75,
    },
  ],
  greenRates: [
    {
      price: "48 099",
      amount: "1 099.0990",
      min: "0.0001",
      max: "0.0009",
      progress: 25,
    },
    {
      price: "48 099",
      amount: "1 099.0990",
      min: "0.0001",
      max: "0.0009",
      progress: 0,
    },
    {
      price: "48 099",
      amount: "1 099.0990",
      min: "0.0001",
      max: "0.0009",
      progress: 10,
    },
    {
      price: "48 099",
      amount: "1 099.0990",
      min: "0.0001",
      max: "0.0009",
      progress: 25,
    },
    {
      price: "48 099",
      amount: "1 099.0990",
      min: "0.0001",
      max: "0.0009",
      progress: 25,
    },
    {
      price: "48 099",
      amount: "1 099.0990",
      min: "0.0001",
      max: "0.0009",
      progress: 75,
    },
    {
      price: "48 099",
      amount: "1 099.0990",
      min: "0.0001",
      max: "0.0009",
      progress: 100,
    },
    {
      price: "48 099",
      amount: "1 099.0990",
      min: "0.0001",
      max: "0.0009",
      progress: 15,
    },
    {
      price: "48 099",
      amount: "1 099.0990",
      min: "0.0001",
      max: "0.0009",
      progress: 25,
    },
    {
      price: "48 099",
      amount: "1 099.0990",
      min: "0.0001",
      max: "0.0009",
      progress: 50,
    },
  ],
};
