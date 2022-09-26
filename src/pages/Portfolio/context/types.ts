import { WalletItem } from "../../../types/portfolio";
import { Trader } from "../../../types/traders";

export interface StoreObject {
  wallet: {
    data: WalletItem[];
    page: number;
    pagesCount: number;
  };
  traders: {
    pagesCount: number;
    traders: Trader[];
    currentPage: number;
  };
}

export interface ActionsObject {
  wallet: {
    setData: (data: WalletItem[]) => void;
    setPage: (page: number) => void;
    setPagesCount: (pages: number) => void;
  };
  traders: {
    setPagesCount: (pages: number) => void;
    setTraders: (traders: Trader[]) => void;
    setCurrentPage: (payload: number) => void;
    handleChangeFollowStatus: (payload: {
      address: string;
      isFollow: boolean;
    }) => void;
  };
}
