import React, { FC } from 'react';
import classnames from 'classnames';
import { SortArrowIcon, SortWordIcon } from '../../lib/icons';
import './style.scss';

export type SortType = 'up' | 'down' | 'no';

type SortProps = {
  isWordSort?: boolean;
  sort: SortType;
  onChange: (sort: SortType) => void;
};

export const Sort: FC<SortProps> = ({
  isWordSort,
  sort,
  children,
  onChange,
}) => {
  const handleClick = () => {
    if (sort === 'up') {
      onChange('down');
      return;
    }
    if (sort === 'down') {
      onChange('no');
      return;
    }

    onChange('up');
  };

  return (
    <button
      type="button"
      className={classnames('sort', {
        'sort--word': isWordSort,
        'sort--up': sort === 'up',
        'sort--down': sort === 'down',
      })}
      onClick={handleClick}
    >
      <span className="sort__icons">
        <SortArrowIcon />
        <SortWordIcon />
        <SortArrowIcon />
      </span>
      <span className="sort__descr">
        {children}
      </span>
    </button>
  );
};
