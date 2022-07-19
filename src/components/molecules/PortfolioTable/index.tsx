/* eslint-disable react/no-array-index-key */
import React, { FC } from "react";
import "./style.scss";
import { Sort, SortType } from "../../atoms/Sort";
import { Button } from "../../atoms";

export type PortfolioTableFields =
  | "type"
  | "name"
  | "network"
  | "coin"
  | "balance"
  | "deals"
  | "followers"
  | "pnl"
  | "price"
  | "balanceUSD"
  | "approve";

type PortfolioTableProps = {
  sort: {
    field: PortfolioTableFields;
    by: SortType;
  };
  handleChangeSort: ({
    field,
    by,
  }: {
    field: PortfolioTableFields;
    by: SortType;
  }) => void;
  trading: {
    type: string;
    name: string;
    balance: string;
    deals: string;
    followers: string;
    pnl: string;
  }[];
  wallet: {
    network: string;
    coin: string;
    balance: string;
    price: string;
    balanceUSD: string;
    approve: string;
  }[];
  activeNetwork?: number;
  handleFollow: () => void;
};

export const PortfolioTable: FC<PortfolioTableProps> = ({
  sort,
  handleChangeSort,
  trading,
  wallet,
  activeNetwork,
  handleFollow,
}) => (
  <div className="portfolio-table">
    <table className="portfolio-table__main-table">
      <thead>
        {activeNetwork === 0 ? (
          <tr className="portfolio-table__row">
            <td>
              <Sort
                sort={sort.field === "type" ? sort.by : "no"}
                onChange={(by) => handleChangeSort({ field: "type", by })}
                isWordSort
              >
                Type
              </Sort>
            </td>
            <td>
              <Sort
                sort={sort.field === "name" ? sort.by : "no"}
                onChange={(by) => handleChangeSort({ field: "name", by })}
                isWordSort
              >
                Name
              </Sort>
            </td>
            <td>
              <Sort
                sort={sort.field === "balance" ? sort.by : "no"}
                onChange={(by) => handleChangeSort({ field: "balance", by })}
              >
                Balance
              </Sort>
            </td>
            <td>
              <Sort
                sort={sort.field === "deals" ? sort.by : "no"}
                onChange={(by) => handleChangeSort({ field: "deals", by })}
              >
                Deals Open/Close
              </Sort>
            </td>
            <td>
              <Sort
                sort={sort.field === "followers" ? sort.by : "no"}
                onChange={(by) => handleChangeSort({ field: "followers", by })}
              >
                Followers
              </Sort>
            </td>
            <td>
              <Sort
                sort={sort.field === "pnl" ? sort.by : "no"}
                onChange={(by) => handleChangeSort({ field: "pnl", by })}
              >
                PnL
              </Sort>
            </td>
            <td />
          </tr>
        ) : (
          <tr className="portfolio-table__row">
            <td>
              <Sort
                sort={sort.field === "network" ? sort.by : "no"}
                onChange={(by) => handleChangeSort({ field: "network", by })}
                isWordSort
              >
                Network
              </Sort>
            </td>
            <td>
              <Sort
                sort={sort.field === "coin" ? sort.by : "no"}
                onChange={(by) => handleChangeSort({ field: "coin", by })}
                isWordSort
              >
                Coin
              </Sort>
            </td>
            <td>
              <Sort
                sort={sort.field === "balance" ? sort.by : "no"}
                onChange={(by) => handleChangeSort({ field: "balance", by })}
              >
                Balance
              </Sort>
            </td>
            <td>
              <Sort
                sort={sort.field === "price" ? sort.by : "no"}
                onChange={(by) => handleChangeSort({ field: "price", by })}
              >
                Price, $
              </Sort>
            </td>
            <td>
              <Sort
                sort={sort.field === "balanceUSD" ? sort.by : "no"}
                onChange={(by) => handleChangeSort({ field: "balanceUSD", by })}
              >
                Balance USD, $
              </Sort>
            </td>
            <td>
              <Button size="small">Approve</Button>
            </td>
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
                  <span className="portfolio-table__wrapper">
                    <span className="portfolio-table__icon" />
                    <span className="portfolio-table__text">{item.type}</span>
                  </span>
                </td>
                <td>
                  <span className="portfolio-table__wrapper">
                    <span className="portfolio-table__icon" />
                    <span className="portfolio-table__text">{item.name}</span>
                  </span>
                </td>
                <td>
                  <span className="portfolio-table__wrapper">
                    <span className="portfolio-table__text">
                      {item.balance}
                    </span>
                  </span>
                </td>
                <td>
                  <span className="portfolio-table__wrapper">
                    <span className="portfolio-table__text">{item.deals}</span>
                  </span>
                </td>
                <td>
                  <span className="portfolio-table__wrapper">
                    <span className="portfolio-table__text">
                      {item.followers}
                    </span>
                  </span>
                </td>
                <td>
                  <span className="portfolio-table__wrapper">
                    <span className="portfolio-table__text portfolio-table__text--underline">
                      {item.pnl}
                    </span>
                  </span>
                </td>
                <td>
                  <span className="portfolio-table__wrapper">
                    <Button size="middle" onClick={handleFollow}>
                      Follow
                    </Button>
                    <Button size="middle">Unfollow</Button>
                  </span>
                </td>
              </tr>
            ))
          : wallet.map((item, index) => (
              <tr
                key={`${item.network}-${index}`}
                className="portfolio-table__row"
              >
                <td>
                  <span className="portfolio-table__wrapper">
                    <span className="portfolio-table__icon" />
                    <span className="portfolio-table__text">
                      {item.network}
                    </span>
                  </span>
                </td>
                <td>
                  <span className="portfolio-table__wrapper">
                    <span className="portfolio-table__icon" />
                    <span className="portfolio-table__text">{item.coin}</span>
                  </span>
                </td>
                <td>
                  <span className="portfolio-table__wrapper">
                    <span className="portfolio-table__text portfolio-table__text--mono">
                      {item.balance}
                    </span>
                  </span>
                </td>
                <td>
                  <span className="portfolio-table__wrapper">
                    <span className="portfolio-table__text portfolio-table__text--mono">
                      {item.price}
                    </span>
                  </span>
                </td>
                <td>
                  <span className="portfolio-table__wrapper">
                    <span className="portfolio-table__text portfolio-table__text--mono">
                      {item.balanceUSD}
                    </span>
                  </span>
                </td>
                <td>
                  <span className="portfolio-table__wrapper">
                    <span className="portfolio-table__text portfolio-table__text--mono portfolio-table__text--underline">
                      {item.approve}
                    </span>
                  </span>
                </td>
              </tr>
            ))}
      </tbody>
    </table>
  </div>
);
