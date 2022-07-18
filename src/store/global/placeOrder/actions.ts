import { Dispatch, SetStateAction } from "react";

import { PlaceOrderActions, PlaceOrderObject } from "./types";
import { StoreObject } from "../types";
import { valutes } from "../../../lib/mock/valutes";

export const providePlaceOrderActions = (
  setGlobalStore: Dispatch<SetStateAction<StoreObject>>,
): PlaceOrderActions => {
  const setStore = (
    payload:
      | ((store: PlaceOrderObject) => Partial<PlaceOrderObject>)
      | Partial<PlaceOrderObject>,
  ) => {
    setGlobalStore((store) => ({
      ...store,
      placeOrder: {
        ...store.placeOrder,
        ...(typeof payload === "function"
          ? payload(store.placeOrder)
          : payload),
      },
    }));
  };

  return {
    setSellValute: (payload) => {
      setStore((store) => ({
        valutes: {
          ...store.valutes,
          sell: {
            ...store.valutes.sell,
            valute: payload,
          },
        },
      }));
    },
    setSellValue: (payload) => {
      setStore((store) => ({
        valutes: {
          ...store.valutes,
          sell: {
            ...store.valutes.sell,
            value: payload,
          },
        },
      }));
    },
    setBuyValute: (payload) => {
      setStore((store) => ({
        valutes: {
          ...store.valutes,
          buy: {
            ...store.valutes.buy,
            valute: payload,
          },
        },
      }));
    },
    setBuyValue: (payload) => {
      setStore((store) => ({
        valutes: {
          ...store.valutes,
          buy: {
            ...store.valutes.buy,
            value: payload,
          },
        },
      }));
    },
    setBurnToken: (payload) => {
      setStore({
        burnToken: payload,
      });
    },
    setPriceImpact: (payload) => {
      setStore({
        priceImpact: payload,
      });
    },
    setTakeProfit: (payload) => {
      setStore((store) => ({
        advanced: {
          ...store.advanced,
          takeProfit: payload,
        },
      }));
    },
    setStopLoss: (payload) => {
      setStore((store) => ({
        advanced: {
          ...store.advanced,
          stopLoss: payload,
        },
      }));
    },
    setTrailingSL: (payload) => {
      setStore((store) => ({
        advanced: {
          ...store.advanced,
          trailingSL: payload,
        },
      }));
    },
    setIsCustomTokenVisible: (payload) => {
      setStore((store) => ({
        customToken: {
          ...store.customToken,
          visible: payload,
        },
      }));
    },
    setCustomTokenValue: (payload) => {
      setStore((store) => ({
        customToken: {
          ...store.customToken,
          value: payload,
        },
      }));
    },
    setIsCustomTokenInvalid: (payload) => {
      setStore((store) => ({
        customToken: {
          ...store.customToken,
          invalid: payload,
        },
      }));
    },
    setIsUnderstandChecked: (payload) => {
      setStore((store) => ({
        customToken: {
          ...store.customToken,
          checkbox: payload,
        },
      }));
    },
    setSelectedChain: (payload) => {
      setStore({
        selectedChain: payload,
      });
    },
    setTokenInfo: (payload) => {
      setStore({
        tokenInfo: payload,
      });
    },
    setIsTokenInfoVisible: (payload) => {
      setStore({
        isTokenInfoVisible: payload,
      });
    },
    setLastViewedToken: (payload) => {
      setStore({
        lastViewedToken: payload,
      });
    },
    handleSwapValutes: () => {
      setStore((store) => ({
        valutes: {
          ...store.valutes,
          sell: { ...store.valutes.buy },
          buy: { ...store.valutes.sell },
        },
      }));
    },
    handleAddToken: () => {
      setStore((store) => ({
        customToken: {
          ...store.customToken,
          visible: false,
          checkbox: false,
          value: "",
        },
      }));
    },
  };
};
