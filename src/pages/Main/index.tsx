import React, { useLayoutEffect, useState } from "react";

import {
  PlaceOrder,
  ExchangesRates,
  Orders,
  Chart,
} from "../../components/molecules";
import { ChartIcon, RatesIcon } from "../../lib/icons";

import * as S from "./style";

export const Main = () => {
  const [activeOrderTab, setActiveOrderTab] = useState<
    "limit" | "swap" | "cross"
  >("swap");
  const [activeTab, setActiveTab] = useState<0 | 1>(0);
  const [isExpertMode, setIsExpertMode] = useState(false);
  const [height, setHeight] = useState<number>(0);

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
  }, [isExpertMode, activeOrderTab]);

  return (
    <S.Main
      isExpertMode={
        (isExpertMode && activeOrderTab === "swap") ||
        activeOrderTab === "limit"
      }
    >
      <S.LeftContent>
        <PlaceOrder
          isExpertMode={isExpertMode}
          setIsExpertMode={setIsExpertMode}
          activeTab={activeOrderTab}
          setActiveTab={setActiveOrderTab}
        />
      </S.LeftContent>

      <S.RightContent>
        <S.RightTop>
          <S.ExchangeRatesContainer isActive={activeTab === 1}>
            <ExchangesRates />
          </S.ExchangeRatesContainer>
          <S.ChartContainer isActive={activeTab === 0}>
            <Chart height={height} setHeight={setHeight} />
          </S.ChartContainer>
        </S.RightTop>

        <S.RightBottom>
          <Orders />
        </S.RightBottom>
      </S.RightContent>
      <S.Actions>
        <S.ActionButton type="button" onClick={() => setActiveTab(0)}>
          <ChartIcon />
        </S.ActionButton>
        <S.ActionButton type="button" onClick={() => setActiveTab(1)}>
          <RatesIcon />
        </S.ActionButton>
      </S.Actions>
      <Orders />
    </S.Main>
  );
};
