import { ReactNode } from "react";

import { NotificationStatus } from "../../../types/notification";

export interface NotificationProps {
  children?: ReactNode;
  title: string;
  handleClose: () => void;
  timeout: number;
  status: NotificationStatus;
}
