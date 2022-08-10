import { AxiosResponse } from "axios";
import { axios1inch } from "../base";

import { urls } from "./urls";

import { GetTokensByChainIdResponse } from "./types";

export const getTokensByChainId = async (
  chainId: string,
): Promise<AxiosResponse<GetTokensByChainIdResponse>> =>
  axios1inch.get(urls.tokens(chainId));
