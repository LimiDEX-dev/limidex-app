import { createStore } from "../createStore";
import { initialStore } from "./store";
import { provideActions } from "./actions";
import { ActionsObject } from "./types";

const { useStore, selector, Store } = createStore(initialStore, provideActions);

export const useGlobalStore = useStore;
export const useIsOpened = selector(({ data: { isOpened }, actions }) => ({
  data: isOpened,
  actions: (actions as ActionsObject).isOpened,
}));

export const GlobalStore = Store;
