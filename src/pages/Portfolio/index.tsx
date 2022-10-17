/* eslint-disable react/no-array-index-key */
import React, { FC, useEffect, useState } from "react";
import { useEthers } from "@usedapp/core";

import { portfolio } from "../../lib/mock/portfolio";
import { NetworkItem, Button, Modal, Input } from "../../components/atoms";
import {
  PortfolioTable,
  PortfolioTableFields,
} from "../../components/molecules/PortfolioTable";
import { SortType } from "../../components/atoms/Sort";
import { useTokensData } from "./lib/hooks";
import { ActionsObject, useLocalStore, Store } from "./context";
import {
  changeFollowStatus,
  getMasterTradersPagesCount,
  getMasterTrades,
} from "../../api/main/traders";

import * as S from "./style";
import { getRefAndFollowStats } from "../../api/main/rewards";

const Page: FC = () => {
  useTokensData();
  const { account } = useEthers();

  const [activeNetwork, setActiveNetwork] = useState<number>(0);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [networks, setNetworks] = useState(portfolio.networks);
  const [sort, setSort] = useState<{
    field: PortfolioTableFields;
    by: SortType;
  }>({ field: "type", by: "no" });
  const [masterTraderAddress, setMasterTraderAddress] = useState<string>("");
  const [tokenValue, setTokenValue] = useState<string>("100");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const localStore = useLocalStore();
  const {
    wallet: { data: wallet, page, pagesCount },
    traders: { traders, pagesCount: tradersPagesCount, currentPage },
    user: { followers, following, refsLvl1Count },
  } = localStore.data;
  const {
    wallet: { setPage },
    traders: {
      setTraders,
      setPagesCount,
      setCurrentPage,
      handleChangeFollowStatus,
    },
    setUser,
  } = localStore.actions as ActionsObject;

  useEffect(() => {
    (async function () {
      const { data } = await getMasterTradersPagesCount();
      const { data: user } = await getRefAndFollowStats();

      setPagesCount(data.result);
      setUser(user.result);
    })();
  }, []);

  useEffect(() => {
    if (!pagesCount) {
      return;
    }

    (async function () {
      const data = await getMasterTrades({
        page: currentPage,
        trader: account,
      });

      setTraders(data.data.result);
    })();
  }, [pagesCount, currentPage]);

  const handleChangeActiveNetwork = (index: number) => {
    setActiveNetwork(index);

    if (activeNetwork === 0) {
      setSort({ field: "type", by: "no" });

      return;
    }

    setSort({ field: "network", by: "no" });
  };

  const handleFollow = (masterTrader: string) => {
    setMasterTraderAddress(masterTrader);
  };

  const submitFollow = async () => {
    setIsLoading(true);

    const data = await changeFollowStatus({
      trader: account,
      traderSig: localStorage.getItem("signature"),
      // TODO put masterTrader
      masterTrader: masterTraderAddress,
    });
    console.log(data);

    handleChangeFollowStatus({
      address: masterTraderAddress,
      isFollow: data.data.result.operation === "follow",
    });
    setMasterTraderAddress("");
  };

  return (
    <S.Portfolio>
      <Modal
        isVisible={!!masterTraderAddress}
        handleClose={() => setMasterTraderAddress("")}
      >
        <S.ModalTitle>
          Are you sure you want to follow for this trader? After that you will
          start copying his trades
          <br /> <br />
          Set allowed volume to copy trades
        </S.ModalTitle>
        <S.ModalActions>
          <Input
            value={tokenValue}
            onChange={setTokenValue}
            type="number"
            max={100}
            topLabel="Token value"
            min={0}
            currency="%"
          />
          <Button size="middle" disabled={isLoading} onClick={submitFollow}>
            Subscribe
          </Button>
        </S.ModalActions>
      </Modal>
      <S.Info>
        <S.InfoWrapper>
          <S.InfoWallet>
            <S.InfoWalletTitle>{account}</S.InfoWalletTitle>
            <Button size="middle">Share</Button>
            <Button size="middle">Follow</Button>
          </S.InfoWallet>
          <S.InfoStats>
            <S.InfoStatsItem>
              Following <span>{following}</span>
            </S.InfoStatsItem>
            <S.InfoStatsItem>
              Followers <span>{followers}</span>
            </S.InfoStatsItem>
          </S.InfoStats>
          <S.InfoRewards>
            <S.InfoBalanceTitle>Rewards: ${refsLvl1Count}</S.InfoBalanceTitle>
          </S.InfoRewards>
        </S.InfoWrapper>
        <S.InfoWrapper>
          <S.InfoBalance>
            <S.InfoBalanceTitle>Balance: ${refsLvl1Count}</S.InfoBalanceTitle>
            <S.InfoBalanceTags>
              <S.InfoBalanceTag red>
                Weekly PnL: <span>-10%</span>
              </S.InfoBalanceTag>
              <S.InfoBalanceTag green>
                Monthly PnL: <span>10%</span>
              </S.InfoBalanceTag>
              <S.InfoBalanceTag green>
                Quarterly PnL: <span>124%</span>
              </S.InfoBalanceTag>
            </S.InfoBalanceTags>
          </S.InfoBalance>
        </S.InfoWrapper>
      </S.Info>
      <S.List>
        {networks.map((item, index) => (
          <NetworkItem
            title={item.title}
            isActive={index === activeNetwork}
            handleChange={() => handleChangeActiveNetwork(index)}
            key={`${item.title}-${index}`}
          />
        ))}
      </S.List>
      <S.Title>All assets - 12453$</S.Title>
      <PortfolioTable
        sort={sort}
        handleChangeSort={setSort}
        trading={traders}
        wallet={wallet}
        activeNetwork={activeNetwork}
        handleFollow={handleFollow}
        pagesCount={pagesCount}
        currentPage={page}
        handleChangePage={setPage}
      />
    </S.Portfolio>
  );
};

export const PortfolioPage = () => (
  <Store>
    <Page />
  </Store>
);
