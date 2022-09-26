import { StoreObject } from "./types";
import { mockData } from "../../../lib/mock/rates";
import { orders } from "../../../lib/mock/orders";
import { chart } from "../../../lib/mock/chart";

export const stepOptions = [
  {
    label: "$",
    value: "1 ",
  },
  {
    label: "$",
    value: "5 ",
  },
  {
    label: "$",
    value: "10",
  },
  {
    label: "$",
    value: "50",
  },
];

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
      toSell: "0",
      toSellUSD: 0,
    },
    buy: {
      selectedBuy: null,
      toBuy: "0",
      toBuyUSD: 0,
    },
  },
  settings: {
    burnToken: "100",
    priceImpact: "422.77",
    route: 0,
    trade: null,
    destinationChain: null,
  },
  addCustomToken: {
    isAddCustomTokenVisible: false,
    customToken: "",
    isAddressValid: false,
    isUnderstandChecked: false,
    tokenInfo: null,
    isTokenInfoVisible: false,
    lastViewedToken: "",
    isTokenValid: false,
  },
  advanced: {
    isAdvancedOpened: false,
    takeProfit: "0.1",
    stopLoss: "0.1",
    trailingSL: "0.1",
  },
  rates: {
    currentPrice: mockData.currentPrice,
    redRates: mockData.redRates,
    greenRates: mockData.greenRates,
    selectedStep: stepOptions[0],
  },
  orders: {
    activeOrders: {
      data: [],
      pagesCount: 0,
    },
    historyOrders: {
      data: [],
      pagesCount: 0,
    },
    crossOrders: {
      data: [],
      pagesCount: 0,
    },
    currentPage: 1,
    currentType: "active",
  },
  chart,
};
