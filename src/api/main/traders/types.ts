import { Trader } from "../../../types/traders";

export interface ChangeFollowStatusParams {
  traderSig: string;
  trader: string;
  masterTrader: string;
}

export interface ChangeFollowStatusResponse {
  operation: "follow" | "unfollow";
  status: boolean;
}

export interface GetMasterTradersParams {
  trader: string | undefined;
  page: number;
}

export type GetMasterTradersResult = Trader[];
