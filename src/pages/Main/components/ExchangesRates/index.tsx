/* eslint-disable react/no-array-index-key */
import React, { useEffect } from "react";

import { Dropdown } from "../../../../components/atoms";
import { ActionsObject, useLocalStore } from "../../context";
import { stepOptions } from "../../context/store";

import * as S from "./style";
import { ORDER_BOOKS_ITEMS } from "../../lib/constants";
import { getOrderBook } from "../../../../api/main/trade";

export const ExchangesRates = () => {
  const localStore = useLocalStore();
  const {
    convert: {
      sell: { selectedSell },
      buy: { selectedBuy },
    },
    rates: { selectedStep, data },
  } = localStore.data;
  const {
    rates: { setSelectedStep, setData },
  } = localStore.actions as ActionsObject;

  useEffect(() => {
    if (!selectedSell || !selectedBuy || !selectedStep) {
      return;
    }

    (async function () {
      const result = await getOrderBook({
        fromToken: selectedSell.symbol,
        toToken: selectedBuy.symbol,
        delta: +selectedStep.value,
        size: ORDER_BOOKS_ITEMS,
      });
      console.log(result);

      setData(result.data.result);
    })();
  }, [selectedSell, selectedBuy, selectedStep]);

  const renderRates = () =>
    data.map((rate, index) => {
      if (index < ORDER_BOOKS_ITEMS) {
        const allVolumes = data
          .slice(0, ORDER_BOOKS_ITEMS)
          .map((item) => item.volume)
          .reduce((prevValue, curValue) => +prevValue + +curValue, 0);
        const progress = (+rate.volume / allVolumes) * 100;

        return (
          <S.Row redRate key={`${rate.price}-${index}`}>
            <S.TableItem>{rate.price}</S.TableItem>
            <S.TableItem>
              <span>{rate.price}</span>
              <S.Progress style={{ width: `${progress}%` }} />
            </S.TableItem>
          </S.Row>
        );
      }

      if (index === ORDER_BOOKS_ITEMS) {
        return (
          <S.Row redRate big key={`${rate.price}-${index}`}>
            <S.TableItem>{rate.price}</S.TableItem>
            <S.TableItem>
              <span>{rate.price}</span>
              <S.Progress style={{ width: `0%` }} />
            </S.TableItem>
          </S.Row>
        );
      }

      const allVolumes = data
        .slice(ORDER_BOOKS_ITEMS + 1)
        .map((item) => item.volume)
        .reduce((prevValue, curValue) => +prevValue + +curValue, 0);
      const progress = (+rate.volume / allVolumes) * 100;

      return (
        <S.Row greenRate key={`${rate.price}-${index}`}>
          <S.TableItem>{rate.price}</S.TableItem>
          <S.TableItem>
            <span>{rate.price}</span>
            <S.Progress style={{ width: `${progress}%` }} />
          </S.TableItem>
        </S.Row>
      );
    });

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
          <tbody>{renderRates()}</tbody>
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
