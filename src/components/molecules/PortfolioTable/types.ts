import { SortType } from "../../atoms/Sort";
import { WalletItem } from "../../../types/portfolio";
import { Trader } from "../../../types/traders";

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
  trading: Trader[];
  wallet: WalletItem[];
  activeNetwork?: number;
  handleFollow: (masterTrader: string) => void;
  pagesCount: number;
  currentPage: number;
  handleChangePage: (page: number) => void;
}
