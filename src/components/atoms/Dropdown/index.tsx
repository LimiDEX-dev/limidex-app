/* eslint-disable react/no-array-index-key */
import React, { FC, useRef, useState } from "react";

import {
  BorderedPlusIcon,
  DropdownArrowIcon,
  SearchIcon,
} from "../../../lib/icons";
import { useOutsideAlerter } from "../../../lib/hooks";

import { DropdownProps, DropdownItem } from "./types";

import * as S from "./style";

export type { DropdownItem };

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
  borderColor,
  noBorder,
  children,
}) => {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");
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
    <S.Dropdown ref={dropdownRef}>
      <S.DropdownTrigger
        type="button"
        notRightBorderRadius={notRightBorderRadius}
        onClick={() => setIsOpened((prevState) => !prevState)}
        style={{ width, borderColor: borderColor || undefined }}
        noBorder={noBorder}
      >
        {selectedValue ? (
          <>
            <S.DropdownTriggerValueIcon>
              {selectedValue.icon}
            </S.DropdownTriggerValueIcon>
            <S.DropdownTriggerLabel>
              {selectedValue.label}
            </S.DropdownTriggerLabel>
          </>
        ) : (
          children
        )}
        {!arrowHidden && (
          <S.DropdownTriggerIcon>
            <DropdownArrowIcon />
          </S.DropdownTriggerIcon>
        )}
      </S.DropdownTrigger>
      {isOpened && (
        <S.List>
          {isAddCustomVisible && (
            <S.Item addCustom search>
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label>
                <SearchIcon />
                <input
                  type="text"
                  value={search}
                  onChange={({ target }) => setSearch(target.value)}
                  placeholder="Search"
                />
              </label>
            </S.Item>
          )}
          {items
            .filter(({ label }) =>
              label.toLowerCase().includes(search.toLowerCase()),
            )
            .map((item, index) => (
              <S.Item key={`${item.value}-${index}`}>
                <S.ItemTrigger
                  type="button"
                  onClick={() => handleClickItem(item)}
                >
                  {item.icon && <S.ItemIcon>{item.icon}</S.ItemIcon>}
                  {textAlign === "right" ? (
                    <>
                      <S.ItemLabel>{item.label}</S.ItemLabel>
                      <S.ItemLabel data-value="true">{item.value}</S.ItemLabel>
                    </>
                  ) : (
                    <S.ItemLabel>{item.label}</S.ItemLabel>
                  )}
                </S.ItemTrigger>
              </S.Item>
            ))}
          {isAddCustomVisible && (
            <S.Item addCustom>
              <S.ItemTrigger type="button" onClick={handleClickAddCustom}>
                <S.ItemIcon>
                  <BorderedPlusIcon />
                </S.ItemIcon>
                <S.ItemLabel small>Add custom</S.ItemLabel>
              </S.ItemTrigger>
            </S.Item>
          )}
        </S.List>
      )}
    </S.Dropdown>
  );
};
