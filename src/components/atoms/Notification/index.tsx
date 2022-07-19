import React, { FC, useEffect, useState } from "react";
import classnames from "classnames";

import { NotificationProps } from "./types";
import { CloseIcon, ErrorIcon, SuccessIcon } from "../../../lib/icons";

import * as S from "./style";

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
    <S.Notification status={status} closed={isClosed}>
      <S.Wrapper>
        {status === "success" ? <SuccessIcon /> : <ErrorIcon />}
      </S.Wrapper>
      <S.Wrapper>
        <S.Title>{title}</S.Title>
        <S.Content>{children}</S.Content>
      </S.Wrapper>
      <S.CloseButton type="button" onClick={handleClickClose}>
        <CloseIcon />
      </S.CloseButton>
    </S.Notification>
  );
};
