import { Dispatch, SetStateAction } from "react";
import { ActionsObject, StoreObject } from "./types";

export const provideActions = (
  setStore: Dispatch<SetStateAction<StoreObject>>,
): ActionsObject => ({
    isOpened: {
      setTransactionsPending: (payload) => {
        setStore((store) => ({
          ...store,
          isOpened: {
            ...store.isOpened,
            transactionsPending: !payload,
          },
        }));
      },
    },
});
