import R from 'ramda'

//function to make it easier to creat redux reducers
export const createReducer = (init, handlers) =>
  (state = init, action) =>
    R.propOr(R.identity, R.prop('type', action), handlers)(state, action)
