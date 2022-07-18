import { StoreObject } from "./types";
import { placeOrderStore } from "./placeOrder";

export const initialStore: StoreObject = {
  notifications: [],
  user: {
    transactionsPending: 0,
  },
  placeOrder: { ...placeOrderStore },
};
