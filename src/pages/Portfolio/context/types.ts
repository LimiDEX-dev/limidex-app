import { WalletItem } from "../../../types/portfolio";

export interface StoreObject {
  wallet: {
    data: WalletItem[];
    page: number;
    pagesCount: number;
  };
}

export interface ActionsObject {
  wallet: {
    setData: (data: WalletItem[]) => void;
    setPage: (page: number) => void;
    setPagesCount: (pages: number) => void;
  };
}
