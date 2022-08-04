import {
  Avalanche,
  BSC,
  Config,
  Fantom,
  Mainnet,
  Polygon,
} from "@usedapp/core";
import { getDefaultProvider } from "ethers";

export const dappConfig: Config = {
  readOnlyChainId: Mainnet.chainId,
  readOnlyUrls: {
    [Mainnet.chainId]: getDefaultProvider("mainnet"),
    [BSC.chainId]: "https://bsc-dataseed.binance.org",
    [Polygon.chainId]: "https://polygon-rpc.com",
    [Avalanche.chainId]: "https://api.avax.network/ext/bc/C/rpc",
    [Fantom.chainId]: "https://rpc.ankr.com/fantom/",
  },
};
