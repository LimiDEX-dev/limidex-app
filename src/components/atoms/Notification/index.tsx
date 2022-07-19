import React, { FC, useEffect, useState } from "react";
import classnames from "classnames";

import { NotificationProps } from "./types";
import { CloseIcon, ErrorIcon, SuccessIcon } from "../../../lib/icons";

import "./style.scss";

export const Notification: FC<NotificationProps> = ({
  timeout,
  title,
  status,
  children,
  handleClose,
}) => {
  const [isClosed, setIsClosed] = useState(false);

  useEffect(() => {
    const timeoutClosedId = setTimeout(() => setIsClosed(true), timeout - 200);
    const timeoutId = setTimeout(handleClose, timeout);

    return () => {
      clearTimeout(timeoutClosedId);
      clearTimeout(timeoutId);
    };
  }, [timeout]);

  const handleClickClose = () => {
    setIsClosed(true);

    const timeoutId = setTimeout(() => {
      handleClose();

      clearTimeout(timeoutId);
    }, 200);
  };

  return (
    <div
      className={classnames("notification", {
        "notification--error": status === "error",
        "notification--success": status === "success",
        "notification--closed": isClosed,
      })}
    >
      <div className="notification__wrapper">
        {status === "success" ? <SuccessIcon /> : <ErrorIcon />}
      </div>
      <div className="notification__wrapper">
        <span className="notification__title">{title}</span>
        <div className="notification__content">{children}</div>
      </div>
      <button
        className="notification__close"
        type="button"
        onClick={handleClickClose}
      >
        <CloseIcon />
      </button>
    </div>
  );
};
