import { routerAbi } from "./abi/router";
import { poolAbi } from "./abi/pool";
import { veTokenAbi } from "./abi/veToken";

type Contract = {
  address: string;
  abi: object[] | string[];
};

export const contracts: {
  router: Contract;
  pool: Contract;
  veToken: Contract;
} = {
  router: {
    address: "0x000",
    abi: routerAbi,
  },
  pool: {
    address: "0x000",
    abi: poolAbi,
  },
  veToken: {
    address: "0xA26710B65D505b6f85ECB418b073A4A67586DEdD",
    abi: veTokenAbi,
  },
};
