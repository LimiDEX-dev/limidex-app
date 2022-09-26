import { DropdownItem } from "../../../components/atoms";
import { Coin } from "../../../components/molecules/CoinDescription";
import { ActiveOrder, CrossOrder, HistoryOrder } from "../../../types/orders";
import { Chart, ChartDataPoint } from "../../../types/chart";

export interface Rate {
  price: string;
  amount: string;
  min: string;
  max: string;
  progress: number;
}

interface ActiveOrdersActions {
  setActiveOrders: (activeOrders: ActiveOrder[]) => void;
  setActiveOrdersPages: (pages: number) => void;
  deleteActiveOrder: (index: number) => void;
}

export interface StoreObject {
  ui: {
    mobileTab: "rates" | "chart";
    orderTab: "limit" | "swap" | "cross";
    isExpertMode: boolean;
    activeBuyTab: "buy" | "sell";
  };
  convert: {
    sell: {
      selectedSell: DropdownItem | null;
      toSell: string;
      toSellUSD: number;
    };
    buy: {
      selectedBuy: DropdownItem | null;
      toBuy: string;
      toBuyUSD: number;
    };
  };
  settings: {
    burnToken: string;
    priceImpact: string;
    route: 0 | 1;
    trade: DropdownItem | null;
    destinationChain: DropdownItem | null;
  };
  addCustomToken: {
    isAddCustomTokenVisible: boolean;
    customToken: string;
    isAddressValid: boolean;
    isUnderstandChecked: boolean;
    tokenInfo: Coin | null;
    isTokenInfoVisible: boolean;
    lastViewedToken: string;
    isTokenValid: boolean;
  };
  advanced: {
    isAdvancedOpened: boolean;
    takeProfit: string;
    stopLoss: string;
    trailingSL: string;
  };
  rates: {
    currentPrice: Rate;
    redRates: Rate[];
    greenRates: Rate[];
    selectedStep: DropdownItem;
  };
  orders: {
    activeOrders: {
      data: ActiveOrder[];
      pagesCount: number;
    };
    historyOrders: {
      data: HistoryOrder[];
      pagesCount: number;
    };
    crossOrders: {
      data: CrossOrder[];
      pagesCount: number;
    };
    currentPage: number;
    currentType: "active" | "history" | "cross";
  };
  chart: Chart;
}

export interface ActionsObject {
  ui: {
    setMobileTab: (tab: "rates" | "chart") => void;
    setOrderTab: (tab: "limit" | "swap" | "cross") => void;
    setIsExpertMode: (payload: boolean) => void;
    setActiveBuyTab: (tab: "buy" | "sell") => void;
  };
  convert: {
    setConvertSell: (payload: DropdownItem) => void;
    setToSell: (payload: string) => void;
    setToSellUSD: (payload: number) => void;
    setConvertBuy: (payload: DropdownItem) => void;
    setToBuy: (payload: string) => void;
    setToBuyUSD: (payload: number) => void;
    handleSwap: () => void;
  };
  settings: {
    setBurnToken: (burnToken: string) => void;
    setPriceImpact: (priceImpact: string) => void;
    setRoute: (route: 0 | 1) => void;
    setTrade: (payload: DropdownItem | null) => void;
    setDestinationChain: (payload: DropdownItem) => void;
  };
  addCustomToken: {
    setIsAddCustomTokenVisible: (payload: boolean) => void;
    setCustomToken: (payload: string) => void;
    setIsAddressValid: (payload: boolean) => void;
    setIsUnderstandChecked: (payload: boolean) => void;
    setTokenInfo: (payload: Coin | null) => void;
    setIsTokenInfoVisible: (payload: boolean) => void;
    setLastViewedToken: (payload: string) => void;
    setIsTokenValid: (payload: boolean) => void;
  };
  advanced: {
    setIsAdvancedOpened: (payload: boolean) => void;
    setTakeProfit: (payload: string) => void;
    setStopLoss: (payload: string) => void;
    setTrailingSL: (payload: string) => void;
  };
  rates: {
    setCurrentPrice: (currentPrice: Rate) => void;
    setRedRates: (redRates: Rate[]) => void;
    setGreenRates: (greenRates: Rate[]) => void;
    setSelectedStep: (selectedStep: DropdownItem) => void;
  };
  orders: {
    activeOrders: ActiveOrdersActions;
    setHistoryOrders: (historyOrders: HistoryOrder[]) => void;
    setHistoryOrdersPages: (pages: number) => void;
    setCrossOrders: (crossOrders: CrossOrder[]) => void;
    setCrossOrdersPages: (pages: number) => void;
    setCurrentPage: (page: number) => void;
    setCurrentType: (type: "active" | "history" | "cross") => void;
  };
  chart: {
    setChart: (data: ChartDataPoint[]) => void;
  };
}
