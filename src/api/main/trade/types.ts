import { BigNumber } from "ethers";
import { OrderBookItem } from "../../../types/orderBook";

export interface GetOutParams {
  fromToken: string;
  toToken: string;
  volume: BigNumber;
  slippage?: number;
  router?: string;
}

export interface GetOutResponse {
  amountOut: string;
}

export interface SwapSubmitParams {
  fromToken: string;
  toToken: string;
  volume: BigNumber;
  traderSig: string;
  trader: string;
  slippage?: number;
  router?: string;
  burnAmount?: number;
  useStableReward?: boolean;
  partner?: string;
  takeProfit?: string;
  stopLoss?: string;
  trailingStopLoss?: string;
}

export interface SwapSubmitResponse {
  txHash: string;
}

export interface SwapLimitResponse {
  orderID: string;
}

export interface CrossGetOutParams {
  fromToken: string;
  toToken: string;
  volume: BigNumber;
  destChain: number;
  slippage?: number;
}

export interface CrossGetOutResponse {
  amountOut: string;
}

export interface CrossSwapSubmitParams
  extends Omit<
    SwapSubmitParams,
    "takeProfit" | "stopLoss" | "trailingStopLoss"
  > {}

export interface CrossSwapSubmitResponse {
  txHash: string;
  orderID: string;
}

export type CheckTokensParams = Array<string>;

export type CheckTokensResponse = Record<string, boolean>;

export interface GetTokenPriceParams {
  token: string;
  currencyToken?: string;
  priceBlockNumber?: number;
  router?: string;
}

export interface GetTokenPriceResponse {
  price: number;
  isUSD: boolean;
}

export interface GetOrderBookParams {
  fromToken: string;
  toToken: string;
  delta: number;
  size: number;
}

export type GetOrderBookResponse = OrderBookItem[];
