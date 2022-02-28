import React, { FC } from 'react';
import { Routes as ReactRoutes, Route } from 'react-router-dom';
import { Main } from './Main';
import { Staking } from './Staking';
import { Portfolio } from './Portfolio';
import { LMX } from './LMX';
import { Ambassador } from './Ambassador';

export const Routes: FC = () => (
  <ReactRoutes>
    <Route path="/" element={<Main />} />
    <Route path="/staking" element={<Staking />} />
    <Route path="/portfolio" element={<Portfolio />} />
    <Route path="/lmx" element={<LMX />} />
    <Route path="/ambassador" element={<Ambassador />} />
  </ReactRoutes>
);
