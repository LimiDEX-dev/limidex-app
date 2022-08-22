import { StoreObject } from "./types";

export const lockPeriodes = [
  {
    value: "0",
    label: "1 Month",
  },
  {
    value: "1",
    label: "3 Months",
  },
  {
    value: "2",
    label: "6 Months",
  },
  {
    value: "3",
    label: "1 Year",
  },
];

export const initialStore: StoreObject = {
  lockPeriod: lockPeriodes[0],
  lockSPLX: "10",
  withdraw: {
    lpTokens: "0",
    tokensInMoney: "0",
    tokensReturned: "0",
  },
};
