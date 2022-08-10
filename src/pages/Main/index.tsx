import React, { FC, useLayoutEffect, useState } from "react";

import { ExchangesRates, Orders, Chart } from "../../components/molecules";
import { PlaceOrder } from "./components";
import { ChartIcon, RatesIcon } from "../../lib/icons";
import { ActionsObject, useLocalStore, Store } from "./context";

import * as S from "./style";

const Page = () => {
  const [height, setHeight] = useState<number>(0);

  const localStore = useLocalStore();

  const {
    ui: { mobileTab, orderTab, isExpertMode },
  } = localStore.data;
  const {
    ui: { setMobileTab },
  } = localStore.actions as ActionsObject;

  useLayoutEffect(() => {
    // THERE IS FUNCTION THAT SET CHART DATA
    // setChart(someData);

    function update() {
      const $node = document.querySelector("#chart") as HTMLElement;
      const rect = $node.getBoundingClientRect();
      setHeight(rect.height - 40);
    }

    setTimeout(() => {
      update();
    });

    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("resize", update);
    };
  }, [isExpertMode, orderTab]);

  return (
    <S.Main
      isExpertMode={
        (isExpertMode && orderTab === "swap") || orderTab === "limit"
      }
    >
      <S.LeftContent>
        <PlaceOrder />
      </S.LeftContent>

      <S.RightContent>
        <S.RightTop>
          <S.ExchangeRatesContainer isActive={mobileTab === "rates"}>
            <ExchangesRates />
          </S.ExchangeRatesContainer>
          <S.ChartContainer isActive={mobileTab === "chart"}>
            <Chart height={height} setHeight={setHeight} />
          </S.ChartContainer>
        </S.RightTop>

        <S.RightBottom>
          <Orders />
        </S.RightBottom>
      </S.RightContent>
      <S.Actions>
        <S.ActionButton type="button" onClick={() => setMobileTab("chart")}>
          <ChartIcon />
        </S.ActionButton>
        <S.ActionButton type="button" onClick={() => setMobileTab("rates")}>
          <RatesIcon />
        </S.ActionButton>
      </S.Actions>
      <Orders />
    </S.Main>
  );
};

export const MainPage: FC = () => (
  <Store>
    <Page />
  </Store>
);
