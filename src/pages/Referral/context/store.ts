import { StoreObject } from "./types";
import { ambassador } from "../../../lib/mock/ambassador";

export const initialStore: StoreObject = {
  rewards: ambassador.stats,
};
