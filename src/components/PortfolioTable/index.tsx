/* eslint-disable react/no-array-index-key */
import React, { FC } from 'react';
import './style.scss';
import { Sort, SortType } from '../Sort';

export type PortfolioTableFields = 'network' | 'coin' | 'balance' | 'price' | 'balanceUSD' | 'approve';

type PortfolioTableProps = {
  sort: {
    field: PortfolioTableFields;
    by: SortType;
  };
  handleChangeSort: ({ field, by }: { field: PortfolioTableFields; by: SortType}) => void;
  data: {
    network: string;
    coin: string;
    balance: string;
    price: string;
    balanceUSD: string;
    approve: string;
  }[];
};

export const PortfolioTable: FC<PortfolioTableProps> = ({ sort, handleChangeSort, data }) => (
  <div className="portfolio-table">
    <table className="portfolio-table__main-table">
      <thead>
        <tr className="portfolio-table__row">
          <td>
            <Sort
              sort={sort.field === 'network' ? sort.by : 'no'}
              onChange={(by) => handleChangeSort({ field: 'network', by })}
              isWordSort
            >
              Network
            </Sort>
          </td>
          <td>
            <Sort
              sort={sort.field === 'coin' ? sort.by : 'no'}
              onChange={(by) => handleChangeSort({ field: 'coin', by })}
              isWordSort
            >
              Coin
            </Sort>
          </td>
          <td>
            <Sort
              sort={sort.field === 'balance' ? sort.by : 'no'}
              onChange={(by) => handleChangeSort({ field: 'balance', by })}
            >
              Balance
            </Sort>
          </td>
          <td>
            <Sort
              sort={sort.field === 'price' ? sort.by : 'no'}
              onChange={(by) => handleChangeSort({ field: 'price', by })}
            >
              Price, $
            </Sort>
          </td>
          <td>
            <Sort
              sort={sort.field === 'balanceUSD' ? sort.by : 'no'}
              onChange={(by) => handleChangeSort({ field: 'balanceUSD', by })}
            >
              Balance USD, $
            </Sort>
          </td>
          <td>
            <Sort
              sort={sort.field === 'approve' ? sort.by : 'no'}
              onChange={(by) => handleChangeSort({ field: 'approve', by })}
            >
              Approve
            </Sort>
          </td>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={`${item.network}-${index}`} className="portfolio-table__row">
            <td>
              <span className="portfolio-table__wrapper">
                <span className="portfolio-table__icon" />
                <span className="portfolio-table__text">{item.network}</span>
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
                <span className="portfolio-table__text portfolio-table__text--mono">{item.balance}</span>
              </span>
            </td>
            <td>
              <span className="portfolio-table__wrapper">
                <span className="portfolio-table__text portfolio-table__text--mono">{item.price}</span>
              </span>
            </td>
            <td>
              <span className="portfolio-table__wrapper">
                <span className="portfolio-table__text portfolio-table__text--mono">{item.balanceUSD}</span>
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
