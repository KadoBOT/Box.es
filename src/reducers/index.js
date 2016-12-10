import { combineReducers } from 'redux';

import item from './getItem'
import comments from './getComments'
import selectedPicture from './selectedPicture'

const rootReducer = combineReducers({
  selectedPicture,
  comments,
  item,
})

export default rootReducer
