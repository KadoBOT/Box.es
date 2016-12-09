import React from 'react'
import renderer from 'react-test-renderer';
import Avatar from './index'

it('should render the Avatar', () => {
    const wrapper = renderer.create(
        <Avatar img="colossus.jpg" />
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
});
