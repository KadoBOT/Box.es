import React from 'react'
import renderer from 'react-test-renderer';

import ItemComments from './index'
import templateState from '../../../helpers/templateState'

it('should render the ItemComments', () => {
  const wrapper = renderer.create(
      <ItemComments comments={templateState.comments} />
  );

  expect(wrapper.toJSON()).toMatchSnapshot();
  templateState.comments = ['isFetching']

});

it('should render the ItemComments', () => {
  const wrapper = renderer.create(
      <ItemComments comments={templateState.comments} />
  );

  expect(wrapper.toJSON()).toMatchSnapshot();
});
