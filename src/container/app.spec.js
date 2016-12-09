import React from 'react'
import { Provider, connect } from 'react-redux'
import { shallow, render, mount } from 'enzyme';

import { fakeStore } from '../helpers/_fakeStore'
import ConnectedApp, { App } from './App'


it('should render the Live MainPage', () => {
  process.env.REACT_APP_ENV === 'notTemplate'

  const store = fakeStore({});
  const wrapper = shallow(
    <Provider store={store}>
      <ConnectedApp />
    </Provider>
  );
  expect(wrapper).toMatchSnapshot();

  process.env.REACT_APP_ENV === 'template'
});

it('should render the Template MainPage', () => {
  const store = fakeStore({});
  const wrapper = shallow(
    <Provider store={store}>
      <ConnectedApp />
    </Provider>
  );
  expect(wrapper).toMatchSnapshot();
});
