/* eslint-disable react/no-array-index-key */
import React, { FC, useEffect, useState } from "react";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { useEthers } from "@usedapp/core";
import { Contract, ethers } from "ethers";
import {
  Title,
  Description,
  Modal,
  Input,
  Dropdown,
  Button,
  Popup,
} from "../../components/atoms";
import { lmx } from "../../lib/mock/lmx";
import { StakingCard, WithdrawModal } from "../../components/molecules";

import * as S from "./style";
import * as Card from "../../components/molecules/StakingCard/style";
import { useUser, useVeSPLX } from "../../store";
import { contracts } from "../../config/contracts";
import { SPLX_ADDRESS } from "../../config/common";
import { DepositModal } from "./components";

export const lockPeriodes = [
  {
    value: "0",
    label: "1 Month",
  },
  {
    value: "1",
    label: "3 Months",
  },
  {
    value: "2",
    label: "6 Months",
  },
  {
    value: "3",
    label: "1 Year",
  },
];

export const LMX: FC = () => {
  const { library } = useEthers();

  const [isDeposit, setIsDeposit] = useState<boolean>(false);
  const [isWithdraw, setIsWithdraw] = useState<boolean>(false);
  const [contract, setContract] = useState<null | Contract>(null);
  const [poolContract, setPoolContract] = useState<null | Contract>(null);

  const {
    data: {
      lockPeriod,
      lockSPLX,
      withdraw: { lpTokens, tokensReturned, tokensInMoney },
    },
    actions: { setLockPeriod, setLockSPLX, setWithdraw },
  } = useVeSPLX();

  useEffect(() => {
    if (library?.getSigner) {
      const signer = library.getSigner();

      setContract(
        new ethers.Contract(
          contracts.veToken.address,
          contracts.veToken.abi,
          signer,
        ),
      );
      setPoolContract(
        new ethers.Contract(contracts.pool.address, contracts.pool.abi, signer),
      );
    }
  }, [library]);

  useEffect(() => {
    if (poolContract && !Number.isNaN(parseInt(lpTokens, 10))) {
      (async function () {
        const tokens = await poolContract.calculateAmount(lpTokens);

        setWithdraw({
          tokensReturned: tokens,
        });
      })();
    }
  }, [lpTokens, poolContract]);

  const getFirstDescription = () => (
    <Description>
      Lock SPLX to Earn all native network coins simultaneously
      <br />
      <br />
    </Description>
  );

  const getRewardsDescription = () => (
    <span className="lmx__rewards-description">
      <Description>
        Holders can lock SPLX for a certain period of time to get veSPLX, which
        allows them right to receive a share of the profits on each network
        <S.Description>
          <S.DescriptionWrapper>
            <S.DescriptionTitle>Time Lock</S.DescriptionTitle>
            <S.DescriptionContent>
              1 Month: 1 SPLX = 0.1 veSPLX <br />3 Months: 1 SPLX = 0.25 veSPLX{" "}
              <br />6 Months: 1 SPLX = 0.5 veSPLX <br />
              1 Year: 1 SPLX = 1 veSPLX
              <br />
              <br />
              The protocol allocates 2% of the total protocol profit in each
              network and distributes it to veSPLX holders
              <br />
              <br />
              Lock SPLX and get rewards in WETH, WBNB, WMATIC, WFTM, WAVAX,
              arbitrum WETH
            </S.DescriptionContent>
          </S.DescriptionWrapper>
        </S.Description>
      </Description>
    </span>
  );

  const getDescription = () => (
    <Description>
      {getFirstDescription()}
      {getRewardsDescription()}
    </Description>
  );

  const handleSubmit = async () => {
    if (!contract) {
      return;
    }

    await contract.deposit(lockSPLX, lockPeriod.value, SPLX_ADDRESS);

    setIsDeposit(false);
  };

  const handleSubmitWithdraw = async () => {
    if (!contract) {
      return;
    }

    await contract.withdraw(lpTokens);

    setIsWithdraw(false);
  };

  return (
    <>
      <DepositModal
        isVisible={isDeposit}
        setIsVisible={setIsDeposit}
        handleSubmit={handleSubmit}
      />
      <WithdrawModal
        isVisible={isWithdraw}
        setIsVisible={setIsWithdraw}
        handleSubmit={handleSubmitWithdraw}
        lpTokens={lpTokens}
        setLpTokens={(value) => setWithdraw({ lpTokens: value })}
        tokensReturned={tokensReturned}
        tokensInMoney={tokensInMoney}
        balanceInLp="1.2"
        title="LMX"
        icon="/assets/split-tech.png"
      />
      <S.LMX>
        <S.Wrapper>
          <Title>Lock SPLX to Earn protocol profits</Title>
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
            {lmx.cards.map((card, index) => (
              <SwiperSlide key={`${card.title}-${index}`}>
                <StakingCard
                  title={card.title}
                  list={card.list}
                  handleDeposit={() => setIsDeposit(true)}
                  handleWithdraw={() => setIsWithdraw(true)}
                  tokens={card.tokens}
                  icon="/assets/split-tech.png"
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="custom-pagination" />
        </S.Wrapper>
        <S.DescriptionMainWrapper>
          {getFirstDescription()}
          {getRewardsDescription()}
        </S.DescriptionMainWrapper>
      </S.LMX>
    </>
  );
};
