export type CheckboxType = "switch" | "checkbox";

export interface CheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  type?: CheckboxType;
}
