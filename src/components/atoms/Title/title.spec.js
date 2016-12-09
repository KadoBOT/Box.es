import React from 'react'
import renderer from 'react-test-renderer';
import Title from './index'

it('should render the Title', () => {
    const wrapper = renderer.create(
      <Title />
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
});

it('should render the Subheader Title', () => {
    const wrapper = renderer.create(
      <Title subheader />
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
});
