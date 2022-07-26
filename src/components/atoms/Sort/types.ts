export type SortType = "up" | "down" | "no";

export interface SortProps {
  isWordSort?: boolean;
  sort: SortType;
  onChange: (sort: SortType) => void;
}
