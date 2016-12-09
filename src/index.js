import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import templateState from './helpers/templateState'
import App from './container/App';
import configureStore from './store';
import './base.css'

const initialState = process.env.REACT_APP_ENV === 'template' ? templateState : {  isFetching: false }
const store = configureStore(initialState)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
