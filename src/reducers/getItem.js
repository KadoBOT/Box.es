import R from 'ramda'

import { createReducer } from '../helpers/_createReducer'
import {READ_MORE, REQUEST_ITEM, RECEIVE_ITEM } from '../constants'

const item = createReducer({
  isFetching: true,
  completeInfo: false
}, {
  [REQUEST_ITEM]: (state, action) => R.assoc('isFetching', true, state), //changes isFetching to true...
  [RECEIVE_ITEM]: (state, action) => R.assoc('isFetching', false, action.item), //...until data is received
  [READ_MORE]: (state, action) => R.assoc('completeInfo', !state.completeInfo, state)
})

export default item
