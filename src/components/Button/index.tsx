import React, { FC } from 'react';
import classnames from 'classnames';
import './style.scss';

type ButtonProps = {
  onClick?: () => void;
  size?: 'small' | 'large';
  disabled?: boolean;
}

export const Button: FC<ButtonProps> = ({
  children,
  onClick,
  size = 'large',
  disabled,
}) => (
  <button
    className={classnames('button', {
      'button--small': size === 'small',
      'button--large': size === 'large',
    })}
    type="button"
    onClick={onClick}
    disabled={disabled}
  >
    {children}
  </button>
);
