import React, { FC } from 'react';
import './style.scss';

export const Title: FC = ({ children }) => (
  <h1 className="title">
    {children}
  </h1>
);
