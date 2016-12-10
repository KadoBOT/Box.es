import React from 'react'
import { shallow, render, mount } from 'enzyme';
import Miniature from './index'

it('should render the shallow', () => {
    const wrapper = shallow(
        <Miniature
          onClick={jest.fn()}
          photo='Events'
        />
    );
    expect(wrapper).toMatchSnapshot();
});

it('should be clickable', () => {
    const wrapper = shallow(
      <Miniature
        photo='Events'
        onClick={jest.fn()}
      />
    );

    expect(wrapper).toMatchSnapshot();

    wrapper.find('.miniature').simulate('click');

    expect(wrapper).toMatchSnapshot();
});
