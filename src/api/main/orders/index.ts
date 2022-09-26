import { axios } from "../base";
import { JsonRpcResponse } from "../types";

import {
  GetCrossOrdersByPageParams,
  GetCrossOrdersByPageResponse,
  GetLimitOrdersByPageParams,
  GetLimitOrdersByPageResponse,
  GetPagesParams,
  RemoveLimitOrderParams,
} from "./types";
import { urls } from "./urls";

export const removeLimitOrder = (
  params: RemoveLimitOrderParams,
): Promise<JsonRpcResponse<boolean>> =>
  axios.post("", {
    method: urls.removeLimitOrder,
    params,
  });

export const getLimitOrdersPages = (
  params: GetPagesParams,
): Promise<JsonRpcResponse<number>> =>
  axios.post("", {
    method: urls.limitOrdersPages,
    params,
  });

export const getLimitOrdersByPage = (
  params: GetLimitOrdersByPageParams,
): Promise<JsonRpcResponse<GetLimitOrdersByPageResponse>> =>
  axios.post("", {
    method: urls.limitOrdersPages,
    params,
  });

export const getCrossOrdersPages = (
  params: GetPagesParams,
): Promise<JsonRpcResponse<number>> =>
  axios.post("", {
    method: urls.crossOrdersPages,
    params,
  });

export const getCrossOrdersByPage = (
  params: GetCrossOrdersByPageParams,
): Promise<JsonRpcResponse<GetCrossOrdersByPageResponse>> =>
  axios.post("", {
    method: urls.limitOrdersPages,
    params,
  });
