/* eslint-disable react/no-array-index-key */
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { Header } from "../components/template";
import { Notification } from "../components/atoms";
import { useChains, useNotifications, useTokens } from "../store";
import { getTokensByChainId } from "../api/1inch/tokens";

import { setupGlobalStyles } from "../styles";

import * as S from "./style";

import "swiper/css";
import "swiper/css/pagination";

function App({ children }) {
  setupGlobalStyles();

  const { pathname } = useLocation();

  const {
    data: notifications,
    actions: { deleteNotification },
  } = useNotifications();
  const {
    actions: { setTokens },
  } = useTokens();
  const {
    data: { selectedChain },
  } = useChains();

  useEffect(() => {
    (async function () {
      const { data } = await getTokensByChainId(selectedChain.value);

      const tokensArr = Object.values(data.tokens);
      setTokens(tokensArr);
    })();
  }, [selectedChain]);

  return (
    <S.App>
      <S.Wrapper isMain={pathname === "/"}>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300;400;500;600;700&family=Roboto:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
        <Header />

        {notifications.map((item, index) => (
          <Notification
            key={`${item.title}-${index}`}
            title={item.title}
            handleClose={() => deleteNotification(index)}
            timeout={item.timeout}
            status={item.status}
          >
            {item.content}
          </Notification>
        ))}

        {children}
      </S.Wrapper>
    </S.App>
  );
}

export default App;
