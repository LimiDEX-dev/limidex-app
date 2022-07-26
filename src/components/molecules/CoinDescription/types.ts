export interface Coin {
  title: string;
  pot: string;
  fee: string;
  proxyContract: string;
  verifiedContract: string;
  holders: string;
  supply: string;
}

export interface CoinDescriptionProps {
  isVisible: boolean;
  handleClose: () => void;
  coin?: Coin;
}
