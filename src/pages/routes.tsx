import React, { FC } from 'react';
import { Routes as ReactRoutes, Route } from 'react-router-dom';
import { Main } from './Main';
import { Staking } from './Staking';

export const Routes: FC = () => (
  <ReactRoutes>
    <Route path="/" element={<Main />} />
    <Route path="/staking" element={<Staking />} />
  </ReactRoutes>
);
