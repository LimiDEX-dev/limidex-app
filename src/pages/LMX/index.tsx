/* eslint-disable react/no-array-index-key */
import React, { FC, useEffect, useState } from "react";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { useEthers } from "@usedapp/core";
import { Contract, ethers } from "ethers";
import { Title, Description, Button } from "../../components/atoms";
import { lmx } from "../../lib/mock/lmx";
import { StakingCard, WithdrawModal } from "../../components/molecules";
import { Store, useLocalStore, ActionsObject } from "./context";
import { contracts } from "../../config/contracts";
import { SPLX_ADDRESS } from "../../config/common";
import { DepositModal } from "./components";

import * as S from "./style";

const splxToVeSplxByMonth = {
  1: 0.1,
  3: 0.25,
  6: 0.5,
  12: 1,
};

const Page: FC = () => {
  const { library, account } = useEthers();

  const [isDeposit, setIsDeposit] = useState<boolean>(false);
  const [isWithdraw, setIsWithdraw] = useState<boolean>(false);
  const [contract, setContract] = useState<null | Contract>(null);
  const [poolContract, setPoolContract] = useState<null | Contract>(null);
  const [lockMonth, setLockMonth] = useState(3);
  const [splx, setSplx] = useState<number | "">(0);
  const [splxBalance, setSplxBalance] = useState<number>(0);

  const localStore = useLocalStore();
  const {
    lockPeriod,
    lockSPLX,
    withdraw: { lpTokens, tokensReturned, tokensInMoney },
  } = localStore.data;
  const { setWithdraw } = localStore.actions as ActionsObject;

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
      // setPoolContract(
      //   new ethers.Contract(contracts.pool.address, contracts.pool.abi, signer),
      // );
    }
  }, [library]);

  useEffect(() => {
    if (contract && account) {
      (async function () {
        const balance = Number(await contract.balanceOf(account));

        setSplxBalance(balance);
      })();
    }
  }, [contract, account]);

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
          <Title>Lock SPLX for Real Yield</Title>
          <Description>
            10% of total MEV profits in each network distribute among veSPLX
            holders.
            <br />
            <br />
            <S.Link
              target="_blank"
              href="https://split-docs.gitbook.io/docs/fundamentals/tokenomics"
            >
              Learn more
            </S.Link>
          </Description>
        </S.Wrapper>
        <S.Wrapper>
          <S.Cards>
            <S.Card>
              <S.CardTitle>Your NFT Positions</S.CardTitle>
              <S.Table>
                <thead>
                  <tr>
                    <th>Token ID</th>
                    <th>SPLX / veSPLX</th>
                    <th>Days to unlock</th>
                    <th />
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <S.Cell>76</S.Cell>
                    <S.Cell>100/100</S.Cell>
                    <S.Cell>365</S.Cell>
                    <S.Cell>
                      <Button size="small">Withdraw</Button>
                    </S.Cell>
                  </tr>
                </tbody>
              </S.Table>

              <S.NftCardFooter>
                <S.Divider />
                Total Stake: 250 SPLX / 175 veSPLX
              </S.NftCardFooter>
            </S.Card>
            <S.Card>
              <S.CardTitle>Lock SPLX</S.CardTitle>
              <S.Lock>
                <S.LockHeader>
                  <S.LockAmount>Amount</S.LockAmount>
                  <S.LockBalance>Balance: 12</S.LockBalance>
                </S.LockHeader>
                <S.LockInput>
                  <S.LockInputContent>
                    <img src="/assets/logo-mobile.png" alt="" width={26} />
                    <S.LockInputText>SPLX</S.LockInputText>
                  </S.LockInputContent>
                  <S.LockInputDivider />
                  <S.LockInputComponent
                    value={splx}
                    onChange={({ target }) =>
                      Number.isNaN(parseInt(target.value, 10)) &&
                      target.value !== ""
                        ? null
                        : setSplx(parseInt(target.value, 10) || "")
                    }
                  />
                </S.LockInput>
                <S.LockButtons>
                  <S.LockButton
                    type="button"
                    isActive={lockMonth === 1}
                    onClick={() => setLockMonth(1)}
                  >
                    1M
                  </S.LockButton>
                  <S.LockButton
                    type="button"
                    isActive={lockMonth === 3}
                    onClick={() => setLockMonth(3)}
                  >
                    3M
                  </S.LockButton>
                  <S.LockButton
                    type="button"
                    isActive={lockMonth === 6}
                    onClick={() => setLockMonth(6)}
                  >
                    6M
                  </S.LockButton>
                  <S.LockButton
                    type="button"
                    isActive={lockMonth === 12}
                    onClick={() => setLockMonth(12)}
                  >
                    12M
                  </S.LockButton>
                </S.LockButtons>
                <S.LockList>
                  <S.LockListItem>
                    <S.LockListItemText>veSPLX Received</S.LockListItemText>
                    <S.LockListItemText isWhite>
                      {splx ? splx * splxToVeSplxByMonth[lockMonth] : 0}
                    </S.LockListItemText>
                  </S.LockListItem>
                  <S.LockListItem>
                    <S.LockListItemText>Total Staked SPLX</S.LockListItemText>
                    <S.LockListItemText isWhite>1.2M</S.LockListItemText>
                  </S.LockListItem>
                  <S.LockListItem>
                    <S.LockListItemText>% of Circ. Supply</S.LockListItemText>
                    <S.LockListItemText isWhite>5%</S.LockListItemText>
                  </S.LockListItem>
                  <S.LockListItem>
                    <S.LockListItemText>Total MEV Rewards</S.LockListItemText>
                    <S.LockListItemText isWhite>-</S.LockListItemText>
                  </S.LockListItem>
                  <S.LockListItem>
                    <S.LockListItemText>APY</S.LockListItemText>
                    <S.LockListItemText isWhite>5%</S.LockListItemText>
                  </S.LockListItem>
                </S.LockList>
                <S.LockAction>Lock SPLX</S.LockAction>
              </S.Lock>
            </S.Card>
            <S.Card>
              <S.CardTitle>Reward list</S.CardTitle>
              <S.Table>
                <thead>
                  <tr>
                    <th>Network Coin</th>
                    <th>Total</th>
                    <th>Available to claim</th>
                    <th />
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <S.Cell>
                      <S.CellCoin>
                        <S.CellCoinImageWrapper>
                          <img src="https://place-hold.it/30x30" alt="coin" />
                        </S.CellCoinImageWrapper>
                        <S.CellCoinTextWrapper>
                          <S.CellCoinText>WETH</S.CellCoinText>
                          <S.CellCoinText small>Ethereum</S.CellCoinText>
                        </S.CellCoinTextWrapper>
                      </S.CellCoin>
                    </S.Cell>
                    <S.Cell>72.67/$36.53</S.Cell>
                    <S.Cell>720.67/$360.53</S.Cell>
                    <S.Cell>
                      <Button size="small">Claim</Button>
                    </S.Cell>
                  </tr>
                </tbody>
              </S.Table>
            </S.Card>
          </S.Cards>
        </S.Wrapper>
      </S.LMX>
    </>
  );
};

export const LmxPage = () => (
  <Store>
    <Page />
  </Store>
);
