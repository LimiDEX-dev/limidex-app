import { axios } from "../base";
import { JsonRpcResponse } from "../types";

import { urls } from "./urls";
import {
  ChangeFollowStatusParams,
  ChangeFollowStatusResponse,
  GetMasterTradersParams,
  GetMasterTradersResult,
} from "./types";

export const changeFollowStatus = async (
  params: ChangeFollowStatusParams,
): Promise<JsonRpcResponse<ChangeFollowStatusResponse>> =>
  axios.post("", {
    method: urls.changeFollowStatus,
    params,
  });

export const getMasterTradersPagesCount = async (): Promise<
  JsonRpcResponse<number>
> =>
  axios.post("", {
    method: urls.masterTradersPages,
  });

export const getMasterTrades = async (
  params: GetMasterTradersParams,
): Promise<JsonRpcResponse<GetMasterTradersResult>> =>
  axios.post("", {
    method: urls.masterTradersByPage,
    params,
  });
