import React, { FC } from "react";

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
        <span
          style={{
            width: 25,
            height: 25,
            background: "rgba(255, 249, 249, 0.5)",
            borderRadius: "100%",
          }}
        />
        <span className="dropdown__trigger__label">
          <span>{trade?.label}</span>
          <br />
          Wrapped BNB
        </span>
      </Dropdown>
    </S.Trade>
  );
};
