import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { Routes } from "./pages/routes";
import { GlobalStore } from "./store";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <GlobalStore>
        <App>
          <Routes />
        </App>
      </GlobalStore>
    </Router>
  </React.StrictMode>,
  document.getElementById("root"),
);
