import { Notification } from "../../types/notification";
import { Chain } from "../../types/chains";
import { Chart } from "../../types/chart";
import { Token } from "../../api/1inch/tokens/types";

export interface WithdrawObject {
  lpTokens: string;
  tokensReturned: string;
  tokensInMoney: string;
}

type NotificationStore = Notification[];

interface NotificationActions {
  createNotification: (notification: Notification) => void;
  deleteNotification: (index: number) => void;
}

type ChainsStore = {
  data: Chain[];
  selectedChain: Chain | null;
};

interface ChainsActions {
  setSelectedChain: (selectedChain: Chain) => void;
}

type ChartStore = Chart;

interface ChartActions {
  setChart: (chart: Chart) => void;
}

interface UserStore {
  transactionsPending: number;
  balance: number;
  isStablePoolPreferably: boolean;
  slippageTolerance: string;
}

interface UserActions {
  setTransactionsPending: (count: number) => void;
  setBalance: (balance: number) => void;
  setIsStablePoolPreferably: (payload: boolean) => void;
  setSlippageTolerance: (payload: string) => void;
}

interface TokensActions {
  setTokens: (tokens: Token[]) => void;
}

export interface ActionsObject {
  notifications: NotificationActions;
  user: UserActions;
  chains: ChainsActions;
  chart: ChartActions;
  tokens: TokensActions;
}

export interface StoreObject {
  notifications: NotificationStore;
  user: UserStore;
  chains: ChainsStore;
  chart: ChartStore;
  tokens: Token[];
}
