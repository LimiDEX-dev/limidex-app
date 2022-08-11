import React, { FC, useEffect } from "react";

import { ethers } from "ethers";
import { useTokens } from "../../../../../../store";
import { Dropdown, DropdownItem } from "../../../../../../components/atoms";
import { SwapIcon } from "../../../../../../lib/icons";
import { useLocalStore, ActionsObject } from "../../../../context";

import { ConvertDropdownsProps } from "./types";

import * as S from "./style";
import {
  getReceiveSumInWei,
  getTokenPrice,
} from "../../../../../../api/main/trade";

export const ConvertDropdowns: FC<ConvertDropdownsProps> = ({
  beforeSwapAddon,
  afterSwapAddon,
}) => {
  const { data: tokens } = useTokens();
  const localStore = useLocalStore();

  const {
    ui: { orderTab },
    convert: {
      sell: { selectedSell, toSell, toSellUSD },
      buy: { selectedBuy, toBuy, toBuyUSD },
    },
    settings: { route },
  } = localStore.data;
  const {
    convert: {
      setConvertSell,
      setToSell,
      setToSellUSD,
      setConvertBuy,
      setToBuy,
      setToBuyUSD,
      handleSwap,
    },
    addCustomToken: { setIsAddCustomTokenVisible },
  } = localStore.actions as ActionsObject;

  const getMappedTokens = (action: "sell" | "buy"): DropdownItem[] =>
    tokens
      .filter((item) =>
        action === "sell"
          ? item.address !== selectedSell?.value
          : item.address !== selectedBuy?.value,
      )
      .map((item) => ({
        value: item.address,
        label: item.name,
        icon: item.logoURI,
        symbol: item.symbol,
      }));

  const handleChangeSell = (item: DropdownItem) => {
    if (item.value === selectedBuy?.value) {
      handleSwap();

      return;
    }

    setConvertSell(item);
  };

  const handleChangeBuy = (item: DropdownItem) => {
    if (item.value === selectedSell?.value) {
      handleSwap();

      return;
    }

    setConvertBuy(item);
  };

  useEffect(() => {
    if (tokens.length) {
      const mappedTokens = getMappedTokens("sell");

      setConvertSell(mappedTokens[0]);
      setConvertBuy(mappedTokens[1]);
    }
  }, [tokens]);

  useEffect(() => {
    if (!selectedSell || !selectedBuy || !toSell) {
      return;
    }

    (async function () {
      const {
        data: {
          result: { amountOut },
        },
      } = await getReceiveSumInWei({
        fromToken: selectedSell.value,
        toToken: selectedBuy.value,
        volume: ethers.utils.parseEther(toSell),
      });

      setToBuy(ethers.utils.formatEther(amountOut));
    })();
  }, [selectedSell, selectedBuy, toSell]);

  useEffect(() => {
    if (!selectedSell || !selectedBuy || !toBuy) {
      return;
    }

    (async function () {
      const {
        data: {
          result: { amountOut },
        },
      } = await getReceiveSumInWei({
        fromToken: selectedBuy.value,
        toToken: selectedSell.value,
        volume: ethers.utils.parseEther(toBuy),
      });

      setToSell(ethers.utils.formatEther(amountOut));
    })();
  }, [selectedSell, selectedBuy, toBuy]);

  useEffect(() => {
    if (!toSell || Number.isNaN(parseInt(toSell, 10))) {
      setToSellUSD(0);

      return;
    }

    (async function () {
      const {
        data: {
          result: { price },
        },
      } = await getTokenPrice({
        token: selectedSell.value,
        router: route.toString(),
      });

      setToSellUSD(price);
    })();
  }, [toSell]);

  useEffect(() => {
    if (!toBuy || Number.isNaN(parseInt(toBuy, 10))) {
      setToSellUSD(0);

      return;
    }

    (async function () {
      const {
        data: {
          result: { price },
        },
      } = await getTokenPrice({
        token: selectedBuy.value,
        router: route.toString(),
      });

      setToBuyUSD(price);
    })();
  }, [toBuy]);

  return (
    <S.ConvertDropdowns>
      <S.Converter>
        <S.ConverterHeader>
          <S.ConverterHeaderItemTitle>You Pay</S.ConverterHeaderItemTitle>
          <S.ConverterHeaderItem>Balance: 12</S.ConverterHeaderItem>
        </S.ConverterHeader>
        <S.ConverterContent>
          <Dropdown
            items={getMappedTokens("sell")}
            onSelect={handleChangeSell}
            isAddCustomVisible
            noBorder
            notRightBorderRadius
            handleAddCustom={() => setIsAddCustomTokenVisible(true)}
          >
            <S.ConverterValueImg
              src={(selectedSell?.icon as string) || ""}
              alt=""
            />
            <span className="dropdown__trigger__label">
              {selectedSell?.symbol}
              <br />
              <span>{selectedSell?.label}</span>
            </span>
          </Dropdown>
          <div>
            <S.CustomInputTopLabel>~${toSellUSD}</S.CustomInputTopLabel>
            <S.CustomInput
              type="text"
              value={toSell}
              onChange={({ target }) => setToSell(target.value)}
            />
          </div>
        </S.ConverterContent>
      </S.Converter>
      <S.SwapWrapper noInputs={orderTab === "swap"}>
        {beforeSwapAddon}
        <S.SwapButton
          type="button"
          onClick={handleSwap}
          aria-label="swap currencies"
        >
          <SwapIcon />
        </S.SwapButton>
        {afterSwapAddon}
      </S.SwapWrapper>
      <S.Converter>
        <S.ConverterHeader>
          <S.ConverterHeaderItemTitle>You Recieve</S.ConverterHeaderItemTitle>
          <S.ConverterHeaderItem>Balance: 12</S.ConverterHeaderItem>
        </S.ConverterHeader>
        <S.ConverterContent>
          <Dropdown
            items={getMappedTokens("buy")}
            onSelect={handleChangeBuy}
            isAddCustomVisible
            noBorder
            notRightBorderRadius
            handleAddCustom={() => setIsAddCustomTokenVisible(true)}
          >
            <S.ConverterValueImg
              src={(selectedBuy?.icon as string) || ""}
              alt=""
            />
            <span className="dropdown__trigger__label">
              {selectedBuy?.symbol}
              <br />
              <span>{selectedBuy?.label}</span>
            </span>
          </Dropdown>
          <div>
            <S.CustomInputTopLabel>~${toBuyUSD}</S.CustomInputTopLabel>
            <S.CustomInput
              type="text"
              value={toBuy}
              onChange={({ target }) => setToBuy(target.value)}
            />
          </div>
        </S.ConverterContent>
      </S.Converter>
    </S.ConvertDropdowns>
  );
};
