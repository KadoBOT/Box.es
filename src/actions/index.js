import * as api from '../helpers/api'
import R from 'ramda'

export const requestItem = () => ({ type: 'REQUEST_ITEM' })

export const receivedItem = item => ({
  type: 'RECEIVE_ITEM',
  item
})

export const fetchItem = () => dispatch => {
  dispatch(requestItem())

  return api.getItem()
  .then(R.compose(dispatch, receivedItem))
}

export const readMore = () => ({ type: 'READ_MORE' })

export const selectPicture = selectedPicture => ({
  type: 'SELECT_PICTURE',
  selectedPicture
})
