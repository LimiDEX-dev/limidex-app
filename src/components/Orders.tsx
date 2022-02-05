import React from 'react';
import './Orders.scss';

export function Orders(props: any) {
  return (
    <div className="Orders">
      <div className="container">
        <div className="tabs">
          <div className="tab active">
            Active orders
          </div>
          <div className="tab">
            Order history
          </div>
        </div>
        <div className="content">
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
                <td className="routing2" />
                <td className="change">TP / LP</td>
                <td className="delete">Delete</td>
              </tr>
            </thead>
            <tbody>
              {mockData.orders.map((order) => (
                <tr>
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
                  <td className="routing2"><div><span>{order.routing2}</span></div></td>
                  <td className="change"><div><span>Change</span></div></td>
                  <td className="delete"><div><span /></div></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

const mockData = {
  orders: [
    {
      name: 'WNBN–WBNB',
      type: 'Buy',
      volume: '1 099.0990',
      orderFee: '0.0990',
      networkFee: '0.0990',
      slipPage: '0.0990',
      routing: 'WBNB > WBNB > WBNB > WBNB',
      routing2: 'Pancakeswap V2 > Apeswap',
    },
    {
      name: 'WNBN–WBNB',
      type: 'Buy',
      volume: '1 099.0990',
      orderFee: '0.0990',
      networkFee: '0.0990',
      slipPage: '0.0990',
      routing: 'WBNB > WBNB > WBNB > WBNB',
      routing2: 'Pancakeswap V2 > Apeswap',
    },
    {
      name: 'WNBN–WBNB',
      type: 'Buy',
      volume: '1 099.0990',
      orderFee: '0.0990',
      networkFee: '0.0990',
      slipPage: '0.0990',
      routing: 'WBNB > WBNB > WBNB > WBNB',
      routing2: 'Pancakeswap V2 > Apeswap',
    },
    {
      name: 'WNBN–WBNB',
      type: 'Buy',
      volume: '1 099.0990',
      orderFee: '0.0990',
      networkFee: '0.0990',
      slipPage: '0.0990',
      routing: 'WBNB > WBNB > WBNB > WBNB',
      routing2: 'Pancakeswap V2 > Apeswap',
    },
    {
      name: 'WNBN–WBNB',
      type: 'Buy',
      volume: '1 099.0990',
      orderFee: '0.0990',
      networkFee: '0.0990',
      slipPage: '0.0990',
      routing: 'WBNB > WBNB > WBNB > WBNB',
      routing2: 'Pancakeswap V2 > Apeswap',
    },
    {
      name: 'WNBN–WBNB',
      type: 'Buy',
      volume: '1 099.0990',
      orderFee: '0.0990',
      networkFee: '0.0990',
      slipPage: '0.0990',
      routing: 'WBNB > WBNB > WBNB > WBNB',
      routing2: 'Pancakeswap V2 > Apeswap',
    },
    {
      name: 'WNBN–WBNB',
      type: 'Buy',
      volume: '1 099.0990',
      orderFee: '0.0990',
      networkFee: '0.0990',
      slipPage: '0.0990',
      routing: 'WBNB > WBNB > WBNB > WBNB',
      routing2: 'Pancakeswap V2 > Apeswap',
    },
    {
      name: 'WNBN–WBNB',
      type: 'Buy',
      volume: '1 099.0990',
      orderFee: '0.0990',
      networkFee: '0.0990',
      slipPage: '0.0990',
      routing: 'WBNB > WBNB > WBNB > WBNB',
      routing2: 'Pancakeswap V2 > Apeswap',
    },
    {
      name: 'WNBN–WBNB',
      type: 'Buy',
      volume: '1 099.0990',
      orderFee: '0.0990',
      networkFee: '0.0990',
      slipPage: '0.0990',
      routing: 'WBNB > WBNB > WBNB > WBNB',
      routing2: 'Pancakeswap V2 > Apeswap',
    },
    {
      name: 'WNBN–WBNB',
      type: 'Buy',
      volume: '1 099.0990',
      orderFee: '0.0990',
      networkFee: '0.0990',
      slipPage: '0.0990',
      routing: 'WBNB > WBNB > WBNB > WBNB',
      routing2: 'Pancakeswap V2 > Apeswap',
    },
    {
      name: 'WNBN–WBNB',
      type: 'Buy',
      volume: '1 099.0990',
      orderFee: '0.0990',
      networkFee: '0.0990',
      slipPage: '0.0990',
      routing: 'WBNB > WBNB > WBNB > WBNB',
      routing2: 'Pancakeswap V2 > Apeswap',
    },
    {
      name: 'WNBN–WBNB',
      type: 'Buy',
      volume: '1 099.0990',
      orderFee: '0.0990',
      networkFee: '0.0990',
      slipPage: '0.0990',
      routing: 'WBNB > WBNB > WBNB > WBNB',
      routing2: 'Pancakeswap V2 > Apeswap',
    },
    {
      name: 'WNBN–WBNB',
      type: 'Buy',
      volume: '1 099.0990',
      orderFee: '0.0990',
      networkFee: '0.0990',
      slipPage: '0.0990',
      routing: 'WBNB > WBNB > WBNB > WBNB',
      routing2: 'Pancakeswap V2 > Apeswap',
    },
    {
      name: 'WNBN–WBNB',
      type: 'Buy',
      volume: '1 099.0990',
      orderFee: '0.0990',
      networkFee: '0.0990',
      slipPage: '0.0990',
      routing: 'WBNB > WBNB > WBNB > WBNB',
      routing2: 'Pancakeswap V2 > Apeswap',
    },
    {
      name: 'WNBN–WBNB',
      type: 'Buy',
      volume: '1 099.0990',
      orderFee: '0.0990',
      networkFee: '0.0990',
      slipPage: '0.0990',
      routing: 'WBNB > WBNB > WBNB > WBNB',
      routing2: 'Pancakeswap V2 > Apeswap',
    },
    {
      name: 'WNBN–WBNB',
      type: 'Buy',
      volume: '1 099.0990',
      orderFee: '0.0990',
      networkFee: '0.0990',
      slipPage: '0.0990',
      routing: 'WBNB > WBNB > WBNB > WBNB',
      routing2: 'Pancakeswap V2 > Apeswap',
    },
    {
      name: 'WNBN–WBNB',
      type: 'Buy',
      volume: '1 099.0990',
      orderFee: '0.0990',
      networkFee: '0.0990',
      slipPage: '0.0990',
      routing: 'WBNB > WBNB > WBNB > WBNB',
      routing2: 'Pancakeswap V2 > Apeswap',
    },
    {
      name: 'WNBN–WBNB',
      type: 'Buy',
      volume: '1 099.0990',
      orderFee: '0.0990',
      networkFee: '0.0990',
      slipPage: '0.0990',
      routing: 'WBNB > WBNB > WBNB > WBNB',
      routing2: 'Pancakeswap V2 > Apeswap',
    },
  ],
};
