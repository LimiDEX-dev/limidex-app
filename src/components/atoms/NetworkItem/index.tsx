import React, { FC } from "react";

import { NetworkItemProps } from "./types";

import * as S from "./style";

export const NetworkItem: FC<NetworkItemProps> = ({
  title,
  icon,
  isActive,
  handleChange,
}) => (
  <S.NetworkItem>
    <S.TriggerButton type="button" onClick={handleChange} isActive={isActive}>
      {icon && <S.Icon>{icon}</S.Icon>}
      <S.Title>{title}</S.Title>
    </S.TriggerButton>
  </S.NetworkItem>
);
