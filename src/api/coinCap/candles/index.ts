import { AxiosResponse } from "axios";
import { axiosCoinCap } from "../base";

import { urls } from "./urls";
import { GetCandlesParams, GetCandlesResponse } from "./types";

export const getCandles = (
  params: GetCandlesParams,
): Promise<AxiosResponse<GetCandlesResponse>> =>
  axiosCoinCap.get(urls.candles, {
    params,
  });
