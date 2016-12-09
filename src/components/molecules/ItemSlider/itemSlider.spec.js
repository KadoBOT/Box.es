import React from 'react'
import { shallow, render, mount } from 'enzyme';

import ItemSlider from './index'
import templateState from '../../../helpers/templateState'

it('should render the ItemSlider', () => {
    const wrapper = shallow(
        <ItemSlider
          item={templateState.item}
          selectPicture={jest.fn()}
          selectedPicture="colossus.jpg"
        />
    );
    expect(wrapper).toMatchSnapshot();
});
