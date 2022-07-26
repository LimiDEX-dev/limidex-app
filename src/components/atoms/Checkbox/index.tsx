import { ChangeEvent, FC } from "react";

import { CheckIcon } from "../../../lib/icons";

import { CheckboxProps } from "./types";

import * as S from "./style";

export const Checkbox: FC<CheckboxProps> = ({
  checked,
  onChange,
  children,
  type,
}) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked);
  };

  return (
    <S.Checkbox type={type}>
      <S.CheckboxInput
        type="checkbox"
        checked={checked}
        className="visually-hidden"
        onChange={handleChange}
      />
      <S.StyledCheckbox>
        <CheckIcon />
      </S.StyledCheckbox>
      <S.CheckboxLabel>{children}</S.CheckboxLabel>
    </S.Checkbox>
  );
};
