import { Dispatch, SetStateAction } from "react";
import { ActionsObject, StoreObject } from "./types";

export const provideActions = (
  setStore: Dispatch<SetStateAction<StoreObject>>,
): ActionsObject => ({
  setRewards: (payload) => {
    setStore((store) => ({
      ...store,
      rewards: payload,
    }));
  },
});
