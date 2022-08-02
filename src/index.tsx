import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { DAppProvider } from "@usedapp/core";

import App from "./app";
import { Routes } from "./pages/routes";
import { GlobalStore } from "./store";

ReactDOM.render(
  <React.StrictMode>
    <DAppProvider config={{}}>
      <Router>
        <GlobalStore>
          <App>
            <Routes />
          </App>
        </GlobalStore>
      </Router>
    </DAppProvider>
  </React.StrictMode>,
  document.getElementById("root"),
);
