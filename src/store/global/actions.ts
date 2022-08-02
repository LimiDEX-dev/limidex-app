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

  // ExchangesRates
  rates: {
    currentPrice: {
      setCurrentPrice: (payload) => {
        setStore((store) => ({
          ...store,
          rates: {
            ...store.rates,
            currentPrice: payload,
          },
        }));
      },
    },
    redDates: {
      setRedDates: (payload) => {
        setStore((store) => ({
          ...store,
          rates: {
            ...store.rates,
            redDates: payload,
          },
        }));
      },
    },
    greenDates: {
      setGreenDates: (payload) => {
        setStore((store) => ({
          ...store,
          rates: {
            ...store.rates,
            greenDates: payload,
          },
        }));
      },
    },
    selectedStep: {
      setSelectedStep: (payload) => {
        setStore((store) => ({
          ...store,
          rates: {
            ...store.rates,
            selectedStep: payload,
          },
        }));
      },
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
  orders: {
    activeOrders: {
      setActiveOrders: (payload) => {
        setStore((store) => ({
          ...store,
          orders: {
            ...store.orders,
            activeOrders: payload,
          },
        }));
      },
      deleteActiveOrder: (payload) => {
        setStore((store) => ({
          ...store,
          orders: {
            ...store.orders,
            activeOrders: [
              ...store.orders.activeOrders.slice(0, payload),
              ...store.orders.activeOrders.slice(payload + 1),
            ],
          },
        }));
      },
    },
    historyOrders: {
      setHistoryOrders: (payload) => {
        setStore((store) => ({
          ...store,
          historyOrders: {
            ...store.orders,
            historyOrders: payload,
          },
        }));
      },
    },
    crossOrders: {
      setCrossOrders: (payload) => {
        setStore((store) => ({
          ...store,
          crossOrders: {
            ...store.orders,
            crossOrders: payload,
          },
        }));
      },
    },
  },
});
