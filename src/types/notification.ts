import { ReactNode } from "react";

export type NotificationStatus = "success" | "error";

export interface Notification {
  status: NotificationStatus;
  timeout?: number;
  title: string;
  content?: ReactNode;
}
