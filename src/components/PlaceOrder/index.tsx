import React, { useState } from 'react';
import './style.scss';
import { Dropdown, DropdownItem } from '../Dropdown';
import { valutes } from '../../lib/mock/valutes';
import { Input } from '../Input';
import { DropdownArrowIcon, HelpIcon } from '../../lib/icons';
import { Popup } from '../Popup';
import { Button } from '../Button';

export function PlaceOrder(props: any) {
  const [activeTab, setActiveTab] = useState<0 | 1>(0);
  const [activeBuyTab, setActiveBuyTab] = useState<0 | 1>(0);
  const [selectedSellValute, setSelectedSellValute] = useState<DropdownItem>(valutes[0]);
  const [selectedBuyValute, setSelectedBuyValute] = useState<DropdownItem>(valutes[1]);
  const [toSell, setToSell] = useState<string>('10.00');
  const [toBuy, setToBuy] = useState<string>('10.00');
  const [valueCosts, setValueCosts] = useState<string>('520.00');
  const [burnToken, setBurnToken] = useState<string>('100.00');
  const [priceImpact, setPriceImpact] = useState<string>('0.1');
  const [isAdvancedOpened, setIsAdvancedOpened] = useState<boolean>(false);
  const [takeProfit, setTakeProfit] = useState<string>('0.1');
  const [stopLoss, setStopLoss] = useState<string>('0.1');
  const [trailingSL, setTrailingSL] = useState<string>('0.1');

  const onSelectSellValute = (valute: DropdownItem) => {
    setSelectedSellValute(valute);
  };

  const onSelectBuyValute = (valute: DropdownItem) => {
    setSelectedBuyValute(valute);
  };

  const handleSwapValutes = () => {
    setSelectedSellValute(selectedBuyValute);
    setSelectedBuyValute(selectedSellValute);
  };

  return (
    <div className="PlaceOrder">
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
      </div>

      <div className="valute-swap">
        <div className="valute-converter">
          <Dropdown
            items={valutes}
            onSelect={onSelectSellValute}
            selectedValue={selectedSellValute}
            isAddCustomVisible
            notRightBorderRadius
            width={100}
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
            width={100}
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
          <Input value={valueCosts} onChange={setValueCosts} label="1 WNBN costs" currency="$" />
        </div>
      )}

      <div className="valute-tolerance">
        <Input value={burnToken} onChange={setBurnToken} label="Burn Token" currency="LMX" />
      </div>

      <div className="valute-impact">
        <Input
          value={priceImpact}
          onChange={setPriceImpact}
          label={(
            <span className="input__flex-label">
              Price impact
              <Popup content="Curabitur rhoncus facilisis lacus, sit amet luctus tortor consectetur a. Nullam vitae dapibus leo, ac elementum elit. Donec congue turpis id orci vulputate, sit amet faucibus velit pellentesque.">
                <HelpIcon />
              </Popup>
            </span>
        )}
          currency="%"
        />
      </div>

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
        className={`more${isAdvancedOpened ? ' more--opened' : ''}`}
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
                <span className="input__flex-label">
                  Take profit
                  <Popup content="Lorem ipsum dolor sit amet">
                    <HelpIcon />
                  </Popup>
                </span>
            )}
              currency="%"
            />
            <Input
              value={stopLoss}
              onChange={setStopLoss}
              label={(
                <span className="input__flex-label">
                  Stop loss
                  <Popup content="Lorem ipsum dolor sit amet">
                    <HelpIcon />
                  </Popup>
                </span>
            )}
              currency="%"
            />
            <Input
              value={trailingSL}
              onChange={setTrailingSL}
              label={(
                <span className="input__flex-label">
                  Trailing SL
                  <Popup content="Lorem ipsum dolor sit amet">
                    <HelpIcon />
                  </Popup>
                </span>
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

      <div className="info">
        You will buy WBNB for USDT
        Target price – 0.001 WBNB. Network fee: slow
      </div>

      <Button>
        Give permission to use WNBN
      </Button>
    </div>
  );
}
