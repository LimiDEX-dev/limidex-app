



export interface IsOpenedActions {
  setTransactionsPending: (count: boolean) => void;
}

export interface ActionsObject {
  isOpened: IsOpenedActions;
}

export interface IsOpenedStore {
  transactionsPending: boolean;
}

export interface StoreObject {
  isOpened: IsOpenedStore;
}
