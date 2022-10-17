import { Dispatch, SetStateAction } from "react";
import { ActionsObject, StoreObject } from "./types";

export const provideActions = (
  setStore: Dispatch<SetStateAction<StoreObject>>,
): ActionsObject => ({
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
  traders: {
    setTraders: (payload) => {
      setStore((store) => ({
        ...store,
        traders: {
          ...store.traders,
          traders: payload,
        },
      }));
    },
    setPagesCount: (payload) => {
      setStore((store) => ({
        ...store,
        traders: {
          ...store.traders,
          pagesCount: payload,
        },
      }));
    },
    setCurrentPage: (payload) => {
      setStore((store) => ({
        ...store,
        traders: {
          ...store.traders,
          currentPage: payload,
        },
      }));
    },
    // TODO TEST LOGIC OF THIS METHOD
    handleChangeFollowStatus: ({ address, isFollow }) => {
      setStore((store) => {
        const masterTraderIndex = store.traders.traders.findIndex(
          (item) => item.masterTrader === address,
        );

        return {
          ...store,
          traders: {
            ...store.traders,
            traders: [
              ...store.traders.traders.slice(0, masterTraderIndex),
              {
                ...store.traders.traders[masterTraderIndex],
                isFollowing: isFollow,
              },
              ...store.traders.traders.slice(masterTraderIndex + 1),
            ],
          },
        };
      });
    },
  },
  setUser: (payload) => {
    setStore((store) => ({
      ...store,
      user: payload,
    }));
  },
});
