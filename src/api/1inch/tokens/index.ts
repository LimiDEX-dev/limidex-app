import { axios1inch } from "../base";

import { Token } from "./types";
import { urls } from "./urls";

export const getTokensByChainId = async (
  chainId: string,
): Promise<{ data: { tokens: Record<string, Token> } }> =>
  axios1inch.get(urls.tokens(chainId));
