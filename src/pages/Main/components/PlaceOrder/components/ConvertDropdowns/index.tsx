import React, { FC } from "react";

import { useTokens } from "../../../../../../store";
import { Dropdown, DropdownItem } from "../../../../../../components/atoms";
import { SwapIcon } from "../../../../../../lib/icons";
import { useLocalStore, ActionsObject } from "../../../../context";

import { ConvertDropdownsProps } from "./types";

import * as S from "./style";

export const ConvertDropdowns: FC<ConvertDropdownsProps> = ({
  beforeSwapAddon,
  afterSwapAddon,
}) => {
  const { data: tokens } = useTokens();
  const localStore = useLocalStore();

  const {
    ui: { orderTab },
    convert: {
      sell: { selectedSell, toSell },
      buy: { selectedBuy, toBuy },
    },
  } = localStore.data;
  const {
    convert: { setConvertSell, setToSell, setConvertBuy, setToBuy, handleSwap },
    addCustomToken: { setIsAddCustomTokenVisible },
  } = localStore.actions as ActionsObject;

  const getMappedTokens = (): DropdownItem[] =>
    tokens.map((item) => ({
      value: item.address,
      label: item.name,
      icon: item.logoURI,
    }));

  return (
    <S.ConvertDropdowns>
      <S.Converter>
        <S.ConverterHeader>
          <S.ConverterHeaderItemTitle>You Pay</S.ConverterHeaderItemTitle>
          <S.ConverterHeaderItem>Balance: 12</S.ConverterHeaderItem>
        </S.ConverterHeader>
        <S.ConverterContent>
          <Dropdown
            items={getMappedTokens()}
            onSelect={setConvertSell}
            isAddCustomVisible
            noBorder
            notRightBorderRadius
            width={110}
            handleAddCustom={() => setIsAddCustomTokenVisible(true)}
          >
            {selectedSell?.icon}
            <span className="dropdown__trigger__label">
              {selectedSell?.label}
              <br />
              <span>Wrapped BNB</span>
            </span>
          </Dropdown>
          <div>
            <S.CustomInputTopLabel>~$4,227</S.CustomInputTopLabel>
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
            items={getMappedTokens()}
            onSelect={setConvertBuy}
            isAddCustomVisible
            noBorder
            notRightBorderRadius
            width={110}
            handleAddCustom={() => setIsAddCustomTokenVisible(true)}
          >
            {selectedBuy?.icon}
            <span className="dropdown__trigger__label">
              {selectedBuy?.label}
              <br />
              <span>Wrapped BNB</span>
            </span>
          </Dropdown>
          <div>
            <S.CustomInputTopLabel>~$4,227</S.CustomInputTopLabel>
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
