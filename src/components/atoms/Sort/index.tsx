import React, { FC } from "react";
import classnames from "classnames";

import { SortArrowIcon, SortWordIcon } from "../../../lib/icons";

import { SortProps, SortType } from "./types";

import * as S from "./style";

export type { SortType };

export const Sort: FC<SortProps> = ({
  isWordSort,
  sort,
  children,
  onChange,
}) => {
  const handleClick = () => {
    if (sort === "up") {
      onChange("down");
      return;
    }
    if (sort === "down") {
      onChange("no");
      return;
    }

    onChange("up");
  };

  return (
    <S.Sort type="button" sort={sort} word={isWordSort} onClick={handleClick}>
      <S.Icons>
        <SortArrowIcon />
        <SortWordIcon />
        <SortArrowIcon />
      </S.Icons>
      <S.Descr>{children}</S.Descr>
    </S.Sort>
  );
};
