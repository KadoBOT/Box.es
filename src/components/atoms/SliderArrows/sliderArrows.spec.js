import React from 'react'
import { shallow, render, mount } from 'enzyme';

import templateState from '../../../helpers/_templateState'
import SliderArrows from './index'

it('should render the shallow', () => {
    const wrapper = shallow(
      <SliderArrows
        item={templateState.item}
        selectPicture={jest.fn()}
        selectedPicture={templateState.selectedPicture}
      />
    );
    expect(wrapper).toMatchSnapshot();
});
