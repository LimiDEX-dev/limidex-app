import React, { FC, useEffect, useState } from "react";
import { useEthers } from "@usedapp/core";
import { orders } from "../../../../lib/mock/orders";

import { CloseIcon } from "../../../../lib/icons";
import { ActionsObject, useLocalStore } from "../../context";
import { removeLimitOrder } from "../../../../api/main/orders";

import * as S from "./style";

export const Orders: FC = () => {
  const { account } = useEthers();

  const [activeTab, setActiveTab] = useState<0 | 1 | 2>(0);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [currentPage, setCurrentPage] = useState<number>(1);

  const localStore = useLocalStore();
  const {
    orders: { activeOrders, historyOrders, crossOrders },
  } = localStore.data;
  const {
    orders: {
      activeOrders: { deleteActiveOrder },
    },
  } = localStore.actions as ActionsObject;

  useEffect(() => {
    // THERE IS FUNCTION THAT SET ORDERS DATA
    // setActiveOrders(someData);
    // setHistoryOrders(someData);
  }, []);

  const pagesCount = Math.ceil(orders.history.length / 10);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const getFormattedPages = () => {
    if (pagesCount > 5) {
      if (currentPage === 1 || currentPage === 2) {
        return [1, 2, 3, "...", pagesCount];
      }
      if (currentPage === 3) {
        return [1, 2, 3, 4, "...", pagesCount];
      }
      if (currentPage === pagesCount || currentPage === pagesCount - 1) {
        return [1, "...", pagesCount - 2, pagesCount - 1, pagesCount];
      }
      if (currentPage === pagesCount - 2) {
        return [
          1,
          "...",
          pagesCount - 3,
          pagesCount - 2,
          pagesCount - 1,
          pagesCount,
        ];
      }

      return [
        1,
        "...",
        currentPage - 1,
        currentPage,
        currentPage + 1,
        "...",
        pagesCount,
      ];
    }

    return Array.from({ length: pagesCount }, (_, i) => i + 1);
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
    if (activeTab === 0) {
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
            {activeOrders.map((order, index) => (
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
                <S.TableItem textCenter>
                  <S.TableItemWrapper>
                    <span>{order.volume}</span>
                  </S.TableItemWrapper>
                </S.TableItem>
                <S.TableItem>
                  <S.TableItemWrapper>
                    <span>
                      <span>
                        <S.Text bold>{order.destination.name}</S.Text> (
                        {order.destination.descr})
                      </span>
                    </span>
                  </S.TableItemWrapper>
                </S.TableItem>
                <S.TableItem textCenter>
                  <S.TableItemWrapper>
                    <span>{order.estimatedOut}</span>
                  </S.TableItemWrapper>
                </S.TableItem>
                <S.TableItem textCenter>
                  <S.TableItemWrapper>
                    <span>{order.type}</span>
                  </S.TableItemWrapper>
                </S.TableItem>
                <S.TableItem textCenter>
                  <S.TableItemWrapper>
                    <span>{order.price}</span>
                  </S.TableItemWrapper>
                </S.TableItem>
                <S.TableItem textCenter>
                  <S.TableItemWrapper>
                    <span>{order.tpSl}</span>
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

    if (activeTab === 1) {
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
            {historyOrders
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
          {crossOrders
            .slice((currentPage - 1) * 10, currentPage * 10)
            .map((order, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <tr key={`${order.asset.name}-${index}`}>
                <S.TableItem>
                  <S.TableItemWrapper>
                    <S.Text bold>{order.asset.name}</S.Text> (
                    {order.asset.descr})
                  </S.TableItemWrapper>
                </S.TableItem>
                <S.TableItem>
                  <S.TableItemWrapper>
                    <span>{order.volume}</span>
                  </S.TableItemWrapper>
                </S.TableItem>
                <S.TableItem>
                  <S.TableItemWrapper>
                    <S.Text bold>{order.destination.name}</S.Text> (
                    {order.destination.descr})
                  </S.TableItemWrapper>
                </S.TableItem>
                <S.TableItem>
                  <S.TableItemWrapper>
                    <span>{order.amount}</span>
                  </S.TableItemWrapper>
                </S.TableItem>
                <S.TableItem>
                  <S.TableItemWrapper>
                    <span>{order.status}</span>
                  </S.TableItemWrapper>
                </S.TableItem>
                <S.TableItem>
                  <S.TableItemWrapper>
                    <span>{order.rewards}</span>
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
            isActive={activeTab === 0}
            type="button"
            onClick={() => setActiveTab(0)}
          >
            Active orders
          </S.Tab>
          <S.Tab
            isActive={activeTab === 1}
            type="button"
            onClick={() => setActiveTab(1)}
          >
            Order history
          </S.Tab>
          <S.Tab
            isActive={activeTab === 2}
            type="button"
            onClick={() => setActiveTab(2)}
          >
            Cross-chain history
          </S.Tab>
        </S.Tabs>
        <S.Content>{getTable()}</S.Content>
      </S.Container>
    </S.Orders>
  );
};
