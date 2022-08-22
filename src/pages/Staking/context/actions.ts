import { Dispatch, SetStateAction } from "react";
import { ActionsObject, StoreObject } from "./types";

export const provideActions = (
  setStore: Dispatch<SetStateAction<StoreObject>>,
): ActionsObject => ({
  setSelectedCard: (payload) => {
    setStore((store) => ({
      ...store,
      selectedCard: payload,
    }));
  },
  setStateToken: (payload) => {
    setStore((store) => ({
      ...store,
      stateToken: payload,
    }));
  },
  setLpTokens: (payload) => {
    setStore((store) => ({
      ...store,
      lpTokens: payload,
    }));
  },
  setWithdraw: (payload) => {
    setStore((store) => ({
      ...store,
      withdraw: {
        ...store.withdraw,
        ...payload,
      },
    }));
  },
});
