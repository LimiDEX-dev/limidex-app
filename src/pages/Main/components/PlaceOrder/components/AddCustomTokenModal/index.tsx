import React, { FC } from "react";

import { Input, Checkbox, Modal } from "../../../../../../components/atoms";
import { CoinDescription } from "../../../../../../components/molecules";
import { SearchIcon } from "../../../../../../lib/icons";
import { ethereumAddressRegexp } from "../../../../../../lib/constants";
import { useLocalStore, ActionsObject } from "../../../../context";

import * as S from "./style";

export const AddCustomTokenModal: FC = () => {
  const localStore = useLocalStore();
  const {
    addCustomToken: {
      isAddCustomTokenVisible,
      customToken,
      isAddressValid,
      isUnderstandChecked,
      tokenInfo,
      isTokenInfoVisible,
      lastViewedToken,
    },
  } = localStore.data;
  const {
    addCustomToken: {
      setIsAddCustomTokenVisible,
      setCustomToken,
      setIsAddressValid,
      setIsUnderstandChecked,
      setTokenInfo,
      setIsTokenInfoVisible,
      setLastViewedToken,
    },
  } = localStore.actions as ActionsObject;

  const handleAddToken = () => {
    setIsAddCustomTokenVisible(false);
    setIsUnderstandChecked(false);
    setCustomToken("");
  };

  const handleBlurCustomToken = (value: string) => {
    if (ethereumAddressRegexp.test(value)) {
      setIsAddressValid(true);

      if (lastViewedToken !== value) {
        setTokenInfo({
          title: "DOGI Coin",
          pot: "example value",
          fee: "example value",
          proxyContract: "example value",
          verifiedContract: "example value",
          holders: "example value",
          supply: "example value",
        });
        setIsTokenInfoVisible(true);

        setLastViewedToken(value);
      }

      return;
    }

    setIsAddressValid(false);
    setLastViewedToken("");
  };

  return (
    <Modal
      isVisible={isAddCustomTokenVisible}
      handleClose={() => setIsAddCustomTokenVisible(false)}
      title="Add custom token"
    >
      <CoinDescription
        coin={tokenInfo}
        handleClose={() => setIsTokenInfoVisible(false)}
        isVisible={isTokenInfoVisible}
      />
      <Input
        value={customToken}
        onChange={setCustomToken}
        onBlur={handleBlurCustomToken}
        icon={<SearchIcon />}
      />
      {!isAddressValid && <S.Error>Invalid token address</S.Error>}
      <S.ModalText>
        <S.ModalTextTitle>Trade at your own risk</S.ModalTextTitle>
        <S.ModalTextDescription>
          Curabitur rhoncus facilisis lacus, sit amet luctus tortor consectetur
          a. Nullam vitae dapibus leo, ac elementum elit. Donec congue turpis id
          orci vulputate, sit amet faucibus velit pellentesque.
        </S.ModalTextDescription>
      </S.ModalText>
      <Checkbox checked={isUnderstandChecked} onChange={setIsUnderstandChecked}>
        I understand
      </Checkbox>
      <S.StyledButton
        disabled={!isUnderstandChecked || !customToken || !isAddressValid}
        onClick={handleAddToken}
      >
        Add token
      </S.StyledButton>
    </Modal>
  );
};
