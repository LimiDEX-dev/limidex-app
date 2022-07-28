import React, { FC, useState } from "react";

import { PopupProps } from "./types";

import * as S from "./style";

export const Popup: FC<PopupProps> = ({ content, children, width }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  return (
    <S.Popup>
      <S.Trigger
        type="button"
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      >
        {children}
      </S.Trigger>
      {isVisible && (
        <S.Content
          onMouseEnter={() => setIsVisible(true)}
          onMouseLeave={() => setIsVisible(false)}
          style={{ left: width ? `calc(50% - ${width / 2}px)` : undefined }}
        >
          <S.Wrapper style={{ width }}>{content}</S.Wrapper>
        </S.Content>
      )}
    </S.Popup>
  );
};
