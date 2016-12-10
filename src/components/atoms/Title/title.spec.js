import React from 'react'
import { shallow, render, mount } from 'enzyme';
import Title from './index'

it('should render the Title', () => {
    const wrapper = shallow(
      <Title />
    );
    expect(wrapper).toMatchSnapshot();
});

it('should render the Subheader Title', () => {
    const wrapper = shallow(
      <Title subheader />
    );
    expect(wrapper).toMatchSnapshot();
});
