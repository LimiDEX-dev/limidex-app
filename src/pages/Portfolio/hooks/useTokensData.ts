import { useEffect, useState } from "react";

import { useChains, usePortfolio } from "../../../store";
import { getTokensByChainId } from "../../../api/1inch/tokens";
import { getTokensFinancesByAddresses } from "../../../api/dexGuru/chain";
import { Token } from "../../../api/1inch/tokens/types";
import { WalletItem } from "../../../types/portfolio";

export const ROWS_PER_PAGE = 10;

export const useTokensData = () => {
  const [tokens, setTokens] = useState<Token[]>([]);
  console.log(tokens);

  const {
    data: { selectedChain },
  } = useChains();
  const {
    data: {
      wallet: { page },
    },
    actions: {
      wallet: { setPagesCount, setData },
    },
  } = usePortfolio();

  const getPortfolioWallet = async () => {
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
    (async function () {
      const { data } = await getTokensByChainId(selectedChain.value);

      const tokensArr = Object.values(data.tokens);
      setTokens(tokensArr);
      setPagesCount(Math.ceil(tokensArr.length / ROWS_PER_PAGE));
    })();
  }, [selectedChain]);

  useEffect(() => {
    if (tokens.length) {
      getPortfolioWallet();
    }
  }, [tokens, page]);
};
