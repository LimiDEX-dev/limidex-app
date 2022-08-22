import { Dispatch, SetStateAction } from "react";
import { StoreObject } from "./types";

export const provideActions = (
  setStore: Dispatch<SetStateAction<StoreObject>>,
) => ({
  wallet: {
    setData: (payload) => {
      setStore((store) => ({
        ...store,
        wallet: {
          ...store.wallet,
          data: payload,
        },
      }));
    },
    setPage: (payload) => {
      setStore((store) => ({
        ...store,
        wallet: {
          ...store.wallet,
          page: payload,
        },
      }));
    },
    setPagesCount: (payload) => {
      setStore((store) => ({
        ...store,
        wallet: {
          ...store.wallet,
          pagesCount: payload,
        },
      }));
    },
  },
});
