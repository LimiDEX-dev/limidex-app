export interface ActiveOrder {
  fromToken: string;
  toToken: string;
  volume: string;
  price: string;
  orderType: number;
  takeProfit: string;
  stopLoss: string;
  orderID: string;
}

export interface HistoryOrder {
  asset: {
    name: string;
    descr: string;
  };
  volume: string;
  destination: {
    name: string;
    descr: string;
  };
  amount: string;
  network: string;
  type: string;
  reward: string;
  status: string;
}

export interface CrossOrder {
  fromToken: string;
  toToken: string;
  destChain: string;
  volume: string;
  amountOut: string;
  statusSrc: number;
  statusDest: number;
  txHashSrc: string;
  txHashDest: string;
  orderID: string;
}
