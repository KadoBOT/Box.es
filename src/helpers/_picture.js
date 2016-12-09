import R from 'ramda'

const largePic = R.prop('large')
const isMain = R.propEq('is_main', true)
const findMain = R.find(isMain)

export const isMainPicture = R.compose(largePic, findMain)
export const isSelected = R.equals
