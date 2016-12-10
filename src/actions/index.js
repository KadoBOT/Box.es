import * as api from '../helpers/_api'
import R from 'ramda'

//action to handle the request to the api of item and comment
export const requestItem = () => ({ type: 'REQUEST_ITEM' })
export const requestComment = () => ({ type: 'REQUEST_COMMENT' })

//action to handle the api response for the item
export const receivedItem = R.assoc('item', R.__, { type: 'RECEIVE_ITEM' })

//action to handle the api response for the comment
export const receivedComment = R.assoc('comments', R.__, { type: 'RECEIVE_COMMENT' })

//async action to dispatch item request and repsonse actions
export const fetchItem = () => dispatch => {
  dispatch(requestItem())

  return api.getItem()
  .then(R.compose(dispatch, receivedItem))
}

// async action to dispatch comment request and repsonse actions
export const fetchComments = () => dispatch => {
  dispatch(requestComment())

  return api.getComments()
  .then(R.compose(dispatch, receivedComment))
}

//action to handle the read more click
export const readMore = () => ({ type: 'READ_MORE' })

//action to handle the selected picture
export const selectPicture = R.assoc('selectedPicture', R.__, { type: 'SELECT_PICTURE' })
