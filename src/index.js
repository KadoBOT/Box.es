import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import templateState from './helpers/_templateState' //initial state
import App from './container/App';
import configureStore from './store';
import './base.css'


const initialState = process.env.REACT_APP_ENV === 'template' ? templateState : { } //if template, loads an initial state to the store
const store = configureStore(initialState)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
