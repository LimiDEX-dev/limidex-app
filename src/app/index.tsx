/* eslint-disable react/no-array-index-key */
import React from "react";
import { useLocation } from "react-router-dom";

import { Header } from "../components/template";
import { Notification } from "../components/atoms";
import { useNotifications } from "../store";

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
