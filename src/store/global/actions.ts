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
  selectedChain: {
    setSelectedChain: (payload) => {
      setStore((store) => ({
        ...store,
        selectedChain: {
          ...store.selectedChain,
          transactionsPending: payload,
        },
      }));
    },
  },
  isSettingsOpened: {
    setIsSettingsOpened: (payload) => {
      setStore((store) => ({
        ...store,
        isSettingsOpened: {
          ...store.isSettingsOpened,
          isSettingsOpened: payload,
        },
      }));
    },
  },
  slippageTolerance: {
    setSlippageTolerance: (payload) => {
      setStore((store) => ({
        ...store,
        slippageTolerance: {
          ...store.slippageTolerance,
          slippageTolerance: payload,
        },
      }));
    },
  },
  isOpened: {
    setIsOpened: (payload) => {
      setStore((store) => ({
        ...store,
        isOpened: {
          ...store.isOpened,
          transactionsPending: !payload,
        },
      }));
    },
  },

  // ExchangesRates
  currentPrice: {
    setCurrentPrice: (payload) => {
      setStore((store) => ({
        ...store,
        currentPrice: {
          ...store.currentPrice,
          currentPrice: payload,
        },
      }));
    },
  },
  redDates: {
    setRedDates: (payload) => {
      setStore((store) => ({
        ...store,
        redDates: {
          ...store.redDates,
          redDates: payload,
        },
      }));
    },
  },
  greenDates: {
    setGreenDates: (payload) => {
      setStore((store) => ({
        ...store,
        greenDates: {
          ...store.greenDates,
          greenDates: payload,
        },
      }));
    },    
  },
  selectedStep: {
    setSelectedStep: (payload) => {
      setStore((store) => ({
        ...store,
        selectedStep: {
          ...store.selectedStep,
          selectedStep: payload,
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
  activeOrders: {
    setActiveOrders: (payload) => {
      setStore((store) => ({
        ...store,
        activeOrders: {
          ...store.activeOrders,
          activeOrders: payload,
        },
      }));
    }, 
    deleteActiveOrder: (payload) => {
      setStore((store) => ({
        ...store,
        activeOrders: [
          ...store.activeOrders.slice(0, payload),
          ...store.activeOrders.slice(payload + 1),
        ],
      }));
    },
  },
  historyOrders: {
    setHistoryOrders: (payload) => {
      setStore((store) => ({
        ...store,
        historyOrders: {
          ...store.historyOrders,
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
          ...store.crossOrders,
          crossOrders: payload,
        },
      }));
    }, 
  },
});
