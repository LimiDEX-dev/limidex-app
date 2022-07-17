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
export const useChains = selector(({ data: { chains }, }) => ({
  data: chains,
}));
export const useSelectedChain = selector(({ data: { selectedChain }, actions}) => ({
  data: selectedChain,
  actions: (actions as ActionsObject).selectedChain,
  
}));
export const useIsSettingsOpened = selector(({ data: { isSettingsOpened }, actions}) => ({
  data: isSettingsOpened,
  actions: (actions as ActionsObject).isSettingsOpened,
  
}));
export const useSlippageTolerance = selector(({ data: { slippageTolerance }, actions}) => ({
  data: slippageTolerance,
  actions: (actions as ActionsObject).slippageTolerance,
  
}));
export const useIsOpened = selector(({ data: { isOpened }, actions }) => ({
  data: isOpened,
  actions: (actions as ActionsObject).isOpened,
}));

export const GlobalStore = Store;
