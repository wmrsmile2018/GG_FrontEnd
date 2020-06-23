import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';

import store from './store';
import App from './App';
import { GlobalHistory } from './modules/history';

import './public/css/style.css';

ReactDOM.render(
  <BrowserRouter>
    <GlobalHistory/>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
