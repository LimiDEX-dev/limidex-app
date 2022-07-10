import { StoreObject } from "./types";

export const initialStore: StoreObject = {
  notifications: [],
  user: {
    transactionsPending: 0,
  },
};
