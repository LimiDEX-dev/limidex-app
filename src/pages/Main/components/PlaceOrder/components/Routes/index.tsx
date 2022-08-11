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
          value={0}
          checked={route === 0}
          onChange={() => setRoute(0)}
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
          value={1}
          checked={route === 1}
          onChange={() => setRoute(1)}
        />
        <S.RoutesRadio />
        <S.RoutesRadioLabel>Pancakeswap</S.RoutesRadioLabel>
        <S.RoutesRadioTitle>Slippage 0.5% </S.RoutesRadioTitle>
      </S.RoutesLabel>
    </S.Routes>
  );
};
