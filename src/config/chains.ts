export const chainsData = {
  polygon: {
    chainId: "0x89",
    chainName: "Polygon Mainnet",
    rpcUrls: ["https://polygon-rpc.com"],
    nativeCurrency: {
      name: "MATIC",
      symbol: "MATIC",
      decimals: 18,
    },
    blockExplorerUrls: ["https://polygonscan.com/"],
  },
  mainnet: {
    chainId: "0x38",
    chainName: "Binance Smart Chain Mainnet",
    rpcUrls: ["https://bsc-dataseed1.binance.org"],
    nativeCurrency: {
      name: "BNB",
      symbol: "BNB",
      decimals: 18,
    },
    blockExplorerUrls: ["https://bscscan.com"],
  },
  avalanche: {
    chainId: "0xa86a",
    chainName: "Avalanche C-Chain",
    rpcUrls: ["https://api.avax.network/ext/bc/C/rpc"],
    nativeCurrency: {
      name: "AVAX",
      symbol: "AVAX",
      decimals: 18,
    },
    blockExplorerUrls: ["https://snowtrace.io"],
  },
  fantom: {
    chainId: "0xfa",
    chainName: "Fantom Opera",
    rpcUrls: ["https://rpc.ftm.tools"],
    nativeCurrency: {
      name: "FTM",
      symbol: "FTM",
      decimals: 18,
    },
    blockExplorerUrls: ["https://snowtrace.io"],
  },
};
