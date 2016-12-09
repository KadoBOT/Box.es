import React from 'react'
import { shallow, render, mount } from 'enzyme';

import ItemView from './index'

it('should render the ItemView', () => {
    const wrapper = shallow(
        <ItemView />
    );
    expect(wrapper).toMatchSnapshot();
});
