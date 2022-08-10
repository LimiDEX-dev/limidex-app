import React, { FC } from "react";

import { Checkbox } from "../../../../../../components/atoms";
import { ActionsObject, useLocalStore } from "../../../../context";

import * as S from "./style";

export const PlaceOrderHeader: FC = () => {
  const localStore = useLocalStore();

  const {
    ui: { orderTab, isExpertMode },
  } = localStore.data;
  const {
    ui: { setOrderTab, setIsExpertMode },
  } = localStore.actions as ActionsObject;

  return (
    <>
      {orderTab === "swap" && (
        <S.TitleWrapper>
          <Checkbox
            checked={isExpertMode}
            onChange={setIsExpertMode}
            type="switch"
          >
            Expert Mode
          </Checkbox>
        </S.TitleWrapper>
      )}
      <S.TabSwitch>
        <S.TabSwitchButton
          type="button"
          isActive={orderTab === "swap"}
          onClick={() => setOrderTab("swap")}
        >
          Swap
        </S.TabSwitchButton>
        <S.TabSwitchButton
          type="button"
          isActive={orderTab === "limit"}
          onClick={() => setOrderTab("limit")}
        >
          Limit
        </S.TabSwitchButton>
        <S.TabSwitchButton
          type="button"
          isActive={orderTab === "cross"}
          onClick={() => setOrderTab("cross")}
        >
          Cross-chain
        </S.TabSwitchButton>
      </S.TabSwitch>
    </>
  );
};
