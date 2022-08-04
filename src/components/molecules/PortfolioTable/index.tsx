/* eslint-disable react/no-array-index-key */
import React, { FC } from "react";

import { useEthers, useTokenBalance } from "@usedapp/core";
import { Sort, Button, Pagination } from "../../atoms";

import { PortfolioTableProps, PortfolioTableFields } from "./types";

import * as S from "./style";
import { useChains } from "../../../store";

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
  const { account } = useEthers();
  const {
    data: { selectedChain },
  } = useChains();

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
                    Deals Open/Close
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
                    key={`${item.type}-${index}`}
                    className="portfolio-table__row"
                  >
                    <td>
                      <S.TableItemWrapper>
                        <S.TableIcon />
                        <S.TableText>{item.type}</S.TableText>
                      </S.TableItemWrapper>
                    </td>
                    <td>
                      <S.TableItemWrapper>
                        <S.TableIcon />
                        <S.TableText>{item.name}</S.TableText>
                      </S.TableItemWrapper>
                    </td>
                    <td>
                      <S.TableItemWrapper>
                        <S.TableText>{item.balance}</S.TableText>
                      </S.TableItemWrapper>
                    </td>
                    <td>
                      <S.TableItemWrapper>
                        <S.TableText>{item.deals}</S.TableText>
                      </S.TableItemWrapper>
                    </td>
                    <td>
                      <S.TableItemWrapper>
                        <S.TableText>{item.followers}</S.TableText>
                      </S.TableItemWrapper>
                    </td>
                    <td>
                      <S.TableItemWrapper>
                        <S.TableText isUnderline>{item.pnl}</S.TableText>
                      </S.TableItemWrapper>
                    </td>
                    <td>
                      <S.TableItemWrapper>
                        <Button size="middle" onClick={handleFollow}>
                          Follow
                        </Button>
                        <Button size="middle">Unfollow</Button>
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
