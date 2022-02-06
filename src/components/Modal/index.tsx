import React, { FC, useRef } from 'react';
import './style.scss';
import { CloseIcon } from '../../lib/icons';
import { useOutsideAlerter } from '../../lib/hooks';

type ModalProps = {
  isVisible: boolean;
  handleClose: () => void;
  title: string;
}

export const Modal: FC<ModalProps> = ({
  isVisible,
  handleClose,
  title,
  children,
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  // useOutsideAlerter(wrapperRef, handleClose);

  return (
    <div className={`modal${isVisible ? ' modal--visible' : ''}`}>
      <div className="modal__wrapper" ref={wrapperRef}>
        <div className="modal__header">
          <span className="modal__title">
            {title}
          </span>
          <button type="button" className="modal__close" onClick={handleClose}>
            <CloseIcon />
          </button>
        </div>
        <div className="modal__content">
          {children}
        </div>
      </div>
    </div>
  );
};
