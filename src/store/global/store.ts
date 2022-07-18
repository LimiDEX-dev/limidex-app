import { StoreObject } from "./types";
import { chains as mockChains } from "../../lib/mock/valutes";
import { mockData } from "../../lib/mock/rates";
import { stepOptions } from "../../lib/mock/stepoptions";

export const initialStore: StoreObject = {
  notifications: [],
  user: {
    transactionsPending: 0,
  },
  chains: mockChains,
  selectedChain: mockChains[0],
  isSettingsOpened: {isSettingsOpened: false},
  slippageTolerance: {slippageTolerance: "0.5"},
  isOpened: {
    isOpened: false,
  },
  currentPrice: mockData.currentPrice,
  redDates: mockData.redRates,
  greenDates: mockData.greenRates,
  selectedStep: stepOptions[0],
};
