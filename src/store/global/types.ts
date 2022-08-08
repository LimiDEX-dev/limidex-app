import { Notification } from "../../types/notification";
import { Chain } from "../../types/chains";
import { Rate } from "../../types/rate";
import { Chart } from "../../types/chart";
import { ActiveOrder, HistoryOrder, CrossOrder } from "../../types/orders";
import { DropdownItem } from "../../components/atoms";
import { WalletItem } from "../../types/portfolio";

type NotificationStore = Notification[];

interface NotificationActions {
  createNotification: (notification: Notification) => void;
  deleteNotification: (index: number) => void;
}

type ChainsStore = {
  data: Chain[];
  selectedChain: Chain;
};

interface ChainsActions {
  setSelectedChain: (selectedChain: Chain) => void;
}

type CurrentPriceStore = Rate;

interface CurrentPriceActions {
  setCurrentPrice: (currentPrice: Rate) => void;
}

type RedDatesStore = Rate[];

interface RedDatesActions {
  setRedDates: (redDates: Rate[]) => void;
}

type GreenDatesStore = Rate[];

interface GreenDatesActions {
  setGreenDates: (greenDates: Rate[]) => void;
}

type SelectedStepStore = DropdownItem;

interface SelectedStepActions {
  setSelectedStep: (selectedStep: DropdownItem) => void;
}

type ChartStore = Chart;

interface ChartActions {
  setChart: (chart: Chart) => void;
}

type ActiveOrdersStore = ActiveOrder[];

interface ActiveOrdersActions {
  setActiveOrders: (activeOrders: ActiveOrder[]) => void;
  deleteActiveOrder: (index: number) => void;
}

type HistoryOrdersStore = HistoryOrder[];

interface HistoryOrdersActions {
  setHistoryOrders: (historyOrders: HistoryOrder[]) => void;
}

type CrossOrdersStore = CrossOrder[];

interface CrossOrdersActions {
  setCrossOrders: (crossOrders: CrossOrder[]) => void;
}

interface PortfolioStore {
  wallet: {
    data: WalletItem[];
    page: number;
    pagesCount: number;
  };
}

interface PortfolioActions {
  wallet: {
    setData: (data: WalletItem[]) => void;
    setPage: (page: number) => void;
    setPagesCount: (pages: number) => void;
  };
}

interface UserStore {
  transactionsPending: number;
  balance: number;
}

interface UserActions {
  setTransactionsPending: (count: number) => void;
  setBalance: (balance: number) => void;
}

interface WithdrawObject {
  lpTokens: string;
  tokensReturned: string;
  tokensInMoney: string;
}

interface VeSPLXStore {
  lockPeriod: DropdownItem;
  lockSPLX: string;
  withdraw: WithdrawObject;
}

interface VeSPLXActions {
  setLockPeriod: (lockPeriod: DropdownItem) => void;
  setLockSPLX: (value: string) => void;
  setWithdraw: (payload: Partial<WithdrawObject>) => void;
}

interface StakingSelectedCard {
  title: string;
  roi: string;
  lp: string;
  currency: string;
}

interface StakingStore {
  selectedCard: null | StakingSelectedCard;
  stateToken: string;
  lpTokens: string;
  withdraw: WithdrawObject;
}

interface StakingActions {
  setSelectedCard: (payload: null | StakingSelectedCard) => void;
  setStateToken: (payload: string) => void;
  setLpTokens: (payload: string) => void;
  setWithdraw: (payload: Partial<WithdrawObject>) => void;
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
  veSPLX: VeSPLXActions;
  staking: StakingActions;
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
  veSPLX: VeSPLXStore;
  staking: StakingStore;
}
