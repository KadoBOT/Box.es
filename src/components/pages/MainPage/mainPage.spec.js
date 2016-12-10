import React from 'react'
import { shallow, render, mount } from 'enzyme';

import MainPage from './index'
import templateState from '../../../helpers/templateState'

it('should render the MainPage', () => {
    const wrapper = shallow(
        <MainPage
          item={templateState.item}
          fetchComments={jest.fn()}
          fetchItem={jest.fn()}
        />
    );
    expect(wrapper).toMatchSnapshot();
    templateState.item.isFetching = !templateState.item.isFetching
});

it('should render the MainPage after fetching', () => {
    const wrapper = shallow(
      <MainPage
        item={templateState.item}
        fetchComments={jest.fn()}
        fetchItem={jest.fn()}
      />
    );
    expect(wrapper).toMatchSnapshot();
});
