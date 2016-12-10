import React from 'react'
import { shallow, render, mount } from 'enzyme';

import MainPage from './index'
import templateState from '../../../helpers/_templateState'

it('should render the MainPage', () => {
    const wrapper = shallow(
        <MainPage item={templateState.item} />
    );
    expect(wrapper).toMatchSnapshot();
});
