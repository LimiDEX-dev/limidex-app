import { routerAbi } from "./abi/router";
import { poolAbi } from "./abi/pool";
import { veTokenAbi } from "./abi/veToken";

type Contract = {
  address: string;
  abi: string[];
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
    address: "0x000",
    abi: veTokenAbi,
  },
};
