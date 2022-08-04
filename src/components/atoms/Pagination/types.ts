export interface PaginationProps {
  pagesCount: number;
  currentPage: number;
  handleChangePage: (page: number) => void;
}
