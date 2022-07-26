/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC, useRef, useState } from "react";
import { NavLink } from "react-router-dom";

import { LoadingSmallIcon, SettingsIcon } from "../../../lib/icons";
import {
  GithubIcon,
  MDownIcon,
  TelegramIcon,
  TwitterIcon,
} from "../../../lib/icons/social";
import { useOutsideAlerter } from "../../../lib/hooks";
import { chains as mockChains } from "../../../lib/mock/valutes";
import { Dropdown, Modal, Input, Button } from "../../atoms";
import { useUser } from "../../../store";

import * as S from "./style";

const SocialList = () => (
  <S.SocialList>
    <S.SocialItem>
      <a href="src/components/template/Header/index#">
        <TwitterIcon />
      </a>
    </S.SocialItem>
    <li>
      <a href="src/components/template/Header/index#">
        <TelegramIcon />
      </a>
    </li>
    <li>
      <a href="src/components/template/Header/index#">
        <MDownIcon />
      </a>
    </li>
    <li>
      <a href="src/components/template/Header/index#">
        <GithubIcon />
      </a>
    </li>
  </S.SocialList>
);

export const Header: FC = () => {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const [chains, setChains] = useState(mockChains);
  const [selectedChain, setSelectedChain] = useState(mockChains[0]);
  const [isSettingsOpened, setIsSettingsOpened] = useState<boolean>(false);
  const [slippageTolerance, setSlippageTolerance] = useState<string>("0.5");

  const headerRef = useRef(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const { data: user } = useUser();

  const handleOpen = () => {
    setIsOpened((prevState) => !prevState);
  };

  useOutsideAlerter(headerRef, (event) => {
    const target = event.target as Element;

    if (!modalRef.current.contains(target)) {
      setIsOpened(false);
    }
  });

  return (
    <>
      <Modal
        ref={modalRef}
        isVisible={isSettingsOpened}
        handleClose={() => setIsSettingsOpened(false)}
      >
        <S.HeaderSettings>
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
        </S.HeaderSettings>
      </Modal>
      <S.Mobile>
        <S.MobileLogo>
          <img src="/assets/logo-mobile.png" alt="" width={50} />
        </S.MobileLogo>
        <Dropdown
          items={chains}
          onSelect={setSelectedChain}
          borderColor={selectedChain.color}
        >
          {selectedChain.icon}
          {selectedChain.label}
        </Dropdown>
        <S.Wallet>
          0x039e...6e37
          {user.transactionsPending > 0 && (
            <S.WalletPendingStatus>
              <LoadingSmallIcon /> {user.transactionsPending} Pending
            </S.WalletPendingStatus>
          )}
        </S.Wallet>
        {/* if no wallet connected */}
        {/* <Button size="small"> */}
        {/*  Connect wallet */}
        {/* </Button> */}
      </S.Mobile>
      <div ref={headerRef}>
        <S.Header isOpened={isOpened}>
          <S.Logo>
            <img src="/assets/logo.png" alt="" width={180} />
          </S.Logo>
          <S.Nav>
            <S.List>
              <S.Item>
                <NavLink to="/staking" onClick={handleOpen}>
                  Staking
                </NavLink>
              </S.Item>
              <S.Item>
                <NavLink to="/trading" onClick={handleOpen}>
                  Copy trade
                </NavLink>
              </S.Item>
              <S.Item>
                <NavLink to="/lmx" onClick={handleOpen}>
                  veSPLX
                </NavLink>
              </S.Item>
              <S.Item>
                <NavLink to="/" onClick={handleOpen}>
                  Trade
                </NavLink>
              </S.Item>
              <S.Item>
                <NavLink to="/rewards" onClick={handleOpen}>
                  Rewards
                </NavLink>
              </S.Item>
            </S.List>
          </S.Nav>
          <S.Info>
            <S.InfoCard>
              Cashback
              <br />
              <br />
              <span>123 LMX</span>
            </S.InfoCard>
          </S.Info>
          <S.CloseButton
            type="button"
            onClick={handleOpen}
            aria-label="close navigation"
          />
          <S.UserNav>
            <Button size="small">Split RPC</Button>
            <Dropdown
              items={chains}
              onSelect={setSelectedChain}
              borderColor={selectedChain.color}
            >
              {selectedChain.icon}
              {selectedChain.label}
            </Dropdown>
            <S.Balance>
              <S.BalanceIcon />0
            </S.Balance>
            <S.Wallet>
              0x039e...6e37
              {user.transactionsPending > 0 && (
                <S.WalletPendingStatus>
                  <LoadingSmallIcon /> {user.transactionsPending} Pending
                </S.WalletPendingStatus>
              )}
            </S.Wallet>
            {/* if no wallet connected */}
            {/* <Button size="small"> */}
            {/*  Connect wallet */}
            {/* </Button> */}
            <S.UserNavSettings
              type="button"
              onClick={() => setIsSettingsOpened(true)}
            >
              <SettingsIcon />
            </S.UserNavSettings>
          </S.UserNav>
        </S.Header>
        <S.Burger
          type="button"
          onClick={handleOpen}
          aria-label={isOpened ? "close navigation" : "open navigation"}
        >
          <span />
        </S.Burger>
      </div>
    </>
  );
};
