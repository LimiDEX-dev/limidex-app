import { createStore } from "../createStore";
import { initialStore } from "./store";
import { provideActions } from "./actions";
import { ActionsObject } from "./types";

const { useStore, selector, Store } = createStore(initialStore, provideActions);

export const useGlobalStore = useStore;
export const useNotifications = selector(
  ({ data: { notifications }, actions }) => ({
    data: notifications,
    actions: (actions as ActionsObject).notifications,
  }),
);
export const useUser = selector(({ data: { user }, actions }) => ({
  data: user,
  actions: (actions as ActionsObject).user,
}));
export const useChains = selector(({ data: { chains }, actions }) => ({
  data: chains,
  actions: (actions as ActionsObject).chains,
}));
export const useChart = selector(({ data: { chart }, actions }) => ({
  data: chart,
  actions: (actions as ActionsObject).chart,
}));
export const useTokens = selector(({ data: { tokens }, actions }) => ({
  data: tokens,
  actions: (actions as ActionsObject).tokens,
}));

export const GlobalStore = Store;
