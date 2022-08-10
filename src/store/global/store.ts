import { StoreObject } from "./types";

import { chains as mockChains } from "../../lib/mock/valutes";
import { mockData } from "../../lib/mock/rates";
import { stepOptions } from "../../lib/mock/stepoptions";
import { chart as mockChart } from "../../lib/mock/chart";
import { orders } from "../../lib/mock/orders";
import { lockPeriodes } from "../../pages/LMX";

export const initialStore: StoreObject = {
  notifications: [],
  user: {
    transactionsPending: 0,
    balance: 12,
  },
  chains: {
    data: mockChains,
    selectedChain: null,
  },
  rates: {
    currentPrice: mockData.currentPrice,
    redRates: mockData.redRates,
    greenRates: mockData.greenRates,
    selectedStep: stepOptions[0],
  },
  chart: mockChart,
  orders: {
    activeOrders: orders.active,
    historyOrders: orders.history,
    crossOrders: orders.cross,
  },
  portfolio: {
    wallet: {
      data: [],
      page: 1,
      pagesCount: 1,
    },
  },
  veSPLX: {
    lockPeriod: lockPeriodes[0],
    lockSPLX: "10",
    withdraw: {
      lpTokens: "0",
      tokensInMoney: "0",
      tokensReturned: "0",
    },
  },
  staking: {
    selectedCard: null,
    stateToken: "10",
    lpTokens: "0",
    withdraw: {
      lpTokens: "0",
      tokensInMoney: "0",
      tokensReturned: "0",
    },
  },
  tokens: [],
};
