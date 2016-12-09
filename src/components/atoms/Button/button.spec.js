import React from 'react'
import renderer from 'react-test-renderer';
import Button from './index'

it('should render the Button', () => {
    const wrapper = renderer.create(
        <Button />
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
});

it('should render the Follow Button', () => {
    const wrapper = renderer.create(
        <Button follow/>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
});
