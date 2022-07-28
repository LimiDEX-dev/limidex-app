import { Notification } from "../../types/notification";
import { Chain } from "../../types/chains";
import { Rate } from "../../types/rate";
import { Chart } from "../../types/chart";
import { ActiveOrder, HistoryOrder, CrossOrder } from "../../types/orders";
import { DropdownItem } from "../../components/atoms";

export type NotificationStore = Notification[];

export type ChainsStore = {
  data: Chain[];
  selectedChain: Chain;
};

export type CurrentPriceStore = Rate;

export type RedDatesStore = Rate[];

export type GreenDatesStore = Rate[];

export type SelectedStepStore = DropdownItem;

export type ChartStore = Chart;

export type ActiveOrdersStore = ActiveOrder[];

export type HistoryOrdersStore = HistoryOrder[];

export type CrossOrdersStore = CrossOrder[];

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

export interface ChainsActions {
  setSelectedChain: (selectedChain: Chain) => void;
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
  setSelectedStep: (selectedStep: DropdownItem) => void;
}

// Chart
export interface ChartActions {
  setChart: (chart: Chart) => void;
}

// Orders
export interface ActiveOrdersActions {
  setActiveOrders: (activeOrders: ActiveOrder[]) => void;
  deleteActiveOrder: (index: number) => void;
}

export interface HistoryOrdersActions {
  setHistoryOrders: (historyOrders: HistoryOrder[]) => void;
}

export interface CrossOrdersActions {
  setCrossOrders: (crossOrders: CrossOrder[]) => void;
}

export interface ActionsObject {
  notifications: NotificationActions;
  user: UserActions;
  chains: ChainsActions;
  rates: {
    currentPrice: CurrentPriceActions;
    redDates: RedDatesActions;
    greenDates: GreenDatesActions;
    selectedStep: SelectedStepActions;
  };
  chart: ChartActions;
  orders: {
    activeOrders: ActiveOrdersActions;
    historyOrders: HistoryOrdersActions;
    crossOrders: CrossOrdersActions;
  };
}

export interface StoreObject {
  notifications: NotificationStore;
  user: UserStore;
  chains: ChainsStore;
  rates: {
    currentPrice: CurrentPriceStore;
    redRates: RedDatesStore;
    greenRates: GreenDatesStore;
    selectedStep: SelectedStepStore;
  };
  chart: ChartStore;
  orders: {
    activeOrders: ActiveOrdersStore;
    historyOrders: HistoryOrdersStore;
    crossOrders: CrossOrdersStore;
  };
}
