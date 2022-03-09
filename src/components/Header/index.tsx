/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';
import { SettingsIcon } from '../../lib/icons';
import './style.scss';
import {
  GithubIcon,
  MDownIcon,
  TelegramIcon,
  TwitterIcon,
} from '../../lib/icons/social';
import { useOutsideAlerter } from '../../lib/hooks';
import { chains as mockChains } from '../../lib/mock/valutes';
import { Dropdown } from '../Dropdown';
import { Modal } from '../Modal';
import { Input } from '../Input';
import { Button } from '../Button';

const SocialList = () => (
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
);

export const Header: FC = () => {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const [chains, setChains] = useState(mockChains);
  const [selectedChain, setSelectedChain] = useState(mockChains[0]);
  const [isSettingsOpened, setIsSettingsOpened] = useState<boolean>(false);
  const [slippageTolerance, setSlippageTolerance] = useState<string>('0.5');
  const headerRef = useRef(null);

  const handleOpen = () => {
    setIsOpened((prevState) => !prevState);
  };

  useOutsideAlerter(headerRef, () => setIsOpened(false));

  return (
    <>
      <Modal isVisible={isSettingsOpened} handleClose={() => setIsSettingsOpened(false)}>
        <div className="header__settings">
          <Input
            value={slippageTolerance}
            onChange={setSlippageTolerance}
            min={0}
            max={100}
            type="number"
            label="Slippage Tolerance"
            currency="%"
          />
          <Button>Change</Button>
          <SocialList />
        </div>
      </Modal>
      <div className="header__mobile">
        <div className="header__mobile__logo">
          <img src="/assets/logo.png" alt="" width={40} />
          <span className="header__logo__title">Limex</span>
        </div>
        <Dropdown items={chains} onSelect={setSelectedChain} borderColor={selectedChain.color}>
          {selectedChain.icon}
          {selectedChain.label}
        </Dropdown>
        <span className="user-nav__wallet">
          0x039e...6e37
        </span>
        <button className="user-nav__settings" type="button" onClick={() => setIsSettingsOpened(true)}>
          <SettingsIcon />
        </button>
        {/* if no wallet connected */}
        {/* <Button size="small"> */}
        {/*  Connect wallet */}
        {/* </Button> */}
      </div>
      <div ref={headerRef}>
        <header
          className={classnames('header', {
            'header--opened': isOpened,
          })}
        >
          <div className="header__logo">
            <img src="/assets/logo.png" alt="" width={60} />
            <span className="header__logo__title">Limex</span>
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
              <li className="nav__item">
                <NavLink to="/ambassador" onClick={handleOpen}>
                  Ambassador
                </NavLink>
              </li>
            </ul>
          </nav>
          <div className="header__info">
            <div className="header__info__card">
              Your balance
              <br />
              {' '}
              <br />
              <span>123 LMX</span>
            </div>
            <div className="header__info__card">
              Cashback
              <br />
              <br />
              <span>123 LMX</span>
            </div>
          </div>
          <SocialList />
          <button
            className="header__close"
            type="button"
            onClick={handleOpen}
            aria-label="close navigation"
          />
          <div className="header__user-nav user-nav">
            <Dropdown items={chains} onSelect={setSelectedChain} borderColor={selectedChain.color}>
              {selectedChain.icon}
              {selectedChain.label}
            </Dropdown>
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
            {/* if no wallet connected */}
            {/* <Button size="small"> */}
            {/*  Connect wallet */}
            {/* </Button> */}
            <button className="user-nav__settings" type="button" onClick={() => setIsSettingsOpened(true)}>
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
    </>
  );
};
