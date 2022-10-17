import { axios } from "../base";
import { JsonRpcResponse } from "../types";

import {
  ClaimAllRewardsParams,
  ClaimAllRewardsResponse,
  ClaimRewardParams,
  ClaimRewardResponse,
  GetArbPoolParams,
  GetArbPoolResponse,
  GetRefAndFollowStatsResponse,
  GetRewardBalanceParams,
} from "./types";
import { urls } from "./urls";

export const getRewardBalance = async (params: GetRewardBalanceParams) =>
  axios.post("", {
    method: urls.getRewardBalance,
    params: [{ ...params }],
  });

export const claimAllRewards = async (
  params: ClaimAllRewardsParams,
): Promise<JsonRpcResponse<ClaimAllRewardsResponse>> =>
  axios.post("", {
    method: urls.claimAllRewards,
    params: [{ ...params }],
  });

export const claimReward = async (
  params: ClaimRewardParams,
): Promise<JsonRpcResponse<ClaimRewardResponse>> =>
  axios.post("", {
    method: urls.claimReward,
    params: [{ ...params }],
  });

export const claimAndBridgeAllRewards = async (
  params: ClaimAllRewardsParams,
): Promise<JsonRpcResponse<ClaimAllRewardsResponse>> =>
  axios.post("", {
    method: urls.claimAndBridgeAllRewards,
    params: [{ ...params }],
  });

export const getArbPool = async (
  params: GetArbPoolParams,
): Promise<JsonRpcResponse<GetArbPoolResponse>> =>
  axios.post("", {
    method: urls.getArbPool,
    params: [{ ...params }],
  });

export const getRefAndFollowStats = async (): Promise<
  JsonRpcResponse<GetRefAndFollowStatsResponse>
> =>
  axios.post("", {
    method: urls.refAndFollowStats,
  });
