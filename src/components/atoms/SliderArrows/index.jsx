import React, {PropTypes} from 'react'
import R from 'ramda'

import './slider-arrows.css'

const SliderArrows = ({item, selectPicture, selectedPicture}) => {
  const changePic = val => {
      const idx = R.findIndex(R.propEq('large', selectedPicture))(item.item_photos)
      const select = index => selectPicture((item.item_photos[index].large))

      const isIncreasing = R.gt(val, 0)
      const isDecreasing = R.lt(val, 0)
      const isFirst = R.equals(idx, 0)
      const isLast = R.equals(idx, item.item_photos.length - 1)
      const goToLast = R.and(isFirst, isDecreasing)
      const goToFirst = R.and(isLast, isIncreasing)

      const result = () => (
        goToLast ?
          select(item.item_photos.length - 1) :
          goToFirst ?
            select(0) :
            select(idx + val)
      )

      result()
  }

  return(
    <div className="slider-arrows">
      <i
        className="fa fa-chevron-circle-left"
        onClick={() => changePic(-1)}
      />
      <span />
      <i
        className="fa fa-chevron-circle-right"
        onClick={() => changePic(1)}
      />
    </div>
  )
}

SliderArrows.propTypes = {
  item: PropTypes.object.isRequired,
  selectPicture: PropTypes.func,
  selectedPicture: PropTypes.string,
}

export default SliderArrows
