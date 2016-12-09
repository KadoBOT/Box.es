import React from 'react'
import { shallow, render, mount } from 'enzyme';

import ItemMiniatures from './index'
import templateState from '../../../helpers/templateState'

it('should render the ItemMiniatures', () => {
    const wrapper = shallow(
        <ItemMiniatures item={templateState.item} selectedPicture={jest.fn()} />
    );
    expect(wrapper).toMatchSnapshot();
});
