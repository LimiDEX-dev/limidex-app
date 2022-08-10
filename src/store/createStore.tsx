/* eslint-disable react/jsx-no-constructed-context-values */
import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { StoreCreator } from "./types";

export const createStore = <StoreObject, ActionsObject>(
  initialStore: StoreObject,
  provideActions: (
    setStore: Dispatch<SetStateAction<StoreObject>>,
  ) => ActionsObject,
): StoreCreator<StoreObject, ActionsObject> => {
  const defaultContextValue = {
    data: initialStore,
    actions: {},
  };

  const StoreContext = createContext(defaultContextValue);
  const useStore = () => useContext(StoreContext);

  return {
    useStore,
    selector: (cb) => () => cb(useStore()),
    Store: ({ children }) => {
      const [store, setStore] = useState(initialStore);

      return (
        <StoreContext.Provider
          value={{
            data: store,
            actions: provideActions(setStore),
          }}
        >
          {children}
        </StoreContext.Provider>
      );
    },
  };
};
