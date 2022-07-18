import { DropdownItem } from "src/components/Dropdown";
import { Notification } from "../../types/notification";
import { SelectedChain } from "../../types/selectedchain";
import { Rate } from "../../types/rate";
import { StepOption } from "../../types/stepoption";

export type NotificationStore = Notification[];
export type ChainsStore = DropdownItem[];
export type SelectedChainStore = SelectedChain;
export type CurrentPriceStore = Rate;
export type RedDatesStore = Rate[];
export type GreenDatesStore = Rate[];
export type SelectedStepStore = StepOption;

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

export interface IsOpenedStore {
  isOpened: boolean;
}

export interface IsOpenedActions {
  setIsOpened: (isOpened: boolean) => void;
}

// ExchangesRates
export interface CurrentPriceActions {
  setCurrentPrice: (currentPrice: Rate) => void;
}

export interface GreenDatesActions {
  setGreenDates: (greenDates: Rate[]) => void;
}

export interface RedDatesActions {
  setRedDates: (redDates: Rate[]) => void;
}

export interface SelectedStepActions {
  setSelectedStep: (selectedStep: StepOption) => void;
}

export interface ActionsObject {
  notifications: NotificationActions;
  user: UserActions;
  selectedChain: SelectedChainActions;
  isSettingsOpened: IsSettingsOpenedActions;
  slippageTolerance: SlippageToleranceActions;
  isOpened: IsOpenedActions;
  currentPrice: CurrentPriceActions;
  redDates: RedDatesActions;
  greenDates: GreenDatesActions;
  selectedStep: SelectedStepActions;
}

export interface StoreObject {
  notifications: NotificationStore;
  user: UserStore;
  chains: ChainsStore;
  selectedChain: SelectedChainStore;
  isSettingsOpened: IsSettingsOpenedStore;
  slippageTolerance: SlippageToleranceStore;
  isOpened: IsOpenedStore;
  currentPrice: CurrentPriceStore;
  redDates: RedDatesStore;
  greenDates: GreenDatesStore;
  selectedStep: SelectedStepStore;
}
