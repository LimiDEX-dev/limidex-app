import { ReactNode } from "react";

export interface DropdownItem {
  label: string;
  value: string;
  icon?: ReactNode | string;
  [key: string]: any;
}

export interface DropdownProps {
  items: DropdownItem[];
  onSelect: (item: DropdownItem) => void;
  handleAddCustom?: () => void;
  isAddCustomVisible?: boolean;
  selectedValue?: DropdownItem;
  notRightBorderRadius?: boolean;
  width?: number;
  listWidth?: number;
  textAlign?: "right" | "left";
  arrowHidden?: boolean;
  borderColor?: string;
  noBorder?: boolean;
}
