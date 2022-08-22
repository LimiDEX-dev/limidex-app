import { WithdrawObject } from "../../../store/global/types";

interface StakingSelectedCard {
  title: string;
  roi: string;
  lp: string;
  currency: string;
}

export interface StoreObject {
  selectedCard: null | StakingSelectedCard;
  stateToken: string;
  lpTokens: string;
  withdraw: WithdrawObject;
}

export interface ActionsObject {
  setSelectedCard: (payload: null | StakingSelectedCard) => void;
  setStateToken: (payload: string) => void;
  setLpTokens: (payload: string) => void;
  setWithdraw: (payload: Partial<WithdrawObject>) => void;
}
