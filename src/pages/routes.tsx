import React, { FC } from "react";
import { Routes as ReactRoutes, Route } from "react-router-dom";
import { MainPage } from "./Main";
import { StakingPage } from "./Staking";
import { PortfolioPage } from "./Portfolio";
import { LmxPage } from "./LMX";
import { ReferralPage } from "./Referral";

export const Routes: FC = () => (
  <ReactRoutes>
    <Route path="/" element={<MainPage />} />
    <Route path="/staking" element={<StakingPage />} />
    <Route path="/trading" element={<PortfolioPage />} />
    <Route path="/lmx" element={<LmxPage />} />
    <Route path="/rewards" element={<ReferralPage />} />
  </ReactRoutes>
);
