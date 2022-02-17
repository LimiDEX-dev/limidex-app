/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';
import { SettingsIcon, MainnetIcon, DropdownArrowIcon } from '../../lib/icons';
import './style.scss';
import {
  GithubIcon,
  MDownIcon,
  TelegramIcon,
  TwitterIcon,
} from '../../lib/icons/social';
import { useOutsideAlerter } from '../../lib/hooks';

export const Header: FC = () => {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const headerRef = useRef(null);

  const handleOpen = () => {
    setIsOpened((prevState) => !prevState);
  };

  useOutsideAlerter(headerRef, () => setIsOpened(false));

  return (
    <div ref={headerRef}>
      <header
        className={classnames('header', {
          'header--opened': isOpened,
        })}
      >
        <div className="header__logo">
          <img src="/assets/logo.png" alt="" width={220} />
        </div>
        <nav className="header__nav nav">
          <ul className="nav__list">
            <li className="nav__item">
              <NavLink to="/staking" onClick={handleOpen}>
                Staking
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/portfolio" onClick={handleOpen}>
                Portfolio
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/lmx" onClick={handleOpen}>
                Lock LMX
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/" onClick={handleOpen}>
                Trade
              </NavLink>
            </li>
          </ul>
        </nav>
        <ul className="header__social__list">
          <li className="header__social__item">
            <a href="#" className="header__social__link">
              <TwitterIcon />
            </a>
          </li>
          <li className="header__social__item">
            <a href="#" className="header__social__link">
              <TelegramIcon />
            </a>
          </li>
          <li className="header__social__item">
            <a href="#" className="header__social__link">
              <MDownIcon />
            </a>
          </li>
          <li className="header__social__item">
            <a href="#" className="header__social__link">
              <GithubIcon />
            </a>
          </li>
        </ul>
        <button
          className="header__close"
          type="button"
          onClick={handleOpen}
          aria-label="close navigation"
        />
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
      <button
        className="header__burger"
        type="button"
        onClick={handleOpen}
        aria-label={isOpened ? 'close navigation' : 'open navigation'}
      >
        <span />
      </button>
    </div>
  );
};
