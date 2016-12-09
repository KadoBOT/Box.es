import React from 'react'
import renderer from 'react-test-renderer';
import ItemAction from './index'

it('should render the ItemAction', () => {
    const wrapper = renderer.create(
        <ItemAction />
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
});
