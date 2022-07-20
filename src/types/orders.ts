export interface ActiveOrder {
    asset: {
        name: string,
        descr: string,
    },
    volume: string,
    destination: {
        name: string,
        descr: string,
    },
    estimatedOut: number,
    type: string,
    price: string,
    network: string,
    tpSl: string,
}

export interface HistoryOrder {
    asset: {
        name: string,
        descr: string,
    },
    volume: string,
    destination: {
        name: string,
        descr: string,
    },
    amount: string,
    network: string,
    type: string,
    reward: string,
    status: string,
}

export interface CrossOrder {
    asset: {
        name: string,
        descr: string,
      },
      volume: string,
      destination: {
        name: string,
        descr: string,
      },
      amount: string,
      status: string,
      rewards: string,
}