import React, { FC, useEffect, useState } from 'react';
import './style.scss';
import { orders } from '../../lib/mock/orders';

export const Orders: FC = () => {
  const [activeTab, setActiveTab] = useState<0 | 1>(0);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [activeOrders, setActiveOrders] = useState(orders.active);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [historyOrders, setHistoryOrders] = useState(orders.history);

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
        return [1, 2, 3, '...', pagesCount];
      }
      if (currentPage === 3) {
        return [1, 2, 3, 4, '...', pagesCount];
      }
      if (currentPage === pagesCount || currentPage === pagesCount - 1) {
        return [1, '...', pagesCount - 2, pagesCount - 1, pagesCount];
      }
      if (currentPage === pagesCount - 2) {
        return [1, '...', pagesCount - 3, pagesCount - 2, pagesCount - 1, pagesCount];
      }

      return [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', pagesCount];
    }

    return Array.from({ length: pagesCount }, (_, i) => i + 1);
  };

  const handleDeleteActiveOrder = (index) => {
    setActiveOrders((prevState) => [...prevState.slice(0, index), ...prevState.slice(index + 1)]);
  };

  return (
    <div className="Orders">
      <div className="container">
        <div className="tabs">
          <button type="button" className={`tab${activeTab === 0 ? ' active' : ''}`} onClick={() => setActiveTab(0)}>
            Active orders
          </button>
          <button type="button" className={`tab${activeTab === 1 ? ' active' : ''}`} onClick={() => setActiveTab(1)}>
            Order history
          </button>
        </div>
        <div className="content">
          {activeTab === 1 ? (
            <table>
              <thead>
                <tr>
                  <td className="name">Name</td>
                  <td className="orderType">Order type</td>
                  <td className="volume">Volume</td>
                  <td className="fee">Fee</td>
                  <td className="rebase">Rebase</td>
                  <td className="status">Status</td>
                  <td className="change">Review</td>
                </tr>
              </thead>
              <tbody>
                {historyOrders
                  .slice((currentPage - 1) * 10, currentPage * 10)
                  .map((order, index) => (
                  // eslint-disable-next-line react/no-array-index-key
                    <tr key={`${order.name}-${index}`}>
                      <td className="name">
                        <div>
                          <span />
                          <span />
                          <span>{order.name}</span>
                        </div>
                      </td>
                      <td className="orderType"><div><span>{order.type}</span></div></td>
                      <td className="volume"><div><span>{order.volume}</span></div></td>
                      <td className="fee"><div><span>{order.fee}</span></div></td>
                      <td className="rebase"><div><span>{order.rebase}</span></div></td>
                      <td className="status"><div><span>{order.status}</span></div></td>
                      <td className="change">
                        <button type="button">
                          <span>Full info</span>
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          ) : (
            <table>
              <thead>
                <tr>
                  <td className="name">Name</td>
                  <td className="orderType">Order type</td>
                  <td className="volume">Volume</td>
                  <td className="orderFee">Order fee</td>
                  <td className="networkFee">Network fee</td>
                  <td className="slipPage">Slippage</td>
                  <td className="routing">Routing</td>
                  <td className="change">TP / LS</td>
                  <td className="delete">Delete</td>
                </tr>
              </thead>
              <tbody>
                {activeOrders.map((order, index) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <tr key={`${order.name}-${index}`}>
                    <td className="name">
                      <div>
                        <span />
                        <span />
                        <span>{order.name}</span>
                      </div>
                    </td>
                    <td className="orderType"><div><span>{order.type}</span></div></td>
                    <td className="volume"><div><span>{order.volume}</span></div></td>
                    <td className="orderFee"><div><span>{order.orderFee}</span></div></td>
                    <td className="networkFee"><div><span>{order.networkFee}</span></div></td>
                    <td className="slipPage"><div><span>{order.slipPage}</span></div></td>
                    <td className="routing"><div><span>{order.routing}</span></div></td>
                    <td className="change"><button type="button"><span>Change</span></button></td>
                    <td className="delete">
                      <button type="button" onClick={() => handleDeleteActiveOrder(index)} aria-label="Delete order">
                        <span />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};
