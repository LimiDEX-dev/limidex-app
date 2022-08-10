import { StoreObject } from "./types";

export const initialStore: StoreObject = {
  ui: {
    mobileTab: "chart",
    orderTab: "swap",
    isExpertMode: false,
    activeBuyTab: "buy",
  },
  convert: {
    sell: {
      selectedSell: null,
      toSell: "10",
    },
    buy: {
      selectedBuy: null,
      toBuy: "10",
    },
  },
  settings: {
    burnToken: "100",
    priceImpact: "422.77",
    route: "self",
    trade: null,
    destinationChain: null,
  },
  addCustomToken: {
    isAddCustomTokenVisible: false,
    customToken: "",
    isAddressValid: true,
    isUnderstandChecked: false,
    tokenInfo: null,
    isTokenInfoVisible: false,
    lastViewedToken: "",
  },
  advanced: {
    isAdvancedOpened: false,
    takeProfit: "0.1",
    stopLoss: "0.1",
    trailingSL: "0.1",
  },
};
