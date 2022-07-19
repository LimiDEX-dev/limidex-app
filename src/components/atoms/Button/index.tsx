import { FC } from "react";

import { ButtonProps } from "./types";

import * as S from "./style";

export const Button: FC<ButtonProps> = ({
  children,
  onClick,
  size = "large",
  disabled,
}) => (
  <S.Button type="button" size={size} onClick={onClick} disabled={disabled}>
    {children}
  </S.Button>
);
