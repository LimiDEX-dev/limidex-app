import { Notification } from "../../types/notification";
import { Chain } from "../../types/chains";
import { Rate } from "../../types/rate";
import { Chart } from "../../types/chart";
import { ActiveOrder, HistoryOrder, CrossOrder } from "../../types/orders";
import { DropdownItem } from "../../components/atoms";
import { WalletItem } from "../../types/portfolio";

export type NotificationStore = Notification[];

export interface NotificationActions {
  createNotification: (notification: Notification) => void;
  deleteNotification: (index: number) => void;
}

export type ChainsStore = {
  data: Chain[];
  selectedChain: Chain;
};

export interface ChainsActions {
  setSelectedChain: (selectedChain: Chain) => void;
}

export type CurrentPriceStore = Rate;

export interface CurrentPriceActions {
  setCurrentPrice: (currentPrice: Rate) => void;
}

export type RedDatesStore = Rate[];

export interface RedDatesActions {
  setRedDates: (redDates: Rate[]) => void;
}

export type GreenDatesStore = Rate[];

export interface GreenDatesActions {
  setGreenDates: (greenDates: Rate[]) => void;
}

export type SelectedStepStore = DropdownItem;

export interface SelectedStepActions {
  setSelectedStep: (selectedStep: DropdownItem) => void;
}

export type ChartStore = Chart;

export interface ChartActions {
  setChart: (chart: Chart) => void;
}

export type ActiveOrdersStore = ActiveOrder[];

export interface ActiveOrdersActions {
  setActiveOrders: (activeOrders: ActiveOrder[]) => void;
  deleteActiveOrder: (index: number) => void;
}

export type HistoryOrdersStore = HistoryOrder[];

export interface HistoryOrdersActions {
  setHistoryOrders: (historyOrders: HistoryOrder[]) => void;
}

export type CrossOrdersStore = CrossOrder[];

export interface CrossOrdersActions {
  setCrossOrders: (crossOrders: CrossOrder[]) => void;
}

export interface PortfolioStore {
  wallet: {
    data: WalletItem[];
    page: number;
    pagesCount: number;
  };
}

export interface PortfolioActions {
  wallet: {
    setData: (data: WalletItem[]) => void;
    setPage: (page: number) => void;
    setPagesCount: (pages: number) => void;
  };
}

export interface UserStore {
  transactionsPending: number;
}

export interface UserActions {
  setTransactionsPending: (count: number) => void;
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
  portfolio: PortfolioActions;
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
  portfolio: PortfolioStore;
}
