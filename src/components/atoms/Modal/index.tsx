import React, { forwardRef, PropsWithChildren, useRef } from "react";

import { CloseIcon } from "../../../lib/icons";

import { ModalProps } from "./types";

import * as S from "./style";

export const Modal = forwardRef<HTMLDivElement, PropsWithChildren<ModalProps>>(
  ({ isVisible, handleClose, title, children }, ref) => {
    const wrapperRef = useRef<HTMLDivElement>(null);

    // useOutsideAlerter(wrapperRef, handleClose);

    return (
      <S.Modal visible={isVisible} ref={ref}>
        <S.Wrapper ref={wrapperRef}>
          <S.Header>
            <S.Title>{title}</S.Title>
            <S.CloseButton type="button" onClick={handleClose}>
              <CloseIcon />
            </S.CloseButton>
          </S.Header>
          <S.Content>{children}</S.Content>
        </S.Wrapper>
      </S.Modal>
    );
  },
);
