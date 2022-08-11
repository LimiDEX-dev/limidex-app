import { axios } from "../base";

import { urls } from "./urls";
import {
  CheckTokensParams,
  CheckTokensResponse,
  CrossGetOutParams,
  CrossGetOutResponse,
  CrossSwapSubmitParams,
  CrossSwapSubmitResponse,
  GetOutParams,
  GetOutResponse,
  GetTokenPriceParams,
  GetTokenPriceResponse,
  JsonRpcResponse,
  SwapSubmitParams,
  SwapSubmitResponse,
} from "./types";

export const getReceiveSumInWei = async (
  params: GetOutParams,
): Promise<JsonRpcResponse<GetOutResponse>> =>
  axios.post("", {
    method: urls.getOut,
    params: [{ ...params }],
  });

export const handleSubmitSwap = async (
  params: SwapSubmitParams,
): Promise<JsonRpcResponse<SwapSubmitResponse>> =>
  axios.post("", {
    method: urls.swap,
    params: [{ ...params }],
  });

export const handleSubmitLimitSwap = async (
  params: SwapSubmitParams,
): Promise<JsonRpcResponse<SwapSubmitResponse>> =>
  axios.post("", {
    method: urls.limitSwap,
    params: [{ ...params }],
  });

export const getReceiveSumInWeiCross = async (
  params: CrossGetOutParams,
): Promise<JsonRpcResponse<CrossGetOutResponse>> =>
  axios.post("", {
    method: urls.crossGetOut,
    params: [{ ...params }],
  });

export const handleSubmitCrossSwap = async (
  params: CrossSwapSubmitParams,
): Promise<JsonRpcResponse<CrossSwapSubmitResponse>> =>
  axios.post("", {
    method: urls.crossSwap,
    params: [{ ...params }],
  });

export const getIsStablePoolPreferably = async (): Promise<
  JsonRpcResponse<boolean>
> =>
  axios.post("", {
    method: urls.stableReward,
    params: [],
  });

export const handleCheckTokens = async (
  params: CheckTokensParams,
): Promise<JsonRpcResponse<CheckTokensResponse>> =>
  axios.post("", {
    method: urls.checkTokens,
    params,
  });

export const getTokenPrice = async (
  params: GetTokenPriceParams,
): Promise<JsonRpcResponse<GetTokenPriceResponse>> =>
  axios.post("", {
    method: urls.tokenPrice,
    params: [{ ...params }],
  });
