import { axiosCoinGecko } from "../base";

import {
  GetCandlestickDataByCoinParams,
  GetCandlestickDataByCoinResponse,
} from "./types";
import { urls } from "./urls";

export const getCandlestickDataByCoin = ({
  coin,
  currency,
}: GetCandlestickDataByCoinParams): Promise<GetCandlestickDataByCoinResponse> =>
  axiosCoinGecko.get(urls.coinCandlestick(coin, currency));
