import React from 'react';
import { CandleStickChart } from './CandleStickChart';
import './Chart.scss';

export function Chart(props: any) {
  return (
    <div className="Chart">
      <CandleStickChart />
    </div>
  );
}
