import { ReactElement } from "react";

export interface NetworkItemProps {
  title: string;
  icon?: ReactElement;
  isActive: boolean;
  handleChange: () => void;
}
