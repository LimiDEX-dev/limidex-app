import { StoreObject } from "./types";

export const initialStore: StoreObject = {
  selectedCard: null,
  stateToken: "10",
  lpTokens: "0",
  withdraw: {
    lpTokens: "0",
    tokensInMoney: "0",
    tokensReturned: "0",
  },
};
