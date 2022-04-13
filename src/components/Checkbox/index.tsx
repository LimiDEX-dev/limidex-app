import React, { ChangeEvent, FC } from 'react';
import './style.scss';
import classnames from 'classnames';
import { CheckIcon } from '../../lib/icons';

type CheckboxProps = {
  checked: boolean;
  onChange: (checked: boolean) => void;
  type?: 'switch' | 'checkbox';
}

export const Checkbox: FC<CheckboxProps> = ({
  checked, onChange, children, type,
}) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked);
  };

  return (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label className={classnames('checkbox__container', {
      'checkbox__container--switch': type === 'switch',
    })}
    >
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
