/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from "react";
import { ethers } from "ethers";

import { Header } from "../components/template";
import { Notification } from "../components/atoms";
import { useNotifications } from "../store";

import { setupGlobalStyles } from "../styles";

import * as S from "./style";

import "swiper/css";
import "swiper/css/pagination";

function App({ children }) {
  setupGlobalStyles();

  const [provider, setProvider] = useState(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [signer, setSigner] = useState(null);
  const {
    data: notifications,
    actions: { deleteNotification },
  } = useNotifications();

  useEffect(() => {
    const newProvider = new ethers.providers.WebSocketProvider(
      process.env.REACT_APP_SOCKET_ENDPOINT,
    );
    setProvider(newProvider);
    // eslint-disable-next-line no-console
    console.log(newProvider);
  }, []);

  useEffect(() => {
    if (provider) {
      // eslint-disable-next-line no-console
      console.log(provider.getSigner());
    }
  }, [provider]);

  return (
    <S.App>
      <S.Wrapper>
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
