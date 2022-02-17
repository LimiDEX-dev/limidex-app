import React, { useEffect, useState } from 'react';
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

export function PlaceOrder() {
  const [activeTab, setActiveTab] = useState<0 | 1 | 2>(0);
  const [activeBuyTab, setActiveBuyTab] = useState<0 | 1>(0);
  const [selectedSellValute, setSelectedSellValute] = useState<DropdownItem>(mockValutes[0]);
  const [selectedBuyValute, setSelectedBuyValute] = useState<DropdownItem>(mockValutes[1]);
  const [toSell, setToSell] = useState<string>('10.00');
  const [toBuy, setToBuy] = useState<string>('10.00');
  const [valuteCosts, setValuteCosts] = useState<string>('520.00');
  const [burnToken, setBurnToken] = useState<string>('100.00');
  const [priceImpact, setPriceImpact] = useState<string>('0.1');
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
      <div className="title">Place order</div>
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
          <div className="valute-converter">
            <Dropdown
              items={valutes}
              onSelect={onSelectSellValute}
              selectedValue={selectedSellValute}
              isAddCustomVisible
              notRightBorderRadius
              width={110}
              handleAddCustom={() => setIsAddCustomTokenVisible(true)}
            />
            <Input
              value={toSell}
              onChange={setToSell}
              topLabel="Balance 12 WNBM"
              label="To sell"
              notLeftBorder
            />
          </div>
          <button type="button" className="swap-icon" onClick={handleSwapValutes} aria-label="swap currencies" />
          <div className="valute-converter">
            <Dropdown
              items={valutes}
              onSelect={onSelectBuyValute}
              selectedValue={selectedBuyValute}
              isAddCustomVisible
              notRightBorderRadius
              width={110}
              handleAddCustom={() => setIsAddCustomTokenVisible(true)}
            />
            <Input
              value={toBuy}
              onChange={setToBuy}
              topLabel="-1000$"
              label="To buy"
              notLeftBorder
            />
          </div>
        </div>

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
            <Input value={valuteCosts} onChange={setValuteCosts} label="1 WNBN costs" currency="$" />
          </div>
        )}

        {activeTab === 2 && (
          <div className="chain">
            <span className="chain__title">
              Destination Chain:
            </span>
            <Dropdown items={chains} onSelect={setSelectedChain}>
              {selectedChain.icon}
              {selectedChain.label}
            </Dropdown>
          </div>
        )}

        <div className="valute-tolerance">
          <Input
            value={burnToken}
            onChange={setBurnToken}
            type="number"
            max={100}
            label="Burn Token"
            currency="LMX"
          />
        </div>

        {activeTab !== 2 && (
          <div className="valute-impact">
            <Input
              value={priceImpact}
              onChange={setPriceImpact}
              label={(
                <Popup content="Curabitur rhoncus facilisis lacus, sit amet luctus tortor consectetur a. Nullam vitae dapibus leo, ac elementum elit. Donec congue turpis id orci vulputate, sit amet faucibus velit pellentesque.">
                  <span className="input__flex-label">
                    Price impact
                  </span>
                </Popup>
          )}
              currency="%"
            />
          </div>
        )}

        {activeTab !== 2 && (
          <>
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
          </>
        )}

        <div className="info">
          You will buy WBNB for USDT
          {' '}
          <br />
          Target price – 0.001 WBNB. Network fee: slow
        </div>

        {/* PLACE ORDER SUBMIT BUTTON */}
        <Button disabled={isSubmitDisabled()} onClick={handleSubmit}>
          Give permission to use WNBN
        </Button>
      </div>
    </div>
  );
}
