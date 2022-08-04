import { StoreObject } from "./types";
import { chains as mockChains } from "../../lib/mock/valutes";
import { mockData } from "../../lib/mock/rates";
import { stepOptions } from "../../lib/mock/stepoptions";
import { chart as mockChart } from "../../lib/mock/chart";
import { orders } from "../../lib/mock/orders";

export const initialStore: StoreObject = {
  notifications: [],
  user: {
    transactionsPending: 0,
  },
  chains: {
    data: mockChains,
    selectedChain: mockChains[0],
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
};
