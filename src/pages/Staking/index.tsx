/* eslint-disable react/no-array-index-key */
import React, { FC, useEffect, useState } from "react";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEthers } from "@usedapp/core";

import { Contract, ethers } from "ethers";
import { staking } from "../../lib/mock/staking";
import { StakingCard, WithdrawModal } from "../../components/molecules";
import { Title, Description } from "../../components/atoms";
import { useUser } from "../../store";
import { ActionsObject, Store, useLocalStore } from "./context";

import * as S from "./style";
import { contracts } from "../../config/contracts";
import { DepositModal } from "./components";

const Page: FC = () => {
  const { library } = useEthers();

  const [isWithdraw, setIsWithdraw] = useState<boolean>(false);
  const [contract, setContract] = useState<null | Contract>(null);

  const {
    data: { balance },
  } = useUser();

  const localStore = useLocalStore();
  const {
    selectedCard,
    stateToken,
    withdraw: { lpTokens, tokensInMoney, tokensReturned },
  } = localStore.data;
  const { setSelectedCard, setLpTokens, setWithdraw } =
    localStore.actions as ActionsObject;

  useEffect(() => {
    if (library?.getSigner) {
      const signer = library?.getSigner();

      if (!signer) {
        return;
      }

      setContract(
        new ethers.Contract(contracts.pool.address, contracts.pool.abi, signer),
      );
    }
  }, [library]);

  useEffect(() => {
    if (contract && !Number.isNaN(parseInt(stateToken, 10))) {
      (async function () {
        setLpTokens(await contract.calculateLP(stateToken));
      })();
    }
  }, [contract, stateToken]);

  useEffect(() => {
    if (contract && !Number.isNaN(parseInt(lpTokens, 10))) {
      (async function () {
        const tokens = await contract.calculateAmount(lpTokens);

        setWithdraw({
          tokensReturned: tokens,
        });
      })();
    }
  }, [contract, lpTokens]);

  const getDescription = () => (
    <Description>
      Native assets are used by the protocol for flashloans and arbitrage deals.
      You can stake these coins to provide liquidity and make money from it,
      essentially a new tool for staking native network coins
      <br />
      <br />
      The protocol distributes 10% of arbitrage and 60% of flashloan profits to
      LP&apos;s
    </Description>
  );

  const handleSubmit = async () => {
    if (!contract) {
      return;
    }

    await contract.deposit(stateToken);

    setSelectedCard(null);
  };

  const handleWithdrawSubmit = async () => {
    if (!contract) {
      return;
    }

    await contract.withdraw(lpTokens);

    setSelectedCard(null);
    setIsWithdraw(false);
  };

  return (
    <>
      <DepositModal handleSubmit={handleSubmit} />
      <WithdrawModal
        isVisible={!!selectedCard && isWithdraw}
        setIsVisible={() => {
          setSelectedCard(null);
          setIsWithdraw(false);
        }}
        handleSubmit={handleWithdrawSubmit}
        lpTokens={lpTokens}
        setLpTokens={(value) => setWithdraw({ lpTokens: value })}
        tokensReturned={tokensReturned}
        tokensInMoney={tokensInMoney}
        balanceInLp="12"
        icon="https://place-hold.it/64x64"
        title={selectedCard?.title}
      />
      <S.Staking>
        <S.Wrapper>
          <Title>Stake and Earn protocol profits</Title>
          {getDescription()}
        </S.Wrapper>
        <S.Wrapper>
          <Swiper
            modules={[Pagination]}
            slidesPerView={1}
            spaceBetween={0}
            pagination={{
              clickable: true,
              el: ".custom-pagination",
              renderBullet: (index, className) => `
              <span class="${className}">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="8" cy="8" r="2" fill="currentColor" />
                  <circle cx="8" cy="8" r="4.5" stroke="currentColor" />
                </svg>
              </span>
            `,
            }}
          >
            {staking.cards.map((item, index) => (
              <SwiperSlide key={`${item.title}-${index}`}>
                <StakingCard
                  title={item.title}
                  list={item.list}
                  handleDeposit={() =>
                    setSelectedCard({
                      title: item.title,
                      roi: "1 200 000",
                      lp: "1.2",
                      currency: item.currency,
                    })
                  }
                  handleWithdraw={() => {
                    setSelectedCard({
                      title: item.title,
                      roi: "1 200 000",
                      lp: "1.2",
                      currency: item.currency,
                    });
                    setIsWithdraw(true);
                  }}
                  icon="https://place-hold.it/64x64"
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="custom-pagination" />
        </S.Wrapper>
        <S.Description>{getDescription()}</S.Description>
      </S.Staking>
    </>
  );
};

export const StakingPage = () => (
  <Store>
    <Page />
  </Store>
);
