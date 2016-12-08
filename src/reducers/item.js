import R from 'ramda'

import templateState from '../helpers/templateState'
import { createReducer } from '../helpers/createReducer'
import { REQUEST_ITEM, RECEIVE_ITEM } from '../constants'

const initialState = process.env.REACT_APP_ENV === 'template' ? templateState : { isFetching: false }

const item = createReducer(initialState, {
  [REQUEST_ITEM]: (state, action) => R.assoc('isFetching', true, state),
  [RECEIVE_ITEM]: (state, action) => R.assoc('isFetching', false, action.item)
})

export default item
