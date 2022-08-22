import { Dispatch, SetStateAction } from "react";
import { ActionsObject, StoreObject } from "./types";

export const provideActions = (
  setStore: Dispatch<SetStateAction<StoreObject>>,
): ActionsObject => ({
  notifications: {
    createNotification: (payload) => {
      setStore((store) => ({
        ...store,
        notifications: [
          ...store.notifications,
          { ...payload, timeout: payload.timeout ?? 5000 },
        ],
      }));
    },
    deleteNotification: (payload) => {
      setStore((store) => ({
        ...store,
        notifications: [
          ...store.notifications.slice(0, payload),
          ...store.notifications.slice(payload + 1),
        ],
      }));
    },
  },
  user: {
    setTransactionsPending: (payload) => {
      setStore((store) => ({
        ...store,
        user: {
          ...store.user,
          transactionsPending: payload,
        },
      }));
    },
    setBalance: (payload) => {
      setStore((store) => ({
        ...store,
        user: {
          ...store.user,
          balance: payload,
        },
      }));
    },
    setIsStablePoolPreferably: (payload) => {
      setStore((store) => ({
        ...store,
        user: {
          ...store.user,
          isStablePoolPreferably: payload,
        },
      }));
    },
    setSlippageTolerance: (payload) => {
      setStore((store) => ({
        ...store,
        user: {
          ...store.user,
          slippageTolerance: payload,
        },
      }));
    },
  },
  chains: {
    setSelectedChain: (payload) => {
      setStore((store) => ({
        ...store,
        chains: {
          ...store.chains,
          selectedChain: payload,
        },
      }));
    },
  },
  chart: {
    setChart: (payload) => {
      setStore((store) => ({
        ...store,
        chart: {
          ...store.chart,
          chart: payload,
        },
      }));
    },
  },
  tokens: {
    setTokens: (payload) => {
      setStore((store) => ({
        ...store,
        tokens: payload,
      }));
    },
  },
});
