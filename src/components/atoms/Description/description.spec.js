import React from 'react'
import renderer from 'react-test-renderer';
import Description from './index'

it('should render the Description', () => {
    const wrapper = renderer.create(
        <Description />
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
});

it('should render the Complete Description', () => {
    const wrapper = renderer.create(
        <Description complete/>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
});
