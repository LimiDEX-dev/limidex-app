import { FC, ReactNode } from 'react';

export interface ContextValue<StoreObject, ActionsObject> {
  data: StoreObject;
  actions: {} | ActionsObject;
}

export interface StoreCreator<StoreObject, ActionsObject> {
  useStore: () => ContextValue<StoreObject, ActionsObject>;
  selector: <T>(cb: (store: ContextValue<StoreObject, ActionsObject>) => T) => () => T;
  Store: FC<{ children: ReactNode }>;
}
