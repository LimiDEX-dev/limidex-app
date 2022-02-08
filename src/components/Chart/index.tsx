import React, { useLayoutEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import './style.scss';
import { ApexOptions } from 'apexcharts';
import { chart } from '../../lib/mock/chart';
import { Dropdown } from '../Dropdown';

const chartOptions: ApexOptions = {
  chart: {
    type: 'candlestick',
    toolbar: {
      tools: {
        download: false,
        zoomin: false,
        zoomout: false,
        pan: false,
      },
    },
  },
  xaxis: {
    type: 'datetime',
  },
  yaxis: {
    tooltip: {
      enabled: true,
    },
  },
  grid: {
    show: false,
  },
};

const timeframeOptions = [
  {
    label: 'seconds',
    value: '60',
  },
  {
    label: 'minutes',
    value: '10',
  },
  {
    label: 'minutes',
    value: '30',
  },
  {
    label: 'minutes',
    value: '60',
  },
  {
    label: 'hours',
    value: '6 ',
  },
  {
    label: 'hours',
    value: '24',
  },
  {
    label: 'days',
    value: '2 ',
  },
  {
    label: 'weeks',
    value: '1 ',
  },
  {
    label: 'month',
    value: '1 ',
  },
];

export function Chart() {
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [selectedTimeframe, setSelectedTimeframe] = useState(timeframeOptions[0]);

  useLayoutEffect(() => {
    function update() {
      const $node = document.querySelector('#chart') as HTMLElement;
      const rect = $node.getBoundingClientRect();
      setWidth(rect.width);
      setHeight(rect.height - 40);
    }

    setTimeout(() => {
      update();
    });

    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('resize', update);
    };
  }, []);

  return (
    <div className="Chart">
      <div className="chart__header">
        <div className="chart__header__flex-wrapper">
          <span className="chart__header__title">
            Rates
          </span>
          <Dropdown items={timeframeOptions} onSelect={setSelectedTimeframe} textAlign="right" arrowHidden>
            <span className="chart__header__timeframe__text">
              Timeframe
            </span>
            <span className="chart__header__timeframe__wrapper">
              <span className="chart__header__timeframe__text">
                {selectedTimeframe.label[0]}
              </span>
              <span className="chart__header__timeframe__minutes">
                {selectedTimeframe.value}
              </span>
            </span>
          </Dropdown>
        </div>
        <div className="chart__header__current">
          <div className="chart__header__valute">
            <span className="chart__header__valute__icon" />
            <span className="chart__header__valute__icon" />
            <span className="chart__header__valute__text">
              WNBN / WNBN
            </span>
          </div>
          <span className="chart__header__current__text">
            556.7373732987
          </span>
          <span className="chart__header__current__change">
            +0.00018
          </span>
        </div>
      </div>
      {/* <CandleStickChart /> */}
      <div id="chart">
        <ReactApexChart type="candlestick" series={chart.series} options={chartOptions} width={width} height={height} />
      </div>
    </div>
  );
}
