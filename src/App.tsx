import React, { useEffect, useState } from 'react';
import './App.scss';
import './styles/index.scss';
import { ethers } from 'ethers';
import { Header } from './components/Header';

function App({ children }) {
  const [provider, setProvider] = useState(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [signer, setSigner] = useState(null);

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
    <div className="App">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet" />

      <Header />

      {children}
    </div>
  );
}

export default App;
