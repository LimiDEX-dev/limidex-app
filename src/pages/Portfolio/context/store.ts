import { StoreObject } from "./types";

export const initialStore: StoreObject = {
  wallet: {
    data: [],
    page: 1,
    pagesCount: 1,
  },
  traders: {
    pagesCount: 0,
    traders: [],
    currentPage: 1,
  },
};
