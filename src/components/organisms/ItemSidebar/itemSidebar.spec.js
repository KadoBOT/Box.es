import React from 'react'
import { shallow, render, mount } from 'enzyme';

import ItemSidebar from './index'
import templateState from '../../../helpers/templateState'

it('should render the ItemSidebar', () => {
    const wrapper = shallow(
        <ItemSidebar />
    );
    expect(wrapper).toMatchSnapshot();
});
