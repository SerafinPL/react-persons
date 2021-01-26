import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AppStyled from './AppStyled-Components';
import AppRadium from './AppRadium';
import AppFunction from './AppFunction';

import AppUsers from './AppUsers'

import AppLitery from './litery/AppLitery'

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.Fragment>
  	<AppLitery/>
    <AppUsers/>
    <App />
    
    <AppFunction />
    
    <AppStyled/>
    <AppRadium/>
  </React.Fragment>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
