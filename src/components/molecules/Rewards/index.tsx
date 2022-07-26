/* eslint-disable react/no-array-index-key */
import React, { FC } from "react";

import { Button } from "../../atoms";

import { RewardsProps } from "./types";

import * as S from "./style";

export const Rewards: FC<RewardsProps> = ({ data }) => (
  <S.Rewards>
    <S.Title>
      Rewards list
      <Button size="small">Claim all rewards</Button>
    </S.Title>
    <S.TableWrapper>
      <S.Table>
        <thead>
          <tr>
            <S.TableHeaderItem>Network</S.TableHeaderItem>
            <S.TableHeaderItem>Token</S.TableHeaderItem>
            <S.TableHeaderItem>Reward</S.TableHeaderItem>
            <S.TableHeaderItem>Claim</S.TableHeaderItem>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <S.Row key={`${item.reward}-${index}`}>
              <S.TableItem>{item.network}</S.TableItem>
              <S.TableItem>{item.token}</S.TableItem>
              <S.TableItem>{item.reward}</S.TableItem>
              <S.TableItem>
                <S.TableItemButton type="button">Reward</S.TableItemButton>
              </S.TableItem>
            </S.Row>
          ))}
        </tbody>
      </S.Table>
    </S.TableWrapper>
  </S.Rewards>
);
