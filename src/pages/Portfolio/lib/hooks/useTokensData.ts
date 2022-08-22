import { useEffect } from "react";

import { useChains, useTokens } from "../../../../store";
import { ActionsObject, useLocalStore } from "../../context";
import { getTokensFinancesByAddresses } from "../../../../api/dexGuru/chain";
import { WalletItem } from "../../../../types/portfolio";

export const ROWS_PER_PAGE = 10;

export const useTokensData = () => {
  const {
    data: tokens,
    actions: { setTokens },
  } = useTokens();
  const {
    data: { selectedChain },
  } = useChains();

  const localStore = useLocalStore();
  const {
    wallet: { page },
  } = localStore.data;
  const {
    wallet: { setPagesCount, setData },
  } = localStore.actions as ActionsObject;

  const getPortfolioWallet = async () => {
    if (!selectedChain) {
      return;
    }

    const currentTokens = tokens.slice(
      (page - 1) * ROWS_PER_PAGE,
      page * ROWS_PER_PAGE,
    );

    getTokensFinancesByAddresses(
      currentTokens.map(({ address }) => address),
      selectedChain.value,
    )
      .then(({ data: { data } }) => {
        const newData: WalletItem[] = data.map((item) => {
          const token = currentTokens.find(
            (itemToken) => itemToken.address === item.address,
          );

          if (!token) {
            throw new Error("Tokens have not been updated");
          }

          return {
            symbol: token.symbol,
            price: item.price_usd,
            icon: token.logoURI,
            balance: "0",
            balanceUSD: "0",
            address: item.address,
          };
        });

        setData(newData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (tokens.length) {
      setPagesCount(Math.ceil(tokens.length / ROWS_PER_PAGE));
      getPortfolioWallet();
    }
  }, [tokens, page]);
};
