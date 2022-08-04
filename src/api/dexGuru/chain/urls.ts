export const urls = {
  tokensMarket: (chainId: string, addresses: string[]) =>
    `chain/${chainId}/tokens/market?api-key=wGuepzYnfw5eD64HigZpr3reSPVdGScj70jxQsNzE7A&token_addresses=${addresses.join(
      ",",
    )}`,
};
