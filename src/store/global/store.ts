import { StoreObject } from "./types";

import { chains as mockChains } from "../../lib/mock/valutes";
import { chart as mockChart } from "../../lib/mock/chart";

export const initialStore: StoreObject = {
  notifications: [],
  user: {
    transactionsPending: 0,
    balance: 12,
    isStablePoolPreferably: false,
    slippageTolerance: "0.3",
  },
  chains: {
    data: mockChains,
    selectedChain: null,
  },
  chart: mockChart,
  tokens: [],
};
