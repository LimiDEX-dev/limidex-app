import { StoreObject } from "./types";
import { chains as mockChains } from "../../lib/mock/valutes";

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
};
