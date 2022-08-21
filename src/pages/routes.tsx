import React, { FC } from "react";
import { Routes as ReactRoutes, Route } from "react-router-dom";
import { MainPage } from "./Main";
import { Staking } from "./Staking";
import { Portfolio } from "./Portfolio";
import { LMX } from "./LMX";
import { ReferralPage } from "./Referral";

export const Routes: FC = () => (
  <ReactRoutes>
    <Route path="/" element={<MainPage />} />
    <Route path="/staking" element={<Staking />} />
    <Route path="/trading" element={<Portfolio />} />
    <Route path="/lmx" element={<LMX />} />
    <Route path="/rewards" element={<ReferralPage />} />
  </ReactRoutes>
);
