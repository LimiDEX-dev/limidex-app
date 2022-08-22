import { DropdownItem } from "../../../components/atoms";
import { WithdrawObject } from "../../../store/global/types";

export interface StoreObject {
  lockPeriod: DropdownItem;
  lockSPLX: string;
  withdraw: WithdrawObject;
}

export interface ActionsObject {
  setLockPeriod: (lockPeriod: DropdownItem) => void;
  setLockSPLX: (value: string) => void;
  setWithdraw: (payload: Partial<WithdrawObject>) => void;
}
