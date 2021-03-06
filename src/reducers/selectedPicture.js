import { createReducer } from '../helpers/_createReducer'
import { SELECT_PICTURE } from '../constants'

const selectPicture = createReducer('' , {
  [SELECT_PICTURE]: (state, action) => action.selectedPicture
})

export default selectPicture
