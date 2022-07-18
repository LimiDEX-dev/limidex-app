import { Dispatch, SetStateAction } from "react";
import { ActionsObject, StoreObject } from "./types";
import { providePlaceOrderActions } from "./placeOrder";

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
  placeOrder: { ...providePlaceOrderActions(setStore) },
});
