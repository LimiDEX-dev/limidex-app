import { ReactNode } from "react";

export interface Chain {
  value: string;
  label: string;
  icon?: ReactNode;
  color?: string;
}
