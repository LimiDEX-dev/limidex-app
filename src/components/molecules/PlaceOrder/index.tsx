import React, { FC, useEffect, useState } from "react";

import {
  Dropdown,
  DropdownItem,
  Input,
  Popup,
  Button,
  Modal,
  Checkbox,
} from "../../atoms";
import {
  valutes as mockValutes,
  chains as mockChains,
} from "../../../lib/mock/valutes";
import {
  DropdownArrowIcon,
  HelpIcon,
  SearchIcon,
  SwapIcon,
} from "../../../lib/icons";
import { ethereumAddressRegexp } from "../../../lib/constants";
import { Coin, CoinDescription } from "../CoinDescription";
import { useNotifications, useUser } from "../../../store";

import { PlaceOrderProps } from "./types";

import * as S from "./style";

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
            <a
              href="src/components/molecules/PlaceOrder/index"
              target="_blank"
              rel="noreferrer"
            >
              View on BscScan{" "}
            </a>
          </>
        ),
      });

      clearTimeout(timeoutId);
    }, 2000);
  };

  return (
    <S.PlaceOrder>
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
        <S.TitleWrapper>
          <Checkbox
            checked={isExpertMode}
            onChange={setIsExpertMode}
            type="switch"
          >
            Expert Mode
          </Checkbox>
        </S.TitleWrapper>
      )}
      <S.TabSwitch>
        <S.TabSwitchButton
          type="button"
          isActive={activeTab === "swap"}
          onClick={() => setActiveTab("swap")}
        >
          Swap
        </S.TabSwitchButton>
        <S.TabSwitchButton
          type="button"
          isActive={activeTab === "limit"}
          onClick={() => setActiveTab("limit")}
        >
          Limit
        </S.TabSwitchButton>
        <S.TabSwitchButton
          type="button"
          isActive={activeTab === "cross"}
          onClick={() => setActiveTab("cross")}
        >
          Cross-chain
        </S.TabSwitchButton>
      </S.TabSwitch>

      <S.Content>
        <S.Valute>
          <S.ValuteConverterWrapper>
            {activeTab === "limit" && (
              <S.ValuteToggle>
                <S.ValuteToggleButton
                  type="button"
                  isActive={activeBuyTab === 0}
                  onClick={() => setActiveBuyTab(0)}
                >
                  Buy
                </S.ValuteToggleButton>
                <S.ValuteToggleButton
                  type="button"
                  isActive={activeBuyTab === 1}
                  onClick={() => setActiveBuyTab(1)}
                >
                  Sell
                </S.ValuteToggleButton>
              </S.ValuteToggle>
            )}
          </S.ValuteConverterWrapper>
          <S.ValuteConverter>
            <S.ValuteConverterHeader>
              <S.ValuteConverterHeaderItemTitle>
                You Pay
              </S.ValuteConverterHeaderItemTitle>
              <S.ValuteConverterHeaderItem>
                Balance: 12
              </S.ValuteConverterHeaderItem>
            </S.ValuteConverterHeader>
            <S.ValuteConverterContent>
              <Dropdown
                items={valutes}
                onSelect={onSelectSellValute}
                isAddCustomVisible
                noBorder
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
                <S.CustomInputTopLabel>~$4,227</S.CustomInputTopLabel>
                <S.CustomInput
                  type="text"
                  value={toSell}
                  onChange={({ target }) => setToSell(target.value)}
                />
              </div>
            </S.ValuteConverterContent>
          </S.ValuteConverter>
          <S.SwapWrapper noInputs={activeTab === "swap"}>
            {activeTab === "limit" && (
              <Input
                value={priceImpact}
                onChange={setPriceImpact}
                topLabel="Price"
                currency="LMX"
              />
            )}

            {activeTab === "cross" && (
              <S.Chain>
                <S.ChainTitle>Destination Chain:</S.ChainTitle>
                <Dropdown
                  items={chains}
                  onSelect={setSelectedChain}
                  borderColor={selectedChain.color}
                >
                  {selectedChain.icon}
                  {selectedChain.label}
                </Dropdown>
              </S.Chain>
            )}
            <S.SwapButton
              type="button"
              onClick={handleSwapValutes}
              aria-label="swap currencies"
            >
              <SwapIcon />
            </S.SwapButton>
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
          </S.SwapWrapper>
          <S.ValuteConverter>
            <S.ValuteConverterHeader>
              <S.ValuteConverterHeaderItemTitle>
                You Recieve
              </S.ValuteConverterHeaderItemTitle>
              <S.ValuteConverterHeaderItem>
                Balance: 12
              </S.ValuteConverterHeaderItem>
            </S.ValuteConverterHeader>
            <S.ValuteConverterContent>
              <Dropdown
                items={valutes}
                onSelect={onSelectBuyValute}
                isAddCustomVisible
                noBorder
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
                <S.CustomInputTopLabel>~$4,227</S.CustomInputTopLabel>
                <S.CustomInput
                  type="text"
                  value={toBuy}
                  onChange={({ target }) => setToBuy(target.value)}
                />
              </div>
            </S.ValuteConverterContent>
          </S.ValuteConverter>
        </S.Valute>

        {activeTab === "swap" && (
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
                currency="LMX"
              />
            </S.CustomInputContainer>
          </S.BurnLmx>
        )}

        {activeTab !== "cross" && (
          <>
            <S.More
              type="button"
              isOpened={isAdvancedOpened}
              onClick={() => setIsAdvancedOpened((prevState) => !prevState)}
            >
              Advanced
              <DropdownArrowIcon />
            </S.More>

            {isAdvancedOpened && (
              <S.Advanced>
                <S.AdvancedInputs>
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
                </S.AdvancedInputs>
                <S.AdvancedSubmit>
                  <Button
                    size="small"
                    onClick={() => setIsAdvancedOpened(false)}
                  >
                    OK
                  </Button>
                </S.AdvancedSubmit>
              </S.Advanced>
            )}

            <S.Routes>
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <S.RoutesLabel>
                <S.RoutesInput
                  type="radio"
                  name="routing"
                  className="visually-hidden"
                  defaultChecked
                />
                <S.RoutesRadio />
                <S.RoutesRadioLabel>Self route</S.RoutesRadioLabel>
                <S.RoutesRadioTitle>
                  Your order will be executed at the best opportunity at the
                  time of the trade
                </S.RoutesRadioTitle>
              </S.RoutesLabel>
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <S.RoutesLabel>
                <S.RoutesInput
                  type="radio"
                  name="routing"
                  className="visually-hidden"
                />
                <S.RoutesRadio />
                <S.RoutesRadioLabel>Pancakeswap</S.RoutesRadioLabel>
                <S.RoutesRadioTitle>Slippage 0.5% </S.RoutesRadioTitle>
              </S.RoutesLabel>
            </S.Routes>
          </>
        )}

        <S.Trade>
          <Popup
            content="Сhoose in which coin you want to receive arbitrage cashbacks"
            width={140}
          >
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
        </S.Trade>

        {activeTab === "limit" && (
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
