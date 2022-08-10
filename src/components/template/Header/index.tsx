/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC, useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { shortenIfAddress, useEthers } from "@usedapp/core";

import { LoadingSmallIcon, SettingsIcon } from "../../../lib/icons";
import {
  GithubIcon,
  MDownIcon,
  TelegramIcon,
  TwitterIcon,
} from "../../../lib/icons/social";
import { useOutsideAlerter } from "../../../lib/hooks";
import { Dropdown, Modal, Input, Button, DropdownItem } from "../../atoms";
import { useUser, useChains } from "../../../store";
import { getSignMessage } from "../../../lib/utils";

import * as S from "./style";
import { chainsData } from "../../../config/chains";

const getChainDataById = (chainId: number) => {
  if (chainId === 56) {
    return chainsData.mainnet;
  }

  if (chainId === 137) {
    return chainsData.polygon;
  }

  if (chainId === 43114) {
    return chainsData.avalanche;
  }

  if (chainId === 250) {
    return chainsData.fantom;
  }

  return undefined;
};

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
  const { activateBrowserWallet, account, library, switchNetwork, chainId } =
    useEthers();

  const [isOpened, setIsOpened] = useState<boolean>(false);
  const [isSettingsOpened, setIsSettingsOpened] = useState<boolean>(false);
  const [slippageTolerance, setSlippageTolerance] = useState<string>("0.5");
  const [readyToSign, setReadyToSign] = useState(false);

  const headerRef = useRef(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const { data: user } = useUser();
  const {
    data: { data: chains, selectedChain },
    actions: { setSelectedChain },
  } = useChains();

  const handleOpen = () => {
    setIsOpened(isOpened);
  };

  useOutsideAlerter(headerRef, (event) => {
    const target = event.target as Element;

    if (!modalRef.current.contains(target)) {
      setIsOpened(false);
    }
  });

  useEffect(() => {
    if (readyToSign && account) {
      (async () => {
        const signer = library.getSigner();

        const signature = await signer.signMessage(getSignMessage());

        localStorage.setItem("signature", signature);
        setReadyToSign(false);
      })();
    }
  }, [readyToSign, account]);

  useEffect(() => {
    if (chainId && (!selectedChain || +selectedChain.value !== chainId)) {
      setSelectedChain(chains.find((item) => +item.value === chainId));
    }
  }, [chainId, selectedChain]);

  const handleConnectWallet = () => {
    activateBrowserWallet();
    setReadyToSign(true);
  };

  const handleChangeNetwork = async (network: DropdownItem) => {
    try {
      await switchNetwork(+network.value);

      setSelectedChain(network);
    } catch (e) {
      console.log(e);
    }

    // if (chainId !== +network.value) {
    //   const chainData = getChainDataById(+network.value);
    //
    //   if (chainData) {
    //     // @ts-ignore
    //     await window?.ethereum?.request({
    //       jsonrpc: "2.0",
    //       method: "wallet_addEthereumChain",
    //       params: [chainData],
    //       id: 0,
    //     });
    //   }
    // }
  };

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
          onSelect={handleChangeNetwork}
          borderColor={selectedChain?.color}
        >
          {selectedChain?.icon}
          {selectedChain?.label}
        </Dropdown>
        {account ? (
          <S.Wallet>
            {shortenIfAddress(account)}
            {user.transactionsPending > 0 && (
              <S.WalletPendingStatus>
                <LoadingSmallIcon /> {user.transactionsPending} Pending
              </S.WalletPendingStatus>
            )}
          </S.Wallet>
        ) : (
          <Button size="small" onClick={handleConnectWallet}>
            Connect wallet
          </Button>
        )}
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
              <span>123 SPLX</span>
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
              onSelect={handleChangeNetwork}
              borderColor={selectedChain?.color}
            >
              {selectedChain?.icon}
              {selectedChain?.label}
            </Dropdown>
            {account ? (
              <>
                <S.Balance>
                  <S.BalanceIcon />0
                </S.Balance>
                <S.Wallet>
                  {shortenIfAddress(account)}
                  {user.transactionsPending > 0 && (
                    <S.WalletPendingStatus>
                      <LoadingSmallIcon /> {user.transactionsPending} Pending
                    </S.WalletPendingStatus>
                  )}
                </S.Wallet>
              </>
            ) : (
              <Button size="small" onClick={handleConnectWallet}>
                Connect wallet
              </Button>
            )}
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
