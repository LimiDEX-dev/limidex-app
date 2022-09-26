import { ActiveOrder, CrossOrder } from "../../../types/orders";

export interface RemoveLimitOrderParams {
  traderSig: string;
  trader: string;
  orderID: string;
}

export interface GetPagesParams {
  trader: string;
}

export interface GetLimitOrdersByPageParams {
  trader: string;
  page: number;
}

export type GetLimitOrdersByPageResponse = ActiveOrder[];

export interface GetCrossOrdersByPageParams {
  trader: string;
  page: number;
}

export type GetCrossOrdersByPageResponse = CrossOrder[];
