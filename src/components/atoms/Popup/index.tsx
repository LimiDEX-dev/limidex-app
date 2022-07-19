import React, { FC, useState } from 'react';
import './style.scss';

type PopupProps = {
  content: string;
  width?: number;
}

export const Popup: FC<PopupProps> = ({ content, children, width }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  return (
    <div className="popup">
      <button
        className="popup__trigger"
        type="button"
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      >
        {children}
      </button>
      {isVisible && (
        <div
          className="popup__content"
          onMouseEnter={() => setIsVisible(true)}
          onMouseLeave={() => setIsVisible(false)}
          style={{ left: width ? `calc(50% - ${width / 2}px)` : undefined }}
        >
          <div
            className="popup__content__wrapper"
            style={{ width }}
          >
            {content}
          </div>
        </div>
      )}
    </div>
  );
};
