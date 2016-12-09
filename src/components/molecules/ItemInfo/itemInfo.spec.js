import React from 'react'
import { shallow, render, mount } from 'enzyme';

import ItemInfo from './index'
import templateState from '../../../helpers/templateState'

it('should render the ItemInfo', () => {
    const wrapper = shallow(
      <ItemInfo
        item={templateState.item}
        onClick={jest.fn()}
      />
    );

    templateState.item.completeInfo = false
    expect(wrapper).toMatchSnapshot();

    wrapper.find('.item-info__author__description__details__read-more').simulate('click');
    templateState.item.completeInfo = true
});

it('should render the ItemInfo with full description', () => {
  const wrapper = shallow(
      <ItemInfo
        item={templateState.item}
        onClick={jest.fn()}
      />
  );

  expect(wrapper).toMatchSnapshot();
});
