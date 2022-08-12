import React from "react";

import {
  // ArbitrumIcon,
  EthereumIcon,
  MainnetIcon,
  PolygonIcon,
  AvalancheIcon,
} from "../icons/tokens";
import { Chain } from "../../types/chains";

export const chains: Chain[] = [
  {
    value: "1",
    label: "Ethereum",
    icon: <EthereumIcon />,
    color: "rgb(68, 113, 244)",
  },
  {
    value: "56",
    label: "BCS Mainnet",
    icon: <MainnetIcon />,
    color: "#F2EE93",
  },
  {
    value: "137",
    label: "Polygon",
    icon: <PolygonIcon />,
    color: "rgb(113, 55, 210)",
  },
  {
    value: "43114",
    label: "Avalanche",
    icon: <AvalancheIcon />,
    color: "rgb(214, 60, 54)",
  },
  // {
  //   value: "arbitrum",
  //   label: "Arbitrum",
  //   icon: <ArbitrumIcon />,
  //   color: "rgb(22, 139, 217)",
  // },
  {
    value: "250",
    label: "Fantom",
    icon: <img src="/assets/fantom-logo.png" alt="" width={16} />,
    color: "rgb(25, 105, 255)",
  },
];
