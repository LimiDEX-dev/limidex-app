import { PlaceOrderObject } from "./types";
import { chains, valutes } from "../../../lib/mock/valutes";

export const placeOrderStore: PlaceOrderObject = {
  valutes: {
    sell: {
      valute: valutes[0],
      value: "10.00",
    },
    buy: {
      valute: valutes[1],
      value: "10.00",
    },
  },
  advanced: {
    takeProfit: "0.1",
    stopLoss: "0.1",
    trailingSL: "0.1",
  },
  customToken: {
    visible: false,
    value: "",
    invalid: false,
    checkbox: false,
  },
  burnToken: "100.00",
  priceImpact: "422.77",
  selectedChain: chains[0],
  tokenInfo: null,
  isTokenInfoVisible: false,
  lastViewedToken: "",
};
