import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import AppStyled from './containers/AppStyled-Components';
import AppRadium from './containers/AppRadium';
import AppFunction from './containers/AppFunction';

import AppUsers from './users/AppUsers'

import AppLitery from './litery/AppLitery'

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.Fragment>
  	<AppLitery/>
    <AppUsers/>
    <App appTitle="Person Manager"/>
    
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
