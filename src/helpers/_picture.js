import R from 'ramda'

const largePic = R.prop('large')
const isMain = R.propEq('is_main', true)
const findLarge = R.propEq('large')
const findMain = R.find(isMain)

export const isMainPicture = R.compose(largePic, findMain) //find the is_main picture and retrieves the larger one
export const isSelected = R.equals //compare two keys
