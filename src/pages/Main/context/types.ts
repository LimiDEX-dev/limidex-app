import { DropdownItem } from "../../../components/atoms";
import { Coin } from "../../../components/molecules/CoinDescription";

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
    };
    buy: {
      selectedBuy: DropdownItem | null;
      toBuy: string;
    };
  };
  settings: {
    burnToken: string;
    priceImpact: string;
    route: "self" | "pancakeswap";
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
  };
  advanced: {
    isAdvancedOpened: boolean;
    takeProfit: string;
    stopLoss: string;
    trailingSL: string;
  };
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
    setConvertBuy: (payload: DropdownItem) => void;
    setToBuy: (payload: string) => void;
    handleSwap: () => void;
  };
  settings: {
    setBurnToken: (burnToken: string) => void;
    setPriceImpact: (priceImpact: string) => void;
    setRoute: (route: "self" | "pancakeswap") => void;
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
  };
  advanced: {
    setIsAdvancedOpened: (payload: boolean) => void;
    setTakeProfit: (payload: string) => void;
    setStopLoss: (payload: string) => void;
    setTrailingSL: (payload: string) => void;
  };
}
