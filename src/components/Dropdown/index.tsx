import React, {
  FC, ReactElement, useRef, useState,
} from 'react';
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
  selectedValue: DropdownItem;
  notRightBorderRadius?: boolean;
  width?: number;
}

export const Dropdown: FC<DropdownProps> = ({
  items,
  onSelect,
  handleAddCustom,
  isAddCustomVisible,
  selectedValue,
  notRightBorderRadius,
  width,
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
    <div className={`dropdown${isOpened ? ' dropdown--opened' : ''}`} ref={dropdownRef}>
      <button
        type="button"
        className={`dropdown__trigger${notRightBorderRadius ? ' dropdown__trigger--not-radius' : ''}`}
        onClick={() => setIsOpened((prevState) => !prevState)}
        style={{ width }}
      >
        {selectedValue.icon}
        <span className="dropdown__trigger__label">{selectedValue.label}</span>
        <DropdownArrowIcon />
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
            // eslint-disable-next-line react/no-array-index-key
            <li className="dropdown__item" key={`${item.value}-${index}`}>
              <button type="button" onClick={() => handleClickItem(item)} className="dropdown__item__trigger">
                {item.icon && (
                  <span className="dropdown__item__icon">
                    {item.icon}
                  </span>
                )}
                <span className="dropdown__item__label">{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
