import React, { FC, useEffect } from "react";

import { ActionsObject, useLocalStore } from "../../../../context";
import { Dropdown, Popup } from "../../../../../../components/atoms";
import { HelpIcon } from "../../../../../../lib/icons";

import * as S from "./style";

export const PlaceOrderTrade: FC = () => {
  const localStore = useLocalStore();

  const {
    convert: {
      sell: { selectedSell },
      buy: { selectedBuy },
    },
    settings: { trade },
  } = localStore.data;
  const {
    settings: { setTrade },
  } = localStore.actions as ActionsObject;

  useEffect(() => {
    if (
      (selectedSell && selectedBuy && !trade) ||
      (selectedSell.value !== trade?.value &&
        selectedBuy.value !== trade?.value)
    ) {
      setTrade(selectedSell);
    }
  }, [selectedSell, selectedBuy, trade]);

  return (
    <S.Trade>
      <Popup
        content="Сhoose in which coin you want to receive arbitrage cashbacks"
        width={140}
      >
        <span className="input__flex-label">
          Trade Reward
          <div>
            <HelpIcon />
          </div>
        </span>
      </Popup>
      <Dropdown
        items={[selectedSell, selectedBuy]}
        onSelect={(item) => setTrade(item)}
      >
        <S.Img src={(trade?.icon as string) || ""} alt="" />
        <span className="dropdown__trigger__label">
          {trade?.symbol}
          <br />
          <span>{trade?.label}</span>
        </span>
      </Dropdown>
    </S.Trade>
  );
};
