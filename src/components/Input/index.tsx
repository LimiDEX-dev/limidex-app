import React, {
  ChangeEvent,
  FC,
  ReactElement,
} from 'react';
import './style.scss';
import classnames from 'classnames';

type InputProps = {
  value: string;
  onChange: (value: string) => void;
  label?: string | ReactElement;
  topLabel?: string;
  currency?: string;
  notLeftBorder?: boolean;
  icon?: ReactElement;
}

export const Input: FC<InputProps> = ({
  value,
  onChange,
  label,
  topLabel,
  currency,
  notLeftBorder,
  icon,
}) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
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
      <input type="text" className="input" value={value} onChange={handleChange} />
      {icon}
    </div>
  );
};
