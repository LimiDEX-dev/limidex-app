/* eslint-disable react/no-array-index-key */
import React, { FC, useEffect, useState } from "react";

import { useEthers, useTokenBalance } from "@usedapp/core";
import { ethers } from "ethers";
import { Sort, Button, Pagination } from "../../atoms";

import { PortfolioTableProps, PortfolioTableFields } from "./types";

import * as S from "./style";
import { useChains } from "../../../store";
import { contracts } from "../../../config/contracts";

export type { PortfolioTableFields };

export const PortfolioTable: FC<PortfolioTableProps> = ({
  sort,
  handleChangeSort,
  trading,
  wallet,
  activeNetwork,
  handleFollow,
  pagesCount,
  currentPage,
  handleChangePage,
}) => {
  const [balances, setBalances] = useState([]);
  const { account, library } = useEthers();
  const {
    data: { selectedChain },
  } = useChains();

  useEffect(() => {
    if (wallet.length && account) {
      (async function () {
        const signer = library.getSigner();
        const contract = new ethers.Contract(
          contracts.router.address,
          contracts.router.abi,
          signer,
        );

        const tokensBalances = await contract.getUserBalances(
          account,
          wallet.map((item) => item.address),
        );
        console.log(tokensBalances);
      })();
    }
  }, [wallet, account]);

  return (
    <>
      <S.PortfolioTable>
        <S.Table>
          <thead>
            {activeNetwork === 0 ? (
              <tr className="portfolio-table__row">
                <S.TableHeaderItem>
                  <Sort
                    sort={sort.field === "type" ? sort.by : "no"}
                    onChange={(by) => handleChangeSort({ field: "type", by })}
                    isWordSort
                  >
                    Type
                  </Sort>
                </S.TableHeaderItem>
                <S.TableHeaderItem>
                  <Sort
                    sort={sort.field === "name" ? sort.by : "no"}
                    onChange={(by) => handleChangeSort({ field: "name", by })}
                    isWordSort
                  >
                    Name
                  </Sort>
                </S.TableHeaderItem>
                <S.TableHeaderItem>
                  <Sort
                    sort={sort.field === "balance" ? sort.by : "no"}
                    onChange={(by) =>
                      handleChangeSort({ field: "balance", by })
                    }
                  >
                    Balance
                  </Sort>
                </S.TableHeaderItem>
                <S.TableHeaderItem>
                  <Sort
                    sort={sort.field === "deals" ? sort.by : "no"}
                    onChange={(by) => handleChangeSort({ field: "deals", by })}
                  >
                    Deals
                  </Sort>
                </S.TableHeaderItem>
                <S.TableHeaderItem>
                  <Sort
                    sort={sort.field === "followers" ? sort.by : "no"}
                    onChange={(by) =>
                      handleChangeSort({ field: "followers", by })
                    }
                  >
                    Followers
                  </Sort>
                </S.TableHeaderItem>
                <S.TableHeaderItem>
                  <Sort
                    sort={sort.field === "pnl" ? sort.by : "no"}
                    onChange={(by) => handleChangeSort({ field: "pnl", by })}
                  >
                    PnL
                  </Sort>
                </S.TableHeaderItem>
                <S.TableHeaderItem />
              </tr>
            ) : (
              <tr className="portfolio-table__row">
                <S.TableHeaderItem>
                  <Sort
                    sort={sort.field === "network" ? sort.by : "no"}
                    onChange={(by) =>
                      handleChangeSort({ field: "network", by })
                    }
                    isWordSort
                  >
                    Network
                  </Sort>
                </S.TableHeaderItem>
                <S.TableHeaderItem>
                  <Sort
                    sort={sort.field === "coin" ? sort.by : "no"}
                    onChange={(by) => handleChangeSort({ field: "coin", by })}
                    isWordSort
                  >
                    Coin
                  </Sort>
                </S.TableHeaderItem>
                <S.TableHeaderItem>
                  <Sort
                    sort={sort.field === "balance" ? sort.by : "no"}
                    onChange={(by) =>
                      handleChangeSort({ field: "balance", by })
                    }
                  >
                    Balance
                  </Sort>
                </S.TableHeaderItem>
                <S.TableHeaderItem>
                  <Sort
                    sort={sort.field === "price" ? sort.by : "no"}
                    onChange={(by) => handleChangeSort({ field: "price", by })}
                  >
                    Price, $
                  </Sort>
                </S.TableHeaderItem>
                <S.TableHeaderItem>
                  <Sort
                    sort={sort.field === "balanceUSD" ? sort.by : "no"}
                    onChange={(by) =>
                      handleChangeSort({ field: "balanceUSD", by })
                    }
                  >
                    Balance USD, $
                  </Sort>
                </S.TableHeaderItem>
                <S.TableHeaderItem>Approve</S.TableHeaderItem>
              </tr>
            )}
          </thead>
          <tbody>
            {activeNetwork === 0
              ? trading.map((item, index) => (
                  <tr
                    key={`${item.followers}-${index}`}
                    className="portfolio-table__row"
                  >
                    <td>
                      <S.TableItemWrapper>
                        <S.TableIcon />
                        <S.TableText>Trader</S.TableText>
                      </S.TableItemWrapper>
                    </td>
                    <td>
                      <S.TableItemWrapper>
                        <S.TableIcon />
                        <S.TableText>{item.masterTrader}</S.TableText>
                      </S.TableItemWrapper>
                    </td>
                    <td>
                      <S.TableItemWrapper>
                        {/* <S.TableText>{item.balance}</S.TableText> */}
                      </S.TableItemWrapper>
                    </td>
                    <td>
                      <S.TableItemWrapper>
                        <S.TableText>{item.dealsCount}</S.TableText>
                      </S.TableItemWrapper>
                    </td>
                    <td>
                      <S.TableItemWrapper>
                        <S.TableText>{item.followers}</S.TableText>
                      </S.TableItemWrapper>
                    </td>
                    <td>
                      <S.TableItemWrapper>
                        <S.TableText isUnderline>{item.tradeStat}</S.TableText>
                      </S.TableItemWrapper>
                    </td>
                    <td>
                      <S.TableItemWrapper>
                        {item.isFollowing ? (
                          <Button size="middle">Unfollow</Button>
                        ) : (
                          <Button
                            size="middle"
                            onClick={() => handleFollow(item.masterTrader)}
                          >
                            Follow
                          </Button>
                        )}
                      </S.TableItemWrapper>
                    </td>
                  </tr>
                ))
              : wallet.map((item, index) => (
                  <tr
                    key={`${item.symbol}-${index}`}
                    className="portfolio-table__row"
                  >
                    <td>
                      <S.TableItemWrapper>
                        {selectedChain.icon}
                        <S.TableText leftMargin>
                          {selectedChain.label}
                        </S.TableText>
                      </S.TableItemWrapper>
                    </td>
                    <td>
                      <S.TableItemWrapper>
                        <S.Icon src={item.icon} alt="" />
                        <S.TableText leftMargin>{item.symbol}</S.TableText>
                      </S.TableItemWrapper>
                    </td>
                    <td>
                      <S.TableItemWrapper>
                        <S.TableText>{item.balance}</S.TableText>
                      </S.TableItemWrapper>
                    </td>
                    <td>
                      <S.TableItemWrapper>
                        <S.TableText>{item.price}</S.TableText>
                      </S.TableItemWrapper>
                    </td>
                    <td>
                      <S.TableItemWrapper>
                        <S.TableText>{item.balanceUSD}</S.TableText>
                      </S.TableItemWrapper>
                    </td>
                    <td>
                      <S.TableItemWrapper>
                        <S.TableText isUnderline>
                          <Button size="small">Approve</Button>
                        </S.TableText>
                      </S.TableItemWrapper>
                    </td>
                  </tr>
                ))}
          </tbody>
        </S.Table>
      </S.PortfolioTable>
      <Pagination
        pagesCount={pagesCount}
        currentPage={currentPage}
        handleChangePage={handleChangePage}
      />
    </>
  );
};
