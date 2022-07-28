import { SortType } from "../../atoms/Sort";

export type PortfolioTableFields =
  | "type"
  | "name"
  | "network"
  | "coin"
  | "balance"
  | "deals"
  | "followers"
  | "pnl"
  | "price"
  | "balanceUSD"
  | "approve";

export interface PortfolioTableProps {
  sort: {
    field: PortfolioTableFields;
    by: SortType;
  };
  handleChangeSort: ({
    field,
    by,
  }: {
    field: PortfolioTableFields;
    by: SortType;
  }) => void;
  trading: {
    type: string;
    name: string;
    balance: string;
    deals: string;
    followers: string;
    pnl: string;
  }[];
  wallet: {
    network: string;
    coin: string;
    balance: string;
    price: string;
    balanceUSD: string;
    approve: string;
  }[];
  activeNetwork?: number;
  handleFollow: () => void;
}
