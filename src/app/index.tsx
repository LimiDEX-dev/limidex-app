/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from "react";
import { ethers } from "ethers";

import { Header } from "../components/template/Header";
import { Notification } from "../components/atoms/Notification";
import { useNotifications } from "../store";

import { setupGlobalStyles } from "../styles";

import * as S from "./style";

import "../styles/index.scss";
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
