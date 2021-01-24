import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AppFunction from './AppFunction';

import AppUsers from './AppUsers'

import AppLitery from './litery/AppLitery'

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
  	<AppLitery/>
    <AppUsers/>
    <App />
    <AppFunction />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
