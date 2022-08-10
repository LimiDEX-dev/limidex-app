import React, { FC } from "react";

import { ActionsObject, useLocalStore } from "../../../../context";
import { DropdownArrowIcon } from "../../../../../../lib/icons";
import { Button, Input, Popup } from "../../../../../../components/atoms";

import * as S from "./style";

export const PlaceOrderAdvanced: FC = () => {
  const localStore = useLocalStore();

  const {
    advanced: { isAdvancedOpened, takeProfit, stopLoss, trailingSL },
  } = localStore.data;
  const {
    advanced: {
      setIsAdvancedOpened,
      setTakeProfit,
      setStopLoss,
      setTrailingSL,
    },
  } = localStore.actions as ActionsObject;

  return (
    <>
      <S.More
        type="button"
        isOpened={isAdvancedOpened}
        onClick={() => setIsAdvancedOpened(!isAdvancedOpened)}
      >
        Advanced
        <DropdownArrowIcon />
      </S.More>

      {isAdvancedOpened && (
        <S.Advanced>
          <S.AdvancedInputs>
            <Input
              value={takeProfit}
              onChange={setTakeProfit}
              label={
                <Popup content="Lorem ipsum dolor sit amet" width={100}>
                  <span className="input__flex-label">Take profit</span>
                </Popup>
              }
            />
            <Input
              value={stopLoss}
              onChange={setStopLoss}
              label={
                <Popup content="Lorem ipsum dolor sit amet" width={100}>
                  <span className="input__flex-label">Stop loss</span>
                </Popup>
              }
            />
            <Input
              value={trailingSL}
              onChange={setTrailingSL}
              label={
                <Popup content="Lorem ipsum dolor sit amet" width={100}>
                  <span className="input__flex-label">Trailing SL</span>
                </Popup>
              }
              currency="%"
            />
          </S.AdvancedInputs>
          <S.AdvancedSubmit>
            <Button size="small" onClick={() => setIsAdvancedOpened(false)}>
              OK
            </Button>
          </S.AdvancedSubmit>
        </S.Advanced>
      )}
    </>
  );
};
