import React, { FC } from 'react';
import { Routes as ReactRoutes, Route } from 'react-router-dom';
import { Main } from './Main';
import { Staking } from './Staking';
import { Portfolio } from './Portfolio';
import { LMX } from './LMX';
import { Referral } from './Referral';

export const Routes: FC = () => (
  <ReactRoutes>
    <Route path="/" element={<Main />} />
    <Route path="/staking" element={<Staking />} />
    <Route path="/trading" element={<Portfolio />} />
    <Route path="/lmx" element={<LMX />} />
    <Route path="/referral" element={<Referral />} />
  </ReactRoutes>
);
