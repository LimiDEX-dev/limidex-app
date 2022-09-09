import { AxiosResponse } from "axios";

export interface GetCandlestickDataByCoinParams {
  coin: string;
  currency: string;
}

export type GetCandlestickDataByCoinResponse = AxiosResponse<
  Array<
    [
      number, // date in ms
      number,
      number,
      number,
      number,
    ]
  >
>;
