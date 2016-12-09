import R from 'ramda'

import { createReducer } from '../helpers/createReducer'
import { READ_MORE, REQUEST_ITEM, RECEIVE_ITEM } from '../constants'

const item = createReducer({
  isFetching: true,
  completeInfo: false
}, {
  [REQUEST_ITEM]: (state, action) => R.assoc('isFetching', true, state),
  [RECEIVE_ITEM]: (state, action) => R.assoc('isFetching', false, action.item),
  [READ_MORE]: (state, action) => R.assoc('completeInfo', !state.completeInfo, state)
})

export default item
