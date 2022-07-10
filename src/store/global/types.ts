import { Notification } from "../../types/notification";

export type NotificationStore = Notification[];

export interface NotificationActions {
  createNotification: (notification: Notification) => void;
  deleteNotification: (index: number) => void;
}

export interface UserStore {
  transactionsPending: number;
}

export interface UserActions {
  setTransactionsPending: (count: number) => void;
}

export interface ActionsObject {
  notifications: NotificationActions;
  user: UserActions;
}

export interface StoreObject {
  notifications: NotificationStore;
  user: UserStore;
}
