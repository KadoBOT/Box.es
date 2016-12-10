import R from 'ramda'

const isTrue = R.and
const isEqual = R.equals
const isLess = R.lt
const isGreater = R.gt
const findIndex = R.findIndex
const checkSelected = R.propEq('large')
const largePic = R.prop('large')
const isMain = R.propEq('is_main', true)
const findMain = R.find(isMain)

export const isMainPicture = R.compose(largePic, findMain) //find the is_main picture and retrieves the larger one
export const isSelected = R.equals //compare two keys

//handle how the arrow click should behave
export const changePic = (selectedPicture, item, val) => {
  const getSelectedLarge = checkSelected(selectedPicture)
  const idx = findIndex(getSelectedLarge, item.item_photos) // gets the index of the current selectedPicture

  const isIncreasing = isGreater(val, 0)
  const isDecreasing = isLess(val, 0)
  const isFirst = isEqual(idx, 0)
  const isLast = isEqual(idx, item.item_photos.length - 1)

  const goToLast = isTrue(isFirst, isDecreasing) // returns true if back arrow is clicked and selected picture is the first
  const goToFirst = isTrue(isLast, isIncreasing) // returns true if next arrow is clicked and selected picture is the last

  const result = () => (
    goToLast ? // go to the last picture if true
      largePic(item.item_photos[item.item_photos.length - 1]) :
      goToFirst ? // go to the first picture if true
      largePic(  item.item_photos[0]) :
        largePic(item.item_photos[idx + val]) //go to the previous/next picture if none of the conditions aboc succeds
  )

  return result()
}
