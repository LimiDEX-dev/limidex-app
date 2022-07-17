import { DropdownItem } from "src/components/Dropdown";
import { Notification } from "../../types/notification";
import { SelectedChain } from "../../types/selectedchain";

export type NotificationStore = Notification[];
export type ChainsStore = DropdownItem[];
export type SelectedChainStore = SelectedChain;

export interface NotificationActions {
  createNotification: (notification: Notification) => void;
  deleteNotification: (index: number) => void;
}

export interface UserStore {
  transactionsPending: number;
}

export interface UserActions {
  setTransactionsPending: (count: number) => void;
}

export interface IsSettingsOpenedStore {
  isSettingsOpened: boolean;
}

export interface IsSettingsOpenedActions {
  setIsSettingsOpened: (count: boolean) => void;
}

export interface SelectedChainActions {
  setSelectedChain: (selectedChain: SelectedChain) => void;
}

export interface SlippageToleranceStore {
  slippageTolerance: string;
}

export interface SlippageToleranceActions {
  setSlippageTolerance: (count: string) => void;
}

export interface ActionsObject {
  notifications: NotificationActions;
  user: UserActions;
  selectedChain: SelectedChainActions;
  isSettingsOpened: IsSettingsOpenedActions;
  slippageTolerance: SlippageToleranceActions;
}

export interface StoreObject {
  notifications: NotificationStore;
  user: UserStore;
  chains: ChainsStore;
  selectedChain: SelectedChainStore;
  isSettingsOpened: IsSettingsOpenedStore;
  slippageTolerance: SlippageToleranceStore;
}
