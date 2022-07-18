import { DropdownItem } from "../../../components/Dropdown";
import { Coin } from "../../../components/CoinDescription";

export interface PlaceOrderObject {
  valutes: {
    sell: {
      valute: DropdownItem;
      value: string;
    };
    buy: {
      valute: DropdownItem;
      value: string;
    };
  };
  advanced: {
    takeProfit: string;
    stopLoss: string;
    trailingSL: string;
  };
  customToken: {
    visible: boolean;
    value: string;
    invalid: boolean;
    checkbox: boolean;
  };
  burnToken: string;
  priceImpact: string;
  selectedChain: DropdownItem;
  tokenInfo: Coin | null;
  isTokenInfoVisible: boolean;
  lastViewedToken: string;
}

export interface PlaceOrderActions {
  setSellValute: (item: DropdownItem) => void;
  setSellValue: (value: string) => void;
  setBuyValute: (item: DropdownItem) => void;
  setBuyValue: (value: string) => void;
  setBurnToken: (value: string) => void;
  setPriceImpact: (value: string) => void;
  setTakeProfit: (value: string) => void;
  setStopLoss: (value: string) => void;
  setTrailingSL: (value: string) => void;
  setIsCustomTokenVisible: (value: boolean) => void;
  setCustomTokenValue: (value: string) => void;
  setIsCustomTokenInvalid: (value: boolean) => void;
  setIsUnderstandChecked: (value: boolean) => void;
  setSelectedChain: (item: DropdownItem) => void;
  setTokenInfo: (value: Coin | null) => void;
  setIsTokenInfoVisible: (value: boolean) => void;
  setLastViewedToken: (value: string) => void;
  handleSwapValutes: () => void;
  handleAddToken: () => void;
}
