import React from 'react'
import { Provider, connect } from 'react-redux'
import { shallow, render, mount } from 'enzyme';

import { fakeStore } from '../helpers/_fakeStore'
import ConnectedApp, { ItemSlider } from './'

it('should render the Connected MainPage', () => {
    const store = fakeStore({});
    const wrapper = shallow(
      <Provider store={store}>
        <ConnectedApp />
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
});
