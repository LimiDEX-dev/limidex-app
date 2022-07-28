export type ButtonSizes = "small" | "middle" | "large";

export interface ButtonProps {
  onClick?: () => void;
  size?: ButtonSizes;
  disabled?: boolean;
}
