import React, { ChangeEvent, FC } from 'react';
import './style.scss';
import { CheckIcon } from '../../lib/icons';

type CheckboxProps = {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export const Checkbox: FC<CheckboxProps> = ({ checked, onChange, children }) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked);
  };

  return (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label className="checkbox__container">
      <input type="checkbox" className="checkbox visually-hidden" checked={checked} onChange={handleChange} />
      <span className="checkbox__styled">
        <CheckIcon />
      </span>
      <span className="checkbox__label">
        {children}
      </span>
    </label>
  );
};
