export interface StakingCardProps {
  title: string;
  list: {
    title: string;
    currency: string;
    descr: string;
  }[];
  tokens?: {
    date: string;
    lmx: string;
  }[];
  handleDeposit?: () => void;
  handleWithdraw?: () => void;
  icon?: string;
}
