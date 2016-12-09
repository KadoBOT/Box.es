import { combineReducers } from 'redux';

import item from './apiData'
import selectedPicture from './selectedPicture'

const rootReducer = combineReducers({
  item,
  selectedPicture,
})

export default rootReducer
