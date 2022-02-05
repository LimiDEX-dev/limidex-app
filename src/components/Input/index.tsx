import React, {
  ChangeEvent,
  FC,
  ReactElement,
  useState,
} from 'react';
import './style.scss';

type InputProps = {
  value?: string;
  onChange?: (value: string) => void;
  label?: string | ReactElement;
  topLabel?: string;
  currency?: string;
  notLeftBorder?: boolean;
}

export const Input: FC<InputProps> = ({
  value: defaultValue,
  onChange,
  label,
  topLabel,
  currency,
  notLeftBorder,
}) => {
  const [value, setValue] = useState<string>(defaultValue || '');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);

    if (onChange) {
      onChange(event.target.value);
    }
  };

  return (
    <div className={`input__container${notLeftBorder ? ' input__container--no-border' : ''}`}>
      {topLabel && <span className="input__top-label">{topLabel}</span>}
      {label && <span className="input__label">{label}</span>}
      {currency && <span className="input__currency">{currency}</span>}
      <input type="text" className="input" value={value} onChange={handleChange} />
    </div>
  );
};
