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
  user: {
    refsLvl1Count: 0,
    refsLvl2Count: 0,
    followers: 0,
    following: 0,
    isMasterTrader: false,
  },
};
