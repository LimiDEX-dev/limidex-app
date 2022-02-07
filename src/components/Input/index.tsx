import React, {
  ChangeEvent,
  FC, HTMLInputTypeAttribute,
  ReactElement,
} from 'react';
import './style.scss';
import classnames from 'classnames';

type InputProps = {
  value: string;
  onChange: (value: string) => void;
  onBlur?: (value: string) => void;
  label?: string | ReactElement;
  topLabel?: string;
  currency?: string;
  notLeftBorder?: boolean;
  icon?: ReactElement;
  type?: HTMLInputTypeAttribute;
  min?: number;
  max?: number;
}

export const Input: FC<InputProps> = ({
  value,
  onChange,
  onBlur,
  label,
  topLabel,
  currency,
  notLeftBorder,
  icon,
  type,
  min,
  max,
}) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (type === 'number' && +event.target.value > max) {
      onChange(max.toString());
      return;
    }
    if (type === 'number' && +event.target.value < min) {
      onChange(min.toString());
      return;
    }

    onChange(event.target.value);
  };

  return (
    <div className={classnames('input__container', {
      'input__container--no-border': notLeftBorder,
      'input__container--full-width': !!icon,
    })}
    >
      {topLabel && <span className="input__top-label">{topLabel}</span>}
      {label && <span className="input__label">{label}</span>}
      {currency && <span className="input__currency">{currency}</span>}
      <input
        type={type || 'text'}
        className="input"
        value={value}
        onChange={handleChange}
        onBlur={({ target }) => onBlur && onBlur(target.value)}
        min={min}
        max={max}
      />
      {icon}
    </div>
  );
};
