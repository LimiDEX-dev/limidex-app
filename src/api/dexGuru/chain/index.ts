import { axiosDexGuru } from "../base";
import { urls } from "./urls";

export const getTokensFinancesByAddresses = async (
  addresses: string[],
  chainId: string,
) => axiosDexGuru.get(urls.tokensMarket(chainId, addresses));
