/* eslint-disable react/no-array-index-key */
import React, { FC, useEffect } from "react";
import { useEthers } from "@usedapp/core";
import { useNavigate } from "react-router-dom";

import { Title, Description, Button } from "../../components/atoms";
import { CopyIcon } from "../../lib/icons";
import {
  claimAllRewards,
  claimAndBridgeAllRewards,
  claimReward,
  getRewardBalance,
} from "../../api/main/rewards";
import { Store, useLocalStore } from "./context";
import { useGlobalStore } from "../../store";

import * as S from "./style";

const Page: FC = () => {
  const { account, activateBrowserWallet } = useEthers();

  const {
    data: { rewards },
  } = useLocalStore();
  const {
    data: {
      chains: { selectedChain },
    },
  } = useGlobalStore();

  const referralLink: string = "split-fi.x/ref/user123";

  useEffect(() => {
    if (!account) {
      return;
    }

    (async function () {
      const { data } = await getRewardBalance({
        user: account,
        allChains: true,
      });
      console.log(data);
    })();
  }, [account]);

  const handleClaimReward = async (token: string) => {
    const {
      data: { result },
    } = await claimReward({
      trader: account,
      traderSig: localStorage.getItem("signature"),
      token,
    });
    console.log(result);
  };

  const handleClaimAllRewards = async () => {
    const {
      data: { result },
    } = await claimAllRewards({
      trader: account,
      traderSig: localStorage.getItem("signature"),
    });

    console.log(result);
  };

  const handleAndBridgeClaimAllRewards = async () => {
    const {
      data: { result },
    } = await claimAndBridgeAllRewards({
      trader: account,
      traderSig: localStorage.getItem("signature"),
    });

    console.log(result);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(referralLink);
  };

  if (!account) {
    return (
      <S.Referral center>
        <Title>Connect your wallet to view this page</Title>
        <Button onClick={activateBrowserWallet}>Connect wallet</Button>
      </S.Referral>
    );
  }

  return (
    <S.Referral>
      <S.MainWrapper>
        <S.Wrapper>
          <Title>Claim Rewards</Title>
          <Description>
            <S.List>
              <li>Lock SPLX as veSPLX to get share 2% of protocol revenue</li>
              <li>
                Get cashback from every trade which triggered arbs, up to 60%
                from arbitrage profit
              </li>
              <li>
                Invite friends and get 1% (1 lvl) and 0.2%(2 lvl) from their arb
                cashbacks
              </li>
              <li>
                If you have followers who copy your trades you will recieved 5%
                from their arb profits
              </li>
            </S.List>

            <S.Link>
              Your referral link:{" "}
              <S.LinkHref href={`https://${referralLink}`}>
                {referralLink}
              </S.LinkHref>
              <S.LinkButton type="button" onClick={handleCopy}>
                <CopyIcon />
              </S.LinkButton>
            </S.Link>
          </Description>
        </S.Wrapper>
        <S.Wrapper>
          <S.EarnedTitle>
            You earned <span>123456$</span> in total
          </S.EarnedTitle>
          <S.EarnedTitle>
            Available to claim <span>200$</span>
          </S.EarnedTitle>
          <S.ActionButtons>
            <Button size="middle" onClick={handleClaimAllRewards}>
              Claim all
            </Button>
            <Button size="middle" onClick={handleAndBridgeClaimAllRewards}>
              Claim all & bridge
            </Button>
          </S.ActionButtons>
        </S.Wrapper>
      </S.MainWrapper>
      <S.StatsWrapper>
        <Title>Claim rewards</Title>
        <S.Link>
          Your referral link:{" "}
          <S.LinkHref href={`https://${referralLink}`}>
            {referralLink}
          </S.LinkHref>
          <S.LinkButton type="button" onClick={handleCopy}>
            <CopyIcon />
          </S.LinkButton>
        </S.Link>

        <S.Stats>
          <S.StatsTitle>Reward list</S.StatsTitle>
          <S.TableWrapper>
            <S.Table>
              <thead>
                <tr>
                  <S.TableHeaderItem>Network</S.TableHeaderItem>
                  <S.TableHeaderItem>veSPLX</S.TableHeaderItem>
                  <S.TableHeaderItem>Cashback</S.TableHeaderItem>
                  <S.TableHeaderItem>Ref 1lvl (12)</S.TableHeaderItem>
                  <S.TableHeaderItem>Ref 2lvl (34) </S.TableHeaderItem>
                  <S.TableHeaderItem>Followers (3)</S.TableHeaderItem>
                  <S.TableHeaderItem>Total</S.TableHeaderItem>
                  <S.TableHeaderItem>Available</S.TableHeaderItem>
                  <S.TableHeaderItem />
                </tr>
              </thead>
              <tbody>
                {rewards.map((item, index) => (
                  <S.Row key={`${item.Balance}-${index}`}>
                    <S.TableItem>{selectedChain?.label}</S.TableItem>
                    <S.TableItem>{item.VE}</S.TableItem>
                    <S.TableItem>{item.Cashback}</S.TableItem>
                    <S.TableItem>{item.RefLvl1}</S.TableItem>
                    <S.TableItem>{item.RefLvl2}</S.TableItem>
                    <S.TableItem>{item.Followers}</S.TableItem>
                    <S.TableItem>{item.Total}</S.TableItem>
                    <S.TableItem>{item.Balance}</S.TableItem>
                    <S.TableItem>
                      <Button
                        size="small"
                        onClick={() => handleClaimReward("ETH")}
                      >
                        Claim
                      </Button>
                    </S.TableItem>
                  </S.Row>
                ))}
              </tbody>
            </S.Table>
          </S.TableWrapper>
        </S.Stats>
      </S.StatsWrapper>
    </S.Referral>
  );
};

export const ReferralPage = () => (
  <Store>
    <Page />
  </Store>
);
