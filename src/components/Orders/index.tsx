import React, { FC, useEffect, useState } from "react";
import "./style.scss";
import { orders } from "../../lib/mock/orders";
import { useOrders } from "../../store";

export const Orders: FC = () => {
  const [activeTab, setActiveTab] = useState<0 | 1 | 2>(0);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [currentPage, setCurrentPage] = useState<number>(1);
  // const [activeOrders, setActiveOrders] = useState(orders.active);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const [historyOrders, setHistoryOrders] = useState(orders.history);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const [crossOrders, setCrossOrders] = useState(orders.cross);

  const {
    data: { activeOrders, historyOrders, crossOrders },
    actions: {
      activeOrders: { deleteActiveOrder },
    },
  } = useOrders();

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

  const handleDeleteActiveOrder = (index) => {
    // setActiveOrders((prevState) => [
    //   ...prevState.slice(0, index),
    //   ...prevState.slice(index + 1),
    // ]);
    deleteActiveOrder(index);
  };

  const getTable = () => {
    if (activeTab === 0) {
      return (
        <table>
          <thead>
            <tr>
              <td className="name">From asset</td>
              <td className="orderType text-center">Volume</td>
              <td className="volume">To asset</td>
              <td className="volume text-center">Estimated out</td>
              <td className="volume text-center">Order type</td>
              <td className="orderFee text-center">Price</td>
              <td className="routing text-center">TP / SL</td>
              <td className="delete">Delete</td>
            </tr>
          </thead>
          <tbody>
            {activeOrders.map((order, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <tr key={`${order.asset.name}-${index}`}>
                <td className="name">
                  <div>
                    <span>
                      <span className="bold">{order.asset.name}</span>(
                      {order.asset.descr})
                    </span>
                  </div>
                </td>
                <td className="volume text-center">
                  <div>
                    <span>{order.volume}</span>
                  </div>
                </td>
                <td className="orderFee">
                  <div>
                    <span>
                      <span>
                        <span className="bold">{order.destination.name}</span>(
                        {order.destination.descr})
                      </span>
                    </span>
                  </div>
                </td>
                <td className="volume text-center">
                  <div>
                    <span>{order.estimatedOut}</span>
                  </div>
                </td>
                <td className="volume text-center">
                  <div>
                    <span>{order.type}</span>
                  </div>
                </td>
                <td className="routing text-center">
                  <div>
                    <span>{order.price}</span>
                  </div>
                </td>
                <td className="routing text-center">
                  <div>
                    <span>{order.tpSl}</span>
                  </div>
                </td>
                <td className="delete">
                  <button
                    type="button"
                    onClick={() => handleDeleteActiveOrder(index)}
                    aria-label="Delete order"
                  >
                    <span />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    }

    if (activeTab === 1) {
      return (
        <table>
          <thead>
            <tr>
              <td className="name">From asset</td>
              <td className="orderType">Volume</td>
              <td className="volume">Destination</td>
              <td className="fee">Amount out</td>
              <td className="rebase">Network</td>
              <td className="status">Order Type</td>
              <td className="change">Reward</td>
              <td className="change">Status</td>
              <td className="change">Review</td>
            </tr>
          </thead>
          <tbody>
            {historyOrders
              .slice((currentPage - 1) * 10, currentPage * 10)
              .map((order, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <tr key={`${order.asset.name}-${index}`}>
                  <td className="name">
                    <div>
                      <span>
                        <span className="bold">{order.asset.name}</span>(
                        {order.asset.descr})
                      </span>
                    </div>
                  </td>
                  <td className="orderType">
                    <div>
                      <span>{order.volume}</span>
                    </div>
                  </td>
                  <td className="volume">
                    <div>
                      <span>
                        <span className="bold">{order.destination.name}</span>(
                        {order.destination.descr})
                      </span>
                    </div>
                  </td>
                  <td className="fee">
                    <div>
                      <span>{order.amount}</span>
                    </div>
                  </td>
                  <td className="rebase">
                    <div>
                      <span>{order.network}</span>
                    </div>
                  </td>
                  <td className="status">
                    <div>
                      <span>{order.type}</span>
                    </div>
                  </td>
                  <td className="status">
                    <div>
                      <span>{order.reward}</span>
                    </div>
                  </td>
                  <td className="status">
                    <div>
                      <span>{order.status}</span>
                    </div>
                  </td>
                  <td className="change">
                    <button type="button">
                      <span>Full info</span>
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      );
    }

    return (
      <table>
        <thead>
          <tr>
            <td className="name">From Asset</td>
            <td className="orderType">Volume</td>
            <td className="volume">Destination</td>
            <td className="fee">Amount out</td>
            <td className="rebase">Status</td>
            <td className="status">Rewards</td>
            <td className="change">1-tx</td>
            <td className="change">2-tx</td>
          </tr>
        </thead>
        <tbody>
          {crossOrders
            .slice((currentPage - 1) * 10, currentPage * 10)
            .map((order, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <tr key={`${order.asset.name}-${index}`}>
                <td className="name">
                  <div>
                    <span className="bold">{order.asset.name}</span>(
                    {order.asset.descr})
                  </div>
                </td>
                <td className="orderType">
                  <div>
                    <span>{order.volume}</span>
                  </div>
                </td>
                <td className="volume">
                  <div>
                    <span className="bold">{order.destination.name}</span>(
                    {order.destination.descr})
                  </div>
                </td>
                <td className="fee">
                  <div>
                    <span>{order.amount}</span>
                  </div>
                </td>
                <td className="rebase">
                  <div>
                    <span>{order.status}</span>
                  </div>
                </td>
                <td className="status">
                  <div>
                    <span>{order.rewards}</span>
                  </div>
                </td>
                <td className="change">
                  <button type="button">
                    <span>Full info</span>
                  </button>
                </td>
                <td className="change">
                  <button type="button">
                    <span>Full info</span>
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    );
  };

  return (
    <div className="Orders">
      <div className="container">
        <div className="tabs">
          <button
            type="button"
            className={`tab${activeTab === 0 ? " active" : ""}`}
            onClick={() => setActiveTab(0)}
          >
            Active orders
          </button>
          <button
            type="button"
            className={`tab${activeTab === 1 ? " active" : ""}`}
            onClick={() => setActiveTab(1)}
          >
            Order history
          </button>
          <button
            type="button"
            className={`tab${activeTab === 2 ? " active" : ""}`}
            onClick={() => setActiveTab(2)}
          >
            Cross-chain history
          </button>
        </div>
        <div className="content">{getTable()}</div>
      </div>
    </div>
  );
};
