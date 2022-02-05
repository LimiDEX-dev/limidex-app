import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { SettingsIcon, MainnetIcon, DropdownArrowIcon } from '../../lib/icons';
import './style.scss';

export const Header: FC = () => (
  <header className="header">
    <div className="header__logo">
      <img src="/assets/logo.png" alt="" />
      <img src="/assets/logo-text.png" alt="" />
    </div>
    <nav className="header__nav nav">
      <ul className="nav__list">
        <li className="nav__item">
          <NavLink to="/staking">
            Staking
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink to="/portfolio">
            Portfolio
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink to="/bridges">
            Bridges
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink to="/">
            Trade
          </NavLink>
        </li>
      </ul>
    </nav>
    <div className="header__user-nav user-nav">
      <button type="button" className="user-nav__mainnet">
        <MainnetIcon />
        <span>DCS Mainnet</span>
        <DropdownArrowIcon />
      </button>
      <div className="user-nav__balance">
        <span className="user-nav__balance__icon" />
        0
      </div>
      <div className="user-nav__balance">
        <span className="user-nav__balance__icon" />
        0.0137 BNB
      </div>
      <span className="user-nav__wallet">
        0x039e...6e37
      </span>
      <button className="user-nav__settings" type="button">
        <SettingsIcon />
      </button>
    </div>
  </header>
);
