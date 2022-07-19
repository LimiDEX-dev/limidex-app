import React, { FC } from 'react';
import './style.scss';

export const Description: FC = ({ children }) => (
  <span className="description">
    {children}
  </span>
);
