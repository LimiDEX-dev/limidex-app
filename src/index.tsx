import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { Routes } from './pages/routes';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App>
        <Routes />
      </App>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
