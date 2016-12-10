import React from 'react'
import renderer from 'react-test-renderer';

import PriceLabel from './index'
import templateState from '../../../helpers/_templateState'

it('should render the PriceLabel', () => {
    const wrapper = renderer.create(
      <PriceLabel price={templateState.item.price} />
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
});
