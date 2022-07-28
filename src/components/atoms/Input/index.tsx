import React, { ChangeEvent, FC } from "react";
import classnames from "classnames";

import { InputProps } from "./types";

import * as S from "./style";

export const Input: FC<InputProps> = ({
  value,
  onChange,
  onBlur,
  label,
  topLabel,
  currency,
  notLeftBorder,
  icon,
  type,
  min,
  max,
}) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (type === "number" && +event.target.value > max) {
      onChange(max.toString());
      return;
    }
    if (type === "number" && +event.target.value < min) {
      onChange(min.toString());
      return;
    }

    onChange(event.target.value);
  };

  return (
    <S.Input noBorder={notLeftBorder} fullWidth={!!icon}>
      {topLabel && <S.TopLabel>{topLabel}</S.TopLabel>}
      {label && <S.Label>{label}</S.Label>}
      {currency && <S.Currency>{currency}</S.Currency>}
      <S.InputField
        type={type || "text"}
        className="input"
        value={value}
        onChange={handleChange}
        onBlur={({ target }) => onBlur && onBlur(target.value)}
        min={min}
        max={max}
      />
      {icon}
    </S.Input>
  );
};
