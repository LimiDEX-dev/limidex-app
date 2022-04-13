import React, { FC, useEffect, useState } from 'react';
import './style.scss';
import classnames from 'classnames';
import { Dropdown, DropdownItem } from '../Dropdown';
import { valutes as mockValutes, chains as mockChains } from '../../lib/mock/valutes';
import { Input } from '../Input';
import { DropdownArrowIcon, SearchIcon } from '../../lib/icons';
import { Popup } from '../Popup';
import { Button } from '../Button';
import { Modal } from '../Modal';
import { Checkbox } from '../Checkbox';
import { ethereumAddressRegexp } from '../../lib/constants';
import { Coin, CoinDescription } from '../CoinDescription';

type PlaceOrderProps = {
  isExpertMode: boolean;
  setIsExpertMode: (value: boolean) => void;
  activeTab: number;
  setActiveTab: (value: 0 | 1 | 2) => void;
}

export const PlaceOrder: FC<PlaceOrderProps> = ({
  isExpertMode, setIsExpertMode, activeTab, setActiveTab,
}) => {
  const [activeBuyTab, setActiveBuyTab] = useState<0 | 1>(0);
  const [selectedSellValute, setSelectedSellValute] = useState<DropdownItem>(mockValutes[0]);
  const [selectedBuyValute, setSelectedBuyValute] = useState<DropdownItem>(mockValutes[1]);
  const [toSell, setToSell] = useState<string>('10.00');
  const [toBuy, setToBuy] = useState<string>('10.00');
  const [valuteCosts, setValuteCosts] = useState<string>('520.00');
  const [burnToken, setBurnToken] = useState<string>('100.00');
  const [priceImpact, setPriceImpact] = useState<string>('422.77');
  const [isAdvancedOpened, setIsAdvancedOpened] = useState<boolean>(false);
  const [takeProfit, setTakeProfit] = useState<string>('0.1');
  const [stopLoss, setStopLoss] = useState<string>('0.1');
  const [trailingSL, setTrailingSL] = useState<string>('0.1');
  const [isAddCustomTokenVisible, setIsAddCustomTokenVisible] = useState<boolean>(false);
  const [customToken, setCustomToken] = useState<string>('');
  const [isAddressValid, setIsAddressValid] = useState<boolean>(true);
  const [isUnderstandChecked, setIsUnderstandChecked] = useState<boolean>(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [valutes, setValutes] = useState(mockValutes);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [chains, setChains] = useState(mockChains);
  const [selectedChain, setSelectedChain] = useState<DropdownItem>(mockChains[0]);
  const [tokenInfo, setTokenInfo] = useState<Coin | null>(null);
  const [isTokenInfoVisible, setIsTokenInfoVisible] = useState<boolean>(false);
  const [lastViewedToken, setLastViewedToken] = useState<string>('');

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
    setCustomToken('');
  };

  const handleBlurCustomToken = (value: string) => {
    if (ethereumAddressRegexp.test(value)) {
      setIsAddressValid(true);

      if (lastViewedToken !== value) {
        setTokenInfo({
          title: 'DOGI Coin',
          pot: 'example value',
          fee: 'example value',
          proxyContract: 'example value',
          verifiedContract: 'example value',
          holders: 'example value',
          supply: 'example value',
        });
        setIsTokenInfoVisible(true);

        setLastViewedToken(value);
      }

      return;
    }

    setIsAddressValid(false);
    setLastViewedToken('');
  };

  const isSubmitDisabled = (): boolean => {
    if (activeTab === 0 || activeTab === 1) {
      return !toSell
        || !toBuy
        || !selectedSellValute
        || !selectedBuyValute
        || !priceImpact
        || !burnToken
        || (activeTab === 0 && !valuteCosts)
        || !takeProfit
        || !stopLoss
        || !trailingSL;
    }

    return !toSell
      || !toBuy
      || !selectedSellValute
      || !selectedBuyValute
      || !selectedChain
      || !burnToken;
  };

  const handleSubmit = () => {
    // PLACE ORDER SUBMIT FUNCTION
    // eslint-disable-next-line no-alert
    alert('PlaceOrder submit alert');
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
            Curabitur rhoncus facilisis lacus, sit amet luctus tortor consectetur a.
            Nullam vitae dapibus leo, ac elementum elit. Donec congue turpis id orci vulputate,
            sit amet faucibus velit pellentesque.
          </span>
        </div>
        <Checkbox checked={isUnderstandChecked} onChange={setIsUnderstandChecked}>
          I understand
        </Checkbox>
        <Button
          disabled={!isUnderstandChecked || !customToken || !isAddressValid}
          onClick={handleAddToken}
        >
          Add token
        </Button>
      </Modal>
      <div className="title__wrapper">
        <span className="title">Place order</span>
        {activeTab === 1 && (
          <Checkbox checked={isExpertMode} onChange={setIsExpertMode} type="switch">
            Expert Mode
          </Checkbox>
        )}
      </div>
      <div className="tab-switch">
        <button
          type="button"
          className={activeTab === 0 ? 'active' : ''}
          onClick={() => setActiveTab(0)}
        >
          Limit
        </button>
        <button
          type="button"
          className={activeTab === 1 ? 'active' : ''}
          onClick={() => setActiveTab(1)}
        >
          Swap
        </button>
        <button
          type="button"
          className={activeTab === 2 ? 'active' : ''}
          onClick={() => setActiveTab(2)}
        >
          Cross-chain
        </button>
      </div>

      <div className="PlaceOrder__content">
        <div className="valute-swap">
          <div className="valute-converter__label__wrapper">
            <span className="valute-converter__label">You Pay</span>
            {activeTab === 0 && (
              <div className="valute-toggle-container">
                <div className="valute-toggle">
                  <button
                    type="button"
                    className={activeBuyTab === 0 ? 'active' : ''}
                    onClick={() => setActiveBuyTab(0)}
                  >
                    Buy
                  </button>
                  <button
                    type="button"
                    className={activeBuyTab === 1 ? 'active' : ''}
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
              <span className="valute-converter__header__item">Wrapped BNB</span>
              <span className="valute-converter__header__item">
                Balance: 12
              </span>
            </div>
            <div className="valute-converter__content">
              <Dropdown
                items={valutes}
                onSelect={onSelectSellValute}
                selectedValue={selectedSellValute}
                isAddCustomVisible
                notRightBorderRadius
                width={110}
                handleAddCustom={() => setIsAddCustomTokenVisible(true)}
              />
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
          <div className={classnames('swap__wrapper', {
            'swap__wrapper--no-inputs': activeTab === 1,
          })}
          >
            {activeTab === 0 && (
              <Input
                value={priceImpact}
                onChange={setPriceImpact}
                topLabel="Price"
                currency="LMX"
              />
            )}

            {activeTab === 2 && (
              <div className="chain">
                <span className="chain__title">
                  Destination Chain:
                </span>
                <Dropdown items={chains} onSelect={setSelectedChain} borderColor={selectedChain.color}>
                  {selectedChain.icon}
                  {selectedChain.label}
                </Dropdown>
              </div>
            )}
            <button type="button" className="swap-icon" onClick={handleSwapValutes} aria-label="swap currencies" />
            {(activeTab === 0 || activeTab === 2) && (
              <Input
                value={burnToken}
                onChange={setBurnToken}
                type="number"
                max={100}
                topLabel={(
                  <Popup content="Lorem ipsum dolor sit amet" width={100}>
                    <span className="input__flex-label">
                      Burn LMX
                    </span>
                  </Popup>
                  )}
                currency="LMX"
              />
            )}
          </div>
          <div className="valute-converter__label__wrapper">
            <span className="valute-converter__label">You Recieve</span>
          </div>
          <div className="valute-converter">
            <div className="valute-converter__header">
              <span className="valute-converter__header__item">Wrapped BNB</span>
              <span className="valute-converter__header__item">
                Balance: 12
              </span>
            </div>
            <div className="valute-converter__content">
              <Dropdown
                items={valutes}
                onSelect={onSelectBuyValute}
                selectedValue={selectedBuyValute}
                isAddCustomVisible
                notRightBorderRadius
                width={110}
                handleAddCustom={() => setIsAddCustomTokenVisible(true)}
              />
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

        {activeTab === 1 && (
          <div className="burn-lmx">
            <div className="info">
              Price slippage:
              {' '}
              <span>0.03%</span>
            </div>
            <div className="input__container--custom">
              <Input
                value={burnToken}
                onChange={setBurnToken}
                type="number"
                max={100}
                topLabel={(
                  <Popup content="Lorem ipsum dolor sit amet" width={100}>
                    <span className="input__flex-label">
                      Burn LMX
                    </span>
                  </Popup>
                  )}
                currency="LMX"
              />
            </div>
          </div>
        )}

        {activeTab !== 2 && (
          <>
            <button
              type="button"
              className={classnames('more', {
                'more--opened': isAdvancedOpened,
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
                    label={(
                      <Popup content="Lorem ipsum dolor sit amet" width={100}>
                        <span className="input__flex-label">
                          Take profit
                        </span>
                      </Popup>
                    )}
                  />
                  <Input
                    value={stopLoss}
                    onChange={setStopLoss}
                    label={(
                      <Popup content="Lorem ipsum dolor sit amet" width={100}>
                        <span className="input__flex-label">
                          Stop loss
                        </span>
                      </Popup>
                    )}
                  />
                  <Input
                    value={trailingSL}
                    onChange={setTrailingSL}
                    label={(
                      <Popup content="Lorem ipsum dolor sit amet" width={100}>
                        <span className="input__flex-label">
                          Trailing SL
                        </span>
                      </Popup>
                    )}
                    currency="%"
                  />
                </div>
                <div className="advanced-fields__submit">
                  <Button size="small" onClick={() => setIsAdvancedOpened(false)}>
                    Ok
                  </Button>
                </div>
              </div>
            )}

            <div className="routes-container">
              <div className="routes-title">Routing</div>
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label>
                <input type="radio" name="routing" className="radio-input visually-hidden" defaultChecked />
                <div className="radio active" />
                <div className="radio-label">Self route</div>
                <div className="radio-title">Your order will be executed at the best opportunity at the time of the trade</div>
              </label>
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label>
                <input type="radio" name="routing" className="radio-input visually-hidden" />
                <div className="radio" />
                <div className="radio-label">Pancakeswap</div>
                <div className="radio-title">Slippage  0.5%  </div>
              </label>
            </div>
          </>
        )}

        {activeTab === 0 && (
          <div className="info">
            You will buy:
            {' '}
            <span>10 WBNB for 4270 USDT</span>
            <br />
            Target price:
            {' '}
            <span>0.001 WBNB  for 1 USDT</span>
            <br />
            <br />
            Price slippage:
            {' '}
            <span>0.03%</span>
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
