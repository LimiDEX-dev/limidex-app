/* eslint-disable react/no-array-index-key */
import { FC } from "react";

import { PaginationProps } from "./types";

import * as S from "./style";

export const Pagination: FC<PaginationProps> = ({
  pagesCount,
  currentPage,
  handleChangePage,
}) => {
  const getFormattedPages = () => {
    if (pagesCount > 5) {
      if (currentPage === 1 || currentPage === 2) {
        return [1, 2, 3, "...", pagesCount];
      }
      if (currentPage === 3) {
        return [1, 2, 3, 4, "...", pagesCount];
      }
      if (currentPage === pagesCount || currentPage === pagesCount - 1) {
        return [1, "...", pagesCount - 2, pagesCount - 1, pagesCount];
      }
      if (currentPage === pagesCount - 2) {
        return [
          1,
          "...",
          pagesCount - 3,
          pagesCount - 2,
          pagesCount - 1,
          pagesCount,
        ];
      }

      return [
        1,
        "...",
        currentPage - 1,
        currentPage,
        currentPage + 1,
        "...",
        pagesCount,
      ];
    }

    return Array.from({ length: pagesCount }, (_, i) => i + 1);
  };

  return (
    <S.Pagination>
      {getFormattedPages().map((item, index) => (
        <S.Page
          type="button"
          isActive={item === currentPage}
          key={`${item}-${index}`}
          disabled={item === "..." || item === currentPage}
          onClick={() => handleChangePage(+item)}
        >
          {item}
        </S.Page>
      ))}
    </S.Pagination>
  );
};
