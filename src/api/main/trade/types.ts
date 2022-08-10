import { AxiosResponse } from "axios";

export interface JsonRpcResponse<T>
  extends AxiosResponse<{
    id: string;
    jsonrpc: string;
    result: T;
  }> {}

export interface GetOutParams {
  fromToken: string;
  toToken: string;
  volume: string;
  slippage?: number;
  router?: string;
}

export interface GetOutResponse {
  amountOut: string;
}

export interface SwapSubmitParams {
  fromToken: string;
  toToken: string;
  volume: string;
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
  stopLossOrderID?: string;
  takeProfitOrderID?: string;
}

export interface CrossGetOutParams {
  fromToken: string;
  toToken: string;
  volume: string;
  destChain: number;
  slippage?: number;
}

export interface CrossGetOutResponse {
  amountOut: string;
  connectorToken: string;
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
