export interface WithdrawModalProps {
  isVisible: boolean;
  setIsVisible: (isVisible: boolean) => void;
  handleSubmit: () => void;
  lpTokens: string;
  setLpTokens: (value: string) => void;
  tokensReturned: string;
  tokensInMoney: string;
  balanceInLp: string;
  icon: string;
  title: string;
}
