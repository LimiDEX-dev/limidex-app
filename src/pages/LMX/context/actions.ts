import { Dispatch, SetStateAction } from "react";
import { ActionsObject, StoreObject } from "./types";

export const provideActions = (
  setStore: Dispatch<SetStateAction<StoreObject>>,
): ActionsObject => ({
  setLockPeriod: (payload) => {
    setStore((store) => ({
      ...store,
      lockPeriod: payload,
    }));
  },
  setLockSPLX: (payload) => {
    setStore((store) => ({
      ...store,
      lockSPLX: payload,
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
