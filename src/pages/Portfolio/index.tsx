/* eslint-disable react/no-array-index-key */
import React, { FC, useState } from "react";

import { portfolio } from "../../lib/mock/portfolio";
import { NetworkItem, Button, Modal, Input } from "../../components/atoms";
import {
  PortfolioTable,
  PortfolioTableFields,
} from "../../components/molecules/PortfolioTable";
import { SortType } from "../../components/atoms/Sort";
import { useTokensData } from "./lib/hooks";

import * as S from "./style";
import { usePortfolio } from "../../store";

export const Portfolio: FC = () => {
  useTokensData();

  const [activeNetwork, setActiveNetwork] = useState<number>(0);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [networks, setNetworks] = useState(portfolio.networks);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [trading, setTrading] = useState(portfolio.trading);
  const [sort, setSort] = useState<{
    field: PortfolioTableFields;
    by: SortType;
  }>({ field: "type", by: "no" });
  const [isFollowModal, setIsFollowModal] = useState<boolean>(false);
  const [tokenValue, setTokenValue] = useState<string>("100");

  const {
    data: {
      wallet: { data: wallet, page, pagesCount },
    },
    actions: {
      wallet: { setPage },
    },
  } = usePortfolio();

  const handleChangeActiveNetwork = (index: number) => {
    setActiveNetwork(index);

    if (activeNetwork === 0) {
      setSort({ field: "type", by: "no" });

      return;
    }

    setSort({ field: "network", by: "no" });
  };

  const handleFollow = () => {
    setIsFollowModal(true);
  };

  return (
    <S.Portfolio>
      <Modal
        isVisible={isFollowModal}
        handleClose={() => setIsFollowModal(false)}
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
          <Button size="middle" onClick={() => setIsFollowModal(false)}>
            Subscribe
          </Button>
        </S.ModalActions>
      </Modal>
      <S.Info>
        <S.InfoWrapper>
          <S.InfoWallet>
            <S.InfoWalletTitle>
              0x039e1e57a1a1028819f7ecd11d67b49b86316e37
            </S.InfoWalletTitle>
            <Button size="middle">Share</Button>
            <Button size="middle">Follow</Button>
          </S.InfoWallet>
          <S.InfoStats>
            <S.InfoStatsItem>
              Following <span>0</span>
            </S.InfoStatsItem>
            <S.InfoStatsItem>
              Followers <span>0</span>
            </S.InfoStatsItem>
          </S.InfoStats>
          <S.InfoRewards>
            <S.InfoBalanceTitle>Rewards: $12,357,554</S.InfoBalanceTitle>
          </S.InfoRewards>
        </S.InfoWrapper>
        <S.InfoWrapper>
          <S.InfoBalance>
            <S.InfoBalanceTitle>Balance: $12,357,554</S.InfoBalanceTitle>
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
        trading={trading}
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
