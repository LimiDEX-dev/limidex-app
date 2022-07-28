import { HTMLInputTypeAttribute, ReactElement } from "react";

export interface InputProps {
  value: string;
  onChange: (value: string) => void;
  onBlur?: (value: string) => void;
  label?: string | ReactElement;
  topLabel?: string | ReactElement;
  currency?: string;
  notLeftBorder?: boolean;
  icon?: ReactElement;
  type?: HTMLInputTypeAttribute;
  min?: number;
  max?: number;
}
