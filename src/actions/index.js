import * as api from '../helpers/api'
import R from 'ramda'

export const REQUEST_ITEM = 'REQUEST_ITEM'
export const RECEIVE_ITEM = 'RECEIVE_ITEM'

const requestItem = item => ({ type: REQUEST_ITEM })

const receivedItem = item => ({
  type: RECEIVE_ITEM,
  item
})

export const fetchItem = () => dispatch => {
  dispatch(requestItem())

  return api.getItem()
  .then(R.compose(dispatch, receivedItem))
}
