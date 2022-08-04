import { SortType } from "../../atoms/Sort";
import { WalletItem } from "../../../types/portfolio";

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
  wallet: WalletItem[];
  activeNetwork?: number;
  handleFollow: () => void;
  pagesCount: number;
  currentPage: number;
  handleChangePage: (page: number) => void;
}
