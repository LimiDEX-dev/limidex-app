export interface RewardItem {
  Balance: string;
  Total: string;
  VE: string;
  Cashback: string;
  RefLvl1: string;
  RefLvl2: string;
  Followers: string;
  ProtocolEarn: string;
}

export interface StoreObject {
  rewards: RewardItem[];
}

export interface ActionsObject {
  setRewards: (payload: RewardItem[]) => void;
}
