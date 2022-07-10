import React, { FC, useEffect, useState } from "react";
import "./style.scss";
import classnames from "classnames";
import { Dropdown, DropdownItem } from "../Dropdown";
import {
  valutes as mockValutes,
  chains as mockChains,
} from "../../lib/mock/valutes";
import { Input } from "../Input";
import {
  DropdownArrowIcon,
  HelpIcon,
  SearchIcon,
  SwapIcon,
} from "../../lib/icons";
import { Popup } from "../Popup";
import { Button } from "../Button";
import { Modal } from "../Modal";
import { Checkbox } from "../Checkbox";
import { ethereumAddressRegexp } from "../../lib/constants";
import { Coin, CoinDescription } from "../CoinDescription";
import { useNotifications, useUser } from "../../store";

type PlaceOrderProps = {
  isExpertMode: boolean;
  setIsExpertMode: (value: boolean) => void;
  activeTab: "limit" | "swap" | "cross";
  setActiveTab: (value: "limit" | "swap" | "cross") => void;
};

export const PlaceOrder: FC<PlaceOrderProps> = ({
  isExpertMode,
  setIsExpertMode,
  activeTab,
  setActiveTab,
}) => {
  const [activeBuyTab, setActiveBuyTab] = useState<0 | 1>(0);
  const [selectedSellValute, setSelectedSellValute] = useState<DropdownItem>(
    mockValutes[0],
  );
  const [selectedBuyValute, setSelectedBuyValute] = useState<DropdownItem>(
    mockValutes[1],
  );
  const [toSell, setToSell] = useState<string>("10.00");
  const [toBuy, setToBuy] = useState<string>("10.00");
  const [valuteCosts, setValuteCosts] = useState<string>("520.00");
  const [burnToken, setBurnToken] = useState<string>("100.00");
  const [priceImpact, setPriceImpact] = useState<string>("422.77");
  const [isAdvancedOpened, setIsAdvancedOpened] = useState<boolean>(false);
  const [takeProfit, setTakeProfit] = useState<string>("0.1");
  const [stopLoss, setStopLoss] = useState<string>("0.1");
  const [trailingSL, setTrailingSL] = useState<string>("0.1");
  const [isAddCustomTokenVisible, setIsAddCustomTokenVisible] =
    useState<boolean>(false);
  const [customToken, setCustomToken] = useState<string>("");
  const [isAddressValid, setIsAddressValid] = useState<boolean>(true);
  const [isUnderstandChecked, setIsUnderstandChecked] =
    useState<boolean>(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [valutes, setValutes] = useState(mockValutes);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [chains, setChains] = useState(mockChains);
  const [selectedChain, setSelectedChain] = useState<DropdownItem>(
    mockChains[0],
  );
  const [tokenInfo, setTokenInfo] = useState<Coin | null>(null);
  const [isTokenInfoVisible, setIsTokenInfoVisible] = useState<boolean>(false);
  const [lastViewedToken, setLastViewedToken] = useState<string>("");
  const [trade, setTrade] = useState<DropdownItem>(selectedSellValute);

  const {
    data: notifications,
    actions: { createNotification },
  } = useNotifications();

  const {
    data: { transactionsPending },
    actions: { setTransactionsPending },
  } = useUser();

  useEffect(() => {
    // THERE IS FUNCTION THAT SET VALUTES (TOKENS) IN PLACE ORDER DROPDOWN
    // setValutes(someData);
  }, []);

  const onSelectSellValute = (valute: DropdownItem) => {
    setSelectedSellValute(valute);
  };

  const onSelectBuyValute = (valute: DropdownItem) => {
    setSelectedBuyValute(valute);
  };

  const handleSwapValutes = () => {
    setSelectedSellValute(selectedBuyValute);
    setSelectedBuyValute(selectedSellValute);
    setToSell(toBuy);
    setToBuy(toSell);
  };

  const handleAddToken = () => {
    setIsAddCustomTokenVisible(false);
    setIsUnderstandChecked(false);
    setCustomToken("");
  };

  const handleBlurCustomToken = (value: string) => {
    if (ethereumAddressRegexp.test(value)) {
      setIsAddressValid(true);

      if (lastViewedToken !== value) {
        setTokenInfo({
          title: "DOGI Coin",
          pot: "example value",
          fee: "example value",
          proxyContract: "example value",
          verifiedContract: "example value",
          holders: "example value",
          supply: "example value",
        });
        setIsTokenInfoVisible(true);

        setLastViewedToken(value);
      }

      return;
    }

    setIsAddressValid(false);
    setLastViewedToken("");
  };

  const isSubmitDisabled = (): boolean => {
    if (activeTab === "limit" || activeTab === "swap") {
      return (
        !toSell ||
        !toBuy ||
        !selectedSellValute ||
        !selectedBuyValute ||
        !priceImpact ||
        !burnToken ||
        (activeTab === "limit" && !valuteCosts) ||
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
      !selectedSellValute ||
      !selectedBuyValute ||
      !selectedChain ||
      !burnToken ||
      transactionsPending > 0 ||
      notifications.length > 0
    );
  };

  const handleSubmit = () => {
    setTransactionsPending(1);

    const timeoutId = setTimeout(() => {
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
            <a href="https://bscscan.com/" target="_blank" rel="noreferrer">
              View on BscScan{" "}
            </a>
          </>
        ),
      });

      clearTimeout(timeoutId);
    }, 2000);
  };

  return (
    <div className="PlaceOrder">
      <Modal
        isVisible={isAddCustomTokenVisible}
        handleClose={() => setIsAddCustomTokenVisible(false)}
        title="Add custom token"
      >
        <CoinDescription
          coin={tokenInfo}
          handleClose={() => setIsTokenInfoVisible(false)}
          isVisible={isTokenInfoVisible}
        />
        <Input
          value={customToken}
          onChange={setCustomToken}
          onBlur={handleBlurCustomToken}
          icon={<SearchIcon />}
        />
        {!isAddressValid && (
          <span className="PlaceOrder__modal__error">
            Invalid token address
          </span>
        )}
        <div className="PlaceOrder__modal-text">
          <span className="PlaceOrder__modal-text__title">
            Trade at your own risk
          </span>
          <span className="PlaceOrder__modal-text__description">
            Curabitur rhoncus facilisis lacus, sit amet luctus tortor
            consectetur a. Nullam vitae dapibus leo, ac elementum elit. Donec
            congue turpis id orci vulputate, sit amet faucibus velit
            pellentesque.
          </span>
        </div>
        <Checkbox
          checked={isUnderstandChecked}
          onChange={setIsUnderstandChecked}
        >
          I understand
        </Checkbox>
        <Button
          disabled={!isUnderstandChecked || !customToken || !isAddressValid}
          onClick={handleAddToken}
        >
          Add token
        </Button>
      </Modal>
      {activeTab === "swap" && (
        <div className="title__wrapper">
          <Checkbox
            checked={isExpertMode}
            onChange={setIsExpertMode}
            type="switch"
          >
            Expert Mode
          </Checkbox>
        </div>
      )}
      <div className="tab-switch">
        <button
          type="button"
          className={activeTab === "swap" ? "active" : ""}
          onClick={() => setActiveTab("swap")}
        >
          Swap
        </button>
        <button
          type="button"
          className={activeTab === "limit" ? "active" : ""}
          onClick={() => setActiveTab("limit")}
        >
          Limit
        </button>
        <button
          type="button"
          className={activeTab === "cross" ? "active" : ""}
          onClick={() => setActiveTab("cross")}
        >
          Cross-chain
        </button>
      </div>

      <div className="PlaceOrder__content">
        <div className="valute-swap">
          <div className="valute-converter__label__wrapper">
            {activeTab === "limit" && (
              <div className="valute-toggle-container">
                <div className="valute-toggle">
                  <button
                    type="button"
                    className={activeBuyTab === 0 ? "active" : ""}
                    onClick={() => setActiveBuyTab(0)}
                  >
                    Buy
                  </button>
                  <button
                    type="button"
                    className={activeBuyTab === 1 ? "active" : ""}
                    onClick={() => setActiveBuyTab(1)}
                  >
                    Sell
                  </button>
                </div>
              </div>
            )}
          </div>
          <div className="valute-converter">
            <div className="valute-converter__header">
              <span className="valute-converter__header__item valute-converter__header__item--title">
                You Pay
              </span>
              <span className="valute-converter__header__item">
                Balance: 12
              </span>
            </div>
            <div className="valute-converter__content">
              <Dropdown
                items={valutes}
                onSelect={onSelectSellValute}
                isAddCustomVisible
                notRightBorderRadius
                width={110}
                handleAddCustom={() => setIsAddCustomTokenVisible(true)}
              >
                {selectedSellValute.icon}
                <span className="dropdown__trigger__label">
                  {selectedSellValute.label}
                  <br />
                  <span>Wrapped BNB</span>
                </span>
              </Dropdown>
              <div>
                <span className="custom-input__top-label">~$4,227</span>
                <input
                  type="text"
                  className="custom-input"
                  value={toSell}
                  onChange={({ target }) => setToSell(target.value)}
                />
              </div>
            </div>
          </div>
          <div
            className={classnames("swap__wrapper", {
              "swap__wrapper--no-inputs": activeTab === "swap",
            })}
          >
            {activeTab === "limit" && (
              <Input
                value={priceImpact}
                onChange={setPriceImpact}
                topLabel="Price"
                currency="LMX"
              />
            )}

            {activeTab === "cross" && (
              <div className="chain">
                <span className="chain__title">Destination Chain:</span>
                <Dropdown
                  items={chains}
                  onSelect={setSelectedChain}
                  borderColor={selectedChain.color}
                >
                  {selectedChain.icon}
                  {selectedChain.label}
                </Dropdown>
              </div>
            )}
            <button
              type="button"
              className="swap-icon"
              onClick={handleSwapValutes}
              aria-label="swap currencies"
            >
              <SwapIcon />
            </button>
            {(activeTab === "limit" || activeTab === "cross") && (
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
                currency="LMX"
              />
            )}
          </div>
          <div className="valute-converter">
            <div className="valute-converter__header">
              <span className="valute-converter__header__item valute-converter__header__item--title">
                You Recieve
              </span>
              <span className="valute-converter__header__item">
                Balance: 12
              </span>
            </div>
            <div className="valute-converter__content">
              <Dropdown
                items={valutes}
                onSelect={onSelectBuyValute}
                isAddCustomVisible
                notRightBorderRadius
                width={110}
                handleAddCustom={() => setIsAddCustomTokenVisible(true)}
              >
                {selectedBuyValute.icon}
                <span className="dropdown__trigger__label">
                  {selectedBuyValute.label}
                  <br />
                  <span>Wrapped BNB</span>
                </span>
              </Dropdown>
              <div>
                <span className="custom-input__top-label">~$4,227</span>
                <input
                  type="text"
                  className="custom-input"
                  value={toBuy}
                  onChange={({ target }) => setToBuy(target.value)}
                />
              </div>
            </div>
          </div>
        </div>

        {activeTab === "swap" && (
          <div className="burn-lmx">
            <div className="info">
              Price slippage: <span>0.03%</span>
            </div>
            <div className="input__container--custom">
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
                currency="LMX"
              />
            </div>
          </div>
        )}

        {activeTab !== "cross" && (
          <>
            <button
              type="button"
              className={classnames("more", {
                "more--opened": isAdvancedOpened,
              })}
              onClick={() => setIsAdvancedOpened((prevState) => !prevState)}
            >
              Advanced
              <DropdownArrowIcon />
            </button>

            {isAdvancedOpened && (
              <div className="advanced-fields">
                <div className="advanced-fields__inputs">
                  <Input
                    value={takeProfit}
                    onChange={setTakeProfit}
                    label={
                      <Popup content="Lorem ipsum dolor sit amet" width={100}>
                        <span className="input__flex-label">Take profit</span>
                      </Popup>
                    }
                  />
                  <Input
                    value={stopLoss}
                    onChange={setStopLoss}
                    label={
                      <Popup content="Lorem ipsum dolor sit amet" width={100}>
                        <span className="input__flex-label">Stop loss</span>
                      </Popup>
                    }
                  />
                  <Input
                    value={trailingSL}
                    onChange={setTrailingSL}
                    label={
                      <Popup content="Lorem ipsum dolor sit amet" width={100}>
                        <span className="input__flex-label">Trailing SL</span>
                      </Popup>
                    }
                    currency="%"
                  />
                </div>
                <div className="advanced-fields__submit">
                  <Button
                    size="small"
                    onClick={() => setIsAdvancedOpened(false)}
                  >
                    OK
                  </Button>
                </div>
              </div>
            )}

            <div className="routes-container">
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label>
                <input
                  type="radio"
                  name="routing"
                  className="radio-input visually-hidden"
                  defaultChecked
                />
                <div className="radio active" />
                <div className="radio-label">Self route</div>
                <div className="radio-title">
                  Your order will be executed at the best opportunity at the
                  time of the trade
                </div>
              </label>
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label>
                <input
                  type="radio"
                  name="routing"
                  className="radio-input visually-hidden"
                />
                <div className="radio" />
                <div className="radio-label">Pancakeswap</div>
                <div className="radio-title">Slippage 0.5% </div>
              </label>
            </div>
          </>
        )}

        <div className="trade">
          <Popup content="Сhoose in which coin you want to receive arbitrage cashbacks">
            <span className="input__flex-label">
              Trade Reward
              <div>
                <HelpIcon />
              </div>
            </span>
          </Popup>
          <Dropdown
            items={[selectedBuyValute, selectedSellValute]}
            onSelect={(item) => setTrade(item)}
          >
            <span
              style={{
                width: 25,
                height: 25,
                background: "rgba(255, 249, 249, 0.5)",
                borderRadius: "100%",
              }}
            />
            <span className="dropdown__trigger__label">
              <span>{trade.label}</span>
              <br />
              Wrapped BNB
            </span>
          </Dropdown>
        </div>

        {activeTab === "limit" && (
          <div className="info">
            You will buy: <span>10 WBNB for 4270 USDT</span>
            <br />
            Target price: <span>0.001 WBNB for 1 USDT</span>
            <br />
            <br />
            Price slippage: <span>0.03%</span>
          </div>
        )}

        {/* PLACE ORDER SUBMIT BUTTON */}
        <Button disabled={isSubmitDisabled()} onClick={handleSubmit}>
          Give permission to use WNBN
        </Button>
      </div>
    </div>
  );
};
