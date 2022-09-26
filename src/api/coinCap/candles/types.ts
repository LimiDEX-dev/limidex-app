export interface GetCandlesParams {
  exchange: string;
  interval: string;
  baseId: string;
  quoteId: string;
  start?: number;
  end?: number;
}

export type GetCandlesResponse = {
  data: {
    open: string;
    high: string;
    low: string;
    close: string;
    volume: string;
    period: number;
  }[];
  timestamp: Date;
};
