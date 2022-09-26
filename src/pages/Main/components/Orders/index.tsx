import React, { FC, useState } from "react";
import { useEthers } from "@usedapp/core";

import { CloseIcon } from "../../../../lib/icons";
import { ActionsObject, useLocalStore } from "../../context";
import { removeLimitOrder } from "../../../../api/main/orders";

import * as S from "./style";
import { Pagination } from "../../../../components/atoms";

export const Orders: FC = () => {
  const { account } = useEthers();

  const localStore = useLocalStore();
  const {
    orders: {
      activeOrders,
      historyOrders,
      crossOrders,
      currentPage,
      currentType,
    },
  } = localStore.data;
  const {
    orders: {
      activeOrders: { deleteActiveOrder },
      setCurrentPage,
      setCurrentType,
    },
  } = localStore.actions as ActionsObject;

  const getPagesCount = () => {
    if (currentType === "history") {
      return historyOrders.pagesCount;
    }

    if (currentType === "active") {
      return activeOrders.pagesCount;
    }

    return crossOrders.pagesCount;
  };

  const handleDeleteActiveOrder = async (index) => {
    deleteActiveOrder(index);

    const {
      data: { result },
    } = await removeLimitOrder({
      trader: account,
      traderSig: localStorage.getItem("signature"),
      orderID: index,
    });

    console.log(result);
  };

  const getTable = () => {
    if (currentType === "active") {
      return (
        <S.Table>
          <thead>
            <tr>
              <S.TableHeaderItem>From asset</S.TableHeaderItem>
              <S.TableHeaderItem textCenter>Volume</S.TableHeaderItem>
              <S.TableHeaderItem>To asset</S.TableHeaderItem>
              <S.TableHeaderItem textCenter>Estimated out</S.TableHeaderItem>
              <S.TableHeaderItem textCenter>Order type</S.TableHeaderItem>
              <S.TableHeaderItem textCenter>Price</S.TableHeaderItem>
              <S.TableHeaderItem textCenter>TP / SL</S.TableHeaderItem>
              <S.TableHeaderItem>Delete</S.TableHeaderItem>
            </tr>
          </thead>
          <tbody>
            {activeOrders.data.map((order, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <tr key={`${order.orderID}-${index}`}>
                <S.TableItem>
                  <S.TableItemWrapper>
                    <span>{order.fromToken}</span>
                  </S.TableItemWrapper>
                </S.TableItem>
                <S.TableItem textCenter>
                  <S.TableItemWrapper>
                    <span>{order.volume}</span>
                  </S.TableItemWrapper>
                </S.TableItem>
                <S.TableItem>
                  <S.TableItemWrapper>
                    <span>
                      <span>{order.toToken}</span>
                    </span>
                  </S.TableItemWrapper>
                </S.TableItem>
                <S.TableItem textCenter>
                  <S.TableItemWrapper>
                    <span>{+order.volume * +order.price}</span>
                  </S.TableItemWrapper>
                </S.TableItem>
                <S.TableItem textCenter>
                  <S.TableItemWrapper>
                    <span>{order.orderType}</span>
                  </S.TableItemWrapper>
                </S.TableItem>
                <S.TableItem textCenter>
                  <S.TableItemWrapper>
                    <span>{order.price}</span>
                  </S.TableItemWrapper>
                </S.TableItem>
                <S.TableItem textCenter>
                  <S.TableItemWrapper>
                    <span>
                      {order.takeProfit}/{order.stopLoss}
                    </span>
                  </S.TableItemWrapper>
                </S.TableItem>
                <S.TableItem>
                  <S.DeleteButton
                    onClick={() => handleDeleteActiveOrder(index)}
                    aria-label="Delete order"
                  >
                    <CloseIcon />
                  </S.DeleteButton>
                </S.TableItem>
              </tr>
            ))}
          </tbody>
        </S.Table>
      );
    }

    if (currentType === "history") {
      return (
        <S.Table>
          <thead>
            <tr>
              <S.TableHeaderItem>From asset</S.TableHeaderItem>
              <S.TableHeaderItem>Volume</S.TableHeaderItem>
              <S.TableHeaderItem>Destination</S.TableHeaderItem>
              <S.TableHeaderItem>Amount out</S.TableHeaderItem>
              <S.TableHeaderItem>Network</S.TableHeaderItem>
              <S.TableHeaderItem>Order Type</S.TableHeaderItem>
              <S.TableHeaderItem>Reward</S.TableHeaderItem>
              <S.TableHeaderItem>Status</S.TableHeaderItem>
              <S.TableHeaderItem>Review</S.TableHeaderItem>
            </tr>
          </thead>
          <tbody>
            {historyOrders.data
              .slice((currentPage - 1) * 10, currentPage * 10)
              .map((order, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <tr key={`${order.asset.name}-${index}`}>
                  <S.TableItem>
                    <S.TableItemWrapper>
                      <span>
                        <S.Text bold>{order.asset.name}</S.Text> (
                        {order.asset.descr})
                      </span>
                    </S.TableItemWrapper>
                  </S.TableItem>
                  <S.TableItem>
                    <S.TableItemWrapper>
                      <span>{order.volume}</span>
                    </S.TableItemWrapper>
                  </S.TableItem>
                  <S.TableItem>
                    <S.TableItemWrapper>
                      <span>
                        <S.Text bold>{order.destination.name}</S.Text> (
                        {order.destination.descr})
                      </span>
                    </S.TableItemWrapper>
                  </S.TableItem>
                  <S.TableItem>
                    <S.TableItemWrapper>
                      <span>{order.amount}</span>
                    </S.TableItemWrapper>
                  </S.TableItem>
                  <S.TableItem>
                    <S.TableItemWrapper>
                      <span>{order.network}</span>
                    </S.TableItemWrapper>
                  </S.TableItem>
                  <S.TableItem>
                    <S.TableItemWrapper>
                      <span>{order.type}</span>
                    </S.TableItemWrapper>
                  </S.TableItem>
                  <S.TableItem>
                    <S.TableItemWrapper>
                      <span>{order.reward}</span>
                    </S.TableItemWrapper>
                  </S.TableItem>
                  <S.TableItem>
                    <S.TableItemWrapper>
                      <span>{order.status}</span>
                    </S.TableItemWrapper>
                  </S.TableItem>
                  <S.TableItem>
                    <S.DeleteButton>
                      <span>Full info</span>
                    </S.DeleteButton>
                  </S.TableItem>
                </tr>
              ))}
          </tbody>
        </S.Table>
      );
    }

    return (
      <S.Table>
        <thead>
          <tr>
            <S.TableHeaderItem>From Asset</S.TableHeaderItem>
            <S.TableHeaderItem>Volume</S.TableHeaderItem>
            <S.TableHeaderItem>Destination</S.TableHeaderItem>
            <S.TableHeaderItem>Amount out</S.TableHeaderItem>
            <S.TableHeaderItem>Status</S.TableHeaderItem>
            <S.TableHeaderItem>Rewards</S.TableHeaderItem>
            <S.TableHeaderItem>1-tx</S.TableHeaderItem>
            <S.TableHeaderItem>2-tx</S.TableHeaderItem>
          </tr>
        </thead>
        <tbody>
          {crossOrders.data
            .slice((currentPage - 1) * 10, currentPage * 10)
            .map((order, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <tr key={`${order.amountOut}-${index}`}>
                <S.TableItem>
                  <S.TableItemWrapper>{order.fromToken}</S.TableItemWrapper>
                </S.TableItem>
                <S.TableItem>
                  <S.TableItemWrapper>
                    <span>{order.volume}</span>
                  </S.TableItemWrapper>
                </S.TableItem>
                <S.TableItem>
                  <S.TableItemWrapper>{order.toToken}</S.TableItemWrapper>
                </S.TableItem>
                <S.TableItem>
                  <S.TableItemWrapper>
                    <span>{order.amountOut}</span>
                  </S.TableItemWrapper>
                </S.TableItem>
                <S.TableItem>
                  <S.TableItemWrapper>
                    <span>{order.statusSrc}</span>
                  </S.TableItemWrapper>
                </S.TableItem>
                <S.TableItem>
                  <S.TableItemWrapper>
                    {/* <span>{order.rewards}</span> */}
                  </S.TableItemWrapper>
                </S.TableItem>
                <S.TableItem>
                  <S.DeleteButton>
                    <span>Full info</span>
                  </S.DeleteButton>
                </S.TableItem>
                <S.TableItem>
                  <S.DeleteButton>
                    <span>Full info</span>
                  </S.DeleteButton>
                </S.TableItem>
              </tr>
            ))}
        </tbody>
      </S.Table>
    );
  };

  return (
    <S.Orders>
      <S.Container>
        <S.Tabs>
          <S.Tab
            isActive={currentType === "active"}
            type="button"
            onClick={() => setCurrentType("active")}
          >
            Active orders
          </S.Tab>
          <S.Tab
            isActive={currentType === "history"}
            type="button"
            onClick={() => setCurrentType("history")}
          >
            Order history
          </S.Tab>
          <S.Tab
            isActive={currentType === "cross"}
            type="button"
            onClick={() => setCurrentType("cross")}
          >
            Cross-chain history
          </S.Tab>
        </S.Tabs>
        <S.Content>{getTable()}</S.Content>
        <Pagination
          pagesCount={getPagesCount()}
          currentPage={currentPage}
          handleChangePage={(page) => setCurrentPage(page)}
        />
      </S.Container>
    </S.Orders>
  );
};
