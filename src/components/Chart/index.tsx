import React from 'react';
import { CandleStickChart } from '../CandleStickChart';
import './style.scss';

export function Chart(props: any) {
  return (
    <div className="Chart">
      <CandleStickChart />
    </div>
  );
}
