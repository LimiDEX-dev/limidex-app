import React, { FC, useState } from "react";

import { Input, Checkbox, Modal } from "../../../../../../components/atoms";
import { CoinDescription } from "../../../../../../components/molecules";
import { SearchIcon } from "../../../../../../lib/icons";
import { ethereumAddressRegexp } from "../../../../../../lib/constants";
import { useLocalStore, ActionsObject } from "../../../../context";

import * as S from "./style";
import { handleCheckTokens } from "../../../../../../api/main/trade";

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
      isTokenValid,
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
      setIsTokenValid,
    },
  } = localStore.actions as ActionsObject;

  const [isFieldBlured, setIsFieldBlured] = useState<boolean>(false);

  const handleAddToken = () => {
    setIsAddCustomTokenVisible(false);
    setIsUnderstandChecked(false);
    setCustomToken("");
  };

  const handleBlurCustomToken = async (value: string) => {
    if (!isFieldBlured) {
      setIsFieldBlured(true);
    }

    if (ethereumAddressRegexp.test(value)) {
      setIsAddressValid(true);

      if (lastViewedToken !== value) {
        const {
          data: { result },
        } = await handleCheckTokens([value]);

        if (!result[value]) {
          setIsTokenValid(false);

          return;
        }

        setIsTokenValid(true);
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
      {!isAddressValid && isFieldBlured && (
        <S.Error>Invalid token address</S.Error>
      )}
      {isAddressValid && (
        <S.Error>
          the token is not suitable according to the rules of the platform
        </S.Error>
      )}
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
        disabled={
          !isUnderstandChecked ||
          !customToken ||
          !isAddressValid ||
          !isTokenValid
        }
        onClick={handleAddToken}
      >
        Add token
      </S.StyledButton>
    </Modal>
  );
};
