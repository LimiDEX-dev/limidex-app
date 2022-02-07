import React, { FC, useState } from 'react';
import './style.scss';

type PopupProps = {
  content: string;
}

export const Popup: FC<PopupProps> = ({ content, children }) => {
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
        >
          <div className="popup__content__wrapper">
            {content}
          </div>
        </div>
      )}
    </div>
  );
};
