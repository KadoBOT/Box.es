import { createReducer } from '../helpers/createReducer'
import { RECEIVE_COMMENT, REQUEST_COMMENT } from '../constants'

//return ['isFetching'] until data is received from the api
const comments = createReducer(['isFetching'], {
  [REQUEST_COMMENT]: (state, action) => state,
  [RECEIVE_COMMENT]: (state, action) => action.comments,
})

export default comments
