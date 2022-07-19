import React, { FC, forwardRef, PropsWithChildren, useRef } from "react";
import "./style.scss";
import classnames from "classnames";
import { CloseIcon } from "../../../lib/icons";

type ModalProps = {
  isVisible: boolean;
  handleClose: () => void;
  title?: string;
};

export const Modal = forwardRef<HTMLDivElement, PropsWithChildren<ModalProps>>(
  ({ isVisible, handleClose, title, children }, ref) => {
    const wrapperRef = useRef<HTMLDivElement>(null);

    // useOutsideAlerter(wrapperRef, handleClose);

    return (
      <div
        className={classnames("modal", {
          "modal--visible": isVisible,
        })}
        ref={ref}
      >
        <div className="modal__wrapper" ref={wrapperRef}>
          <div className="modal__header">
            <span className="modal__title">{title}</span>
            <button
              type="button"
              className="modal__close"
              onClick={handleClose}
            >
              <CloseIcon />
            </button>
          </div>
          <div className="modal__content">{children}</div>
        </div>
      </div>
    );
  },
);
