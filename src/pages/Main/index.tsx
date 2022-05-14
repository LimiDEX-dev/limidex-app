import React, { useLayoutEffect, useState } from 'react';
import classnames from 'classnames';

import './style.scss';

import { PlaceOrder } from '../../components/PlaceOrder';
import { ExchangesRates } from '../../components/ExchangesRates';
import { Orders } from '../../components/Orders';
import { Chart } from '../../components/Chart';
import { ChartIcon, RatesIcon } from '../../lib/icons';

export const Main = () => {
  const [activeOrderTab, setActiveOrderTab] = useState<'limit' | 'swap' | 'cross'>('swap');
  const [activeTab, setActiveTab] = useState<0 | 1>(0);
  const [isExpertMode, setIsExpertMode] = useState(false);
  const [height, setHeight] = useState<number>(0);

  useLayoutEffect(() => {
    // THERE IS FUNCTION THAT SET CHART DATA
    // setChart(someData);

    function update() {
      const $node = document.querySelector('#chart') as HTMLElement;
      const rect = $node.getBoundingClientRect();
      setHeight(rect.height - 40);
    }

    setTimeout(() => {
      update();
    });

    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('resize', update);
    };
  }, [isExpertMode, activeOrderTab]);

  return (
    <div className={classnames('Main', {
      'Main--expert': (isExpertMode && activeOrderTab === 'swap') || activeOrderTab === 'limit',
    })}
    >
      <div className="left">
        <PlaceOrder
          isExpertMode={isExpertMode}
          setIsExpertMode={setIsExpertMode}
          activeTab={activeOrderTab}
          setActiveTab={setActiveOrderTab}
        />
      </div>

      <div className="right">
        <div className="right-top" data-active-tab={activeTab}>
          <div className="exchanges-rates-container">
            <ExchangesRates />
          </div>
          <div className="chart-container">
            <Chart height={height} setHeight={setHeight} />
          </div>
        </div>

        <div className="right-bottom">
          <Orders />
        </div>
      </div>
      <div className="actions">
        <button type="button" onClick={() => setActiveTab(0)}>
          <ChartIcon />
        </button>
        <button type="button" onClick={() => setActiveTab(1)}>
          <RatesIcon />
        </button>
      </div>
      <Orders />
    </div>
  );
};
