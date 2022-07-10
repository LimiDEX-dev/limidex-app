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

export const GlobalStore = Store;
