/* eslint-disable react/no-array-index-key */
import React, { FC, useEffect } from "react";
import { useSwiper } from "swiper/react";
import { Button } from "../../atoms";

import { StakingCardProps } from "./types";

import * as S from "./style";

export const StakingCard: FC<StakingCardProps> = ({
  title,
  list,
  tokens,
  handleDeposit,
}) => {
  const swiper = useSwiper();

  useEffect(() => {
    if (!swiper) {
      return;
    }

    const handleResize = (event: Event) => {
      const window = event.target as Window;

      if (window.innerWidth >= 1200) {
        swiper.disable();
        return;
      }

      swiper.enable();
    };

    window.addEventListener("resize", handleResize);

    if (window.innerWidth >= 1200) {
      swiper.disable();
    } else {
      swiper.enable();
    }

    // eslint-disable-next-line consistent-return
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [swiper]);

  return (
    <S.StakingCard>
      <S.Header>
        <S.HeaderPhoto />
        <S.HeaderTitle>{title}</S.HeaderTitle>
      </S.Header>
      <S.List>
        {list.map((item, index) => (
          <S.Item key={`${item.title}-${index}`}>
            <S.ItemTitle>{item.title}</S.ItemTitle>
            <S.ItemWrapper>
              <S.ItemTitle>{item.currency}</S.ItemTitle>
              <S.ItemDescr>{item.descr}</S.ItemDescr>
            </S.ItemWrapper>
          </S.Item>
        ))}
      </S.List>
      {tokens && (
        <>
          <S.TokensTitle>Your tokens will be unlocked</S.TokensTitle>
          <S.Tokens>
            {tokens.map((item, index) => (
              <S.TokensItem key={`${item.date}-${index}`}>
                <S.TokensItemBullet />
                <S.TokensItemText>{item.date}</S.TokensItemText>
                <S.TokensItemText>{item.lmx}</S.TokensItemText>
              </S.TokensItem>
            ))}
          </S.Tokens>
        </>
      )}
      <S.Actions>
        <Button onClick={handleDeposit}>Deposit</Button>
        <Button disabled>Withdraw</Button>
      </S.Actions>
    </S.StakingCard>
  );
};
