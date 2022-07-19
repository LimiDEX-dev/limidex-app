/* eslint-disable react/no-array-index-key */
import React, { FC } from "react";
import "./style.scss";
import { Button } from "../../atoms";

type RewardsProps = {
  data: {
    network: string;
    token: string;
    reward: string;
  }[];
};

export const Rewards: FC<RewardsProps> = ({ data }) => (
  <div className="lmx__rewards">
    <span className="lmx__rewards__title">
      Rewards list
      <Button size="small">Claim all rewards</Button>
    </span>
    <div className="lmx__rewards__table__wrapper">
      <table className="lmx__rewards__table">
        <thead>
          <tr>
            <th>Network</th>
            <th>Token</th>
            <th>Reward</th>
            <th>Claim</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={`${item.reward}-${index}`}>
              <td>{item.network}</td>
              <td>{item.token}</td>
              <td>{item.reward}</td>
              <td>
                <button type="button">Reward</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);
