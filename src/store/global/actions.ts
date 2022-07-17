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
});
