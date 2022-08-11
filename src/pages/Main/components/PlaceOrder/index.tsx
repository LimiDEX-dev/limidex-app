import React, { FC, useEffect } from "react";
import { useEthers } from "@usedapp/core";
import { ethers } from "ethers";

import { Dropdown, Input, Popup } from "../../../../components/atoms";
import { HelpIcon } from "../../../../lib/icons";
import { useChains, useNotifications, useUser } from "../../../../store";
import { ActionsObject, useLocalStore } from "../../context";
import {
  AddCustomTokenModal,
  ConvertDropdowns,
  PlaceOrderAdvanced,
  PlaceOrderHeader,
  PlaceOrderRoutes,
  PlaceOrderTrade,
} from "./components";
import {
  handleSubmitCrossSwap,
  handleSubmitLimitSwap,
  handleSubmitSwap,
} from "../../../../api/main/trade";

import * as S from "./style";

export const PlaceOrder: FC = () => {
  const { account } = useEthers();

  const localStore = useLocalStore();

  const {
    ui: { orderTab, activeBuyTab },
    convert: {
      sell: { selectedSell, toSell },
      buy: { selectedBuy, toBuy },
    },
    settings: { burnToken, destinationChain, priceImpact, route },
    advanced: { takeProfit, stopLoss, trailingSL },
  } = localStore.data;
  const {
    ui: { setActiveBuyTab },
    settings: { setBurnToken, setDestinationChain, setPriceImpact },
  } = localStore.actions as ActionsObject;

  const {
    data: notifications,
    actions: { createNotification },
  } = useNotifications();
  const {
    data: { transactionsPending, slippageTolerance, isStablePoolPreferably },
    actions: { setTransactionsPending },
  } = useUser();
  const {
    data: { data: chains },
  } = useChains();

  const isSubmitDisabled = (): boolean => {
    if (orderTab === "limit" || orderTab === "swap") {
      return (
        !toSell ||
        !toBuy ||
        !selectedSell ||
        !selectedBuy ||
        !priceImpact ||
        !burnToken ||
        !takeProfit ||
        !stopLoss ||
        !trailingSL ||
        transactionsPending > 0 ||
        notifications.length > 0
      );
    }

    return (
      !toSell ||
      !toBuy ||
      !selectedSell ||
      !selectedBuy ||
      !destinationChain ||
      !burnToken ||
      transactionsPending > 0 ||
      notifications.length > 0
    );
  };

  const handleSubmit = async () => {
    setTransactionsPending(1);

    const params = {
      fromToken: selectedSell.value,
      toToken: selectedBuy.value,
      volume: ethers.utils.parseEther(toSell),
      trader: account,
      traderSig: localStorage.getItem("signature"),
      slippage: +slippageTolerance * 100,
      router: route.toString(),
      burnAmount: +burnToken,
      useStableReward: isStablePoolPreferably,
      takeProfit,
      stopLoss,
      trailingStopLoss: trailingSL,
    };

    if (orderTab === "swap") {
      const {
        data: {
          result: { txHash, stopLossOrderID, takeProfitOrderID },
        },
      } = await handleSubmitSwap(params);
      console.log(txHash, stopLossOrderID, takeProfitOrderID);
    }

    if (orderTab === "limit") {
      const {
        data: {
          result: { txHash, stopLossOrderID, takeProfitOrderID },
        },
      } = await handleSubmitLimitSwap(params);
      console.log(txHash, stopLossOrderID, takeProfitOrderID);
    }

    if (orderTab === "cross") {
      const {
        data: {
          result: { txHash, orderID },
        },
      } = await handleSubmitCrossSwap(params);
      console.log(txHash, orderID);
    }

    setTransactionsPending(0);

    const status = Math.random() > 0.5 ? "success" : "error";

    createNotification({
      status,
      title: status === "success" ? "Success" : "Failed",
      content: (
        <>
          <span>Approve BUSD</span>
          <br />
          <br />
          <a
            href="src/pages/Main/components/PlaceOrder/index"
            target="_blank"
            rel="noreferrer"
          >
            View on BscScan{" "}
          </a>
        </>
      ),
    });
  };

  const getBeforeSwapAddon = () => {
    if (orderTab === "limit") {
      return (
        <Input
          value={priceImpact}
          onChange={setPriceImpact}
          topLabel="Price"
          currency="SPLX"
        />
      );
    }

    if (orderTab === "cross") {
      return (
        <S.Chain>
          <S.ChainTitle>Destination Chain:</S.ChainTitle>
          <Dropdown
            items={chains}
            onSelect={setDestinationChain}
            borderColor={destinationChain?.color}
          >
            {destinationChain?.icon}
            {destinationChain?.label}
          </Dropdown>
        </S.Chain>
      );
    }

    return undefined;
  };

  useEffect(() => {
    if (!destinationChain && chains.length) {
      setDestinationChain(chains[0]);
    }
  }, [chains]);

  return (
    <S.PlaceOrder>
      <AddCustomTokenModal />

      <PlaceOrderHeader />

      <S.Content>
        <S.Valute>
          <S.ValuteConverterWrapper>
            {orderTab === "limit" && (
              <S.ValuteToggle>
                <S.ValuteToggleButton
                  type="button"
                  isActive={activeBuyTab === "buy"}
                  onClick={() => setActiveBuyTab("buy")}
                >
                  Buy
                </S.ValuteToggleButton>
                <S.ValuteToggleButton
                  type="button"
                  isActive={activeBuyTab === "sell"}
                  onClick={() => setActiveBuyTab("sell")}
                >
                  Sell
                </S.ValuteToggleButton>
              </S.ValuteToggle>
            )}
          </S.ValuteConverterWrapper>
          <ConvertDropdowns
            beforeSwapAddon={getBeforeSwapAddon()}
            afterSwapAddon={
              (orderTab === "limit" || orderTab === "cross") && (
                <Input
                  value={burnToken}
                  onChange={setBurnToken}
                  type="number"
                  max={100}
                  topLabel={
                    <Popup
                      content="Increase arbitrage rewards by up to 10% when you burn 100 SPLX tokens"
                      width={100}
                    >
                      <span className="input__flex-label">
                        Burn SPLX
                        <div>
                          <HelpIcon />
                        </div>
                      </span>
                    </Popup>
                  }
                  currency="SPLX"
                />
              )
            }
          />
        </S.Valute>

        {orderTab === "swap" && (
          <S.BurnLmx>
            <S.BurnLmxInfo>
              Price slippage: <span>0.03%</span>
            </S.BurnLmxInfo>
            <S.CustomInputContainer>
              <Input
                value={burnToken}
                onChange={setBurnToken}
                type="number"
                max={100}
                topLabel={
                  <Popup
                    content="Increase arbitrage rewards by up to 10% when you burn 100 SPLX tokens"
                    width={100}
                  >
                    <span className="input__flex-label">
                      Burn SPLX
                      <div>
                        <HelpIcon />
                      </div>
                    </span>
                  </Popup>
                }
                currency="SPLX"
              />
            </S.CustomInputContainer>
          </S.BurnLmx>
        )}

        {orderTab !== "cross" && (
          <>
            <PlaceOrderAdvanced />
            <PlaceOrderRoutes />
          </>
        )}

        <PlaceOrderTrade />

        {orderTab === "limit" && (
          <S.Info>
            You will buy: <span>10 WBNB for 4270 USDT</span>
            <br />
            Target price: <span>0.001 WBNB for 1 USDT</span>
            <br />
            <br />
            Price slippage: <span>0.03%</span>
          </S.Info>
        )}

        {/* PLACE ORDER SUBMIT BUTTON */}
        <S.SubmitButton disabled={isSubmitDisabled()} onClick={handleSubmit}>
          Give permission to use WNBN
        </S.SubmitButton>
      </S.Content>
    </S.PlaceOrder>
  );
};
