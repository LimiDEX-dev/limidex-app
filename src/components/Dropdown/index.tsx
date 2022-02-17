/* eslint-disable react/no-array-index-key */
import React, {
  FC,
  ReactElement,
  useRef,
  useState,
} from 'react';
import classnames from 'classnames';
import { BorderedPlusIcon, DropdownArrowIcon } from '../../lib/icons';
import { useOutsideAlerter } from '../../lib/hooks';
import './style.scss';

export type DropdownItem = {
  label: string;
  value: string;
  icon?: ReactElement;
};

type DropdownProps = {
  items: DropdownItem[];
  onSelect: (item: DropdownItem) => void;
  handleAddCustom?: () => void;
  isAddCustomVisible?: boolean;
  selectedValue?: DropdownItem;
  notRightBorderRadius?: boolean;
  width?: number;
  textAlign?: 'right' | 'left';
  arrowHidden?: boolean;
}

export const Dropdown: FC<DropdownProps> = ({
  items,
  onSelect,
  handleAddCustom,
  isAddCustomVisible,
  selectedValue,
  notRightBorderRadius,
  width,
  textAlign,
  arrowHidden,
  children,
}) => {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useOutsideAlerter(dropdownRef, () => setIsOpened(false));

  const handleClickItem = (item: DropdownItem) => {
    onSelect(item);

    setIsOpened(false);
  };

  const handleClickAddCustom = () => {
    if (handleAddCustom) {
      handleAddCustom();
    }

    setIsOpened(false);
  };

  return (
    <div
      className={classnames('dropdown', {
        'dropdown--opened': isOpened,
        'dropdown--right': textAlign === 'right',
      })}
      ref={dropdownRef}
    >
      <button
        type="button"
        className={`dropdown__trigger${notRightBorderRadius ? ' dropdown__trigger--not-radius' : ''}`}
        onClick={() => setIsOpened((prevState) => !prevState)}
        style={{ width }}
      >
        {selectedValue ? (
          <>
            {selectedValue.icon}
            <span className="dropdown__trigger__label">{selectedValue.label}</span>
          </>
        ) : children}
        {!arrowHidden && <span className="dropdown__trigger__icon"><DropdownArrowIcon /></span>}
      </button>
      {isOpened && (
        <ul className="dropdown__list">
          {isAddCustomVisible && (
            <li className="dropdown__item dropdown__item--add-custom">
              <button type="button" onClick={handleClickAddCustom} className="dropdown__item__trigger">
                <span className="dropdown__item__icon">
                  <BorderedPlusIcon />
                </span>
                <span className="dropdown__item__label dropdown__item__label--small">Add custom</span>
              </button>
            </li>
          )}
          {items.map((item, index) => (
            <li className="dropdown__item" key={`${item.value}-${index}`}>
              <button type="button" onClick={() => handleClickItem(item)} className="dropdown__item__trigger">
                {item.icon && (
                  <span className="dropdown__item__icon">
                    {item.icon}
                  </span>
                )}
                {textAlign === 'right' ? (
                  <>
                    <span className="dropdown__item__label">{item.label}</span>
                    <span className="dropdown__item__label dropdown__item__label--value">{item.value}</span>
                  </>
                ) : (
                  <span className="dropdown__item__label">{item.label}</span>
                )}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
