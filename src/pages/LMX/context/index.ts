import { createStore } from "../../../store/createStore";
import { initialStore } from "./store";
import { provideActions } from "./actions";

export type { ActionsObject } from "./types";
export { lockPeriodes } from "./store";

const context = createStore(initialStore, provideActions);

export const { Store, useStore: useLocalStore } = context;
