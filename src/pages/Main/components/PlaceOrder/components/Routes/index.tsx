import React, { FC } from "react";

import { ActionsObject, useLocalStore } from "../../../../context";

import * as S from "./style";

export const PlaceOrderRoutes: FC = () => {
  const localStore = useLocalStore();

  const {
    settings: { route },
  } = localStore.data;
  const {
    settings: { setRoute },
  } = localStore.actions as ActionsObject;

  return (
    <S.Routes>
      <S.RoutesLabel>
        <S.RoutesInput
          type="radio"
          name="routing"
          className="visually-hidden"
          value="self"
          checked={route === "self"}
          onChange={() => setRoute("self")}
        />
        <S.RoutesRadio />
        <S.RoutesRadioLabel>Self route</S.RoutesRadioLabel>
        <S.RoutesRadioTitle>
          Your order will be executed at the best opportunity at the time of the
          trade
        </S.RoutesRadioTitle>
      </S.RoutesLabel>
      <S.RoutesLabel>
        <S.RoutesInput
          type="radio"
          name="routing"
          className="visually-hidden"
          value="pancakeswap"
          checked={route === "pancakeswap"}
          onChange={() => setRoute("pancakeswap")}
        />
        <S.RoutesRadio />
        <S.RoutesRadioLabel>Pancakeswap</S.RoutesRadioLabel>
        <S.RoutesRadioTitle>Slippage 0.5% </S.RoutesRadioTitle>
      </S.RoutesLabel>
    </S.Routes>
  );
};
