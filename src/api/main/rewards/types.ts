export interface GetRewardBalanceParams {
  user: string;
  allChains?: boolean;
}

export interface ClaimAllRewardsParams {
  traderSig: string;
  trader: string;
}

export interface ClaimAllRewardsResponse {
  "Ethereum-stableReward": string;
  "Ethereum-nativeReward": string;
  "Fantom-nativeReward": string;
}

export interface ClaimRewardParams {
  traderSig: string;
  trader: string;
  token: string;
}

export interface ClaimRewardResponse {
  Ethereum: string;
}

export interface GetArbPoolParams {
  allChains?: boolean;
}

export interface GetArbPoolResponse {
  Ethereum: {
    native: {
      pool: string;
      poolToken: string;
      poolTokenSymbol: string;
    };
    stable: {
      pool: string;
      poolToken: string;
      poolTokenSymbol: string;
    };
  };
}

export interface GetRefAndFollowStatsResponse {
  refsLvl1Count: number;
  refsLvl2Count: number;
  followers: number;
  following: number;
  isMasterTrader: boolean;
}
