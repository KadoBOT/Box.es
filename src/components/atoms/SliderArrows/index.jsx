import React, {PropTypes} from 'react'
import R from 'ramda'

import './slider-arrows.css'

const SliderArrows = ({item, selectPicture, selectedPicture}) => {
  const changePic = val => {
      const idx = R.findIndex(R.propEq('large', selectedPicture))(item.item_photos)
      const select = index => selectPicture((item.item_photos[index].large))

      if(idx === 0 && val < 0){
        select(props.item.item_photos.length - 1)
      } else if(idx === item.item_photos.length - 1 && val > 0){
        select(0)
      } else {
        select(idx + val)
      }
  }

  return(
    <div className="slider-arrows">
      <i
        className="fa fa-arrow-circle-left"
        onClick={() => changePic(-1)}
      />
      <span />
      <i
        className="fa fa-arrow-circle-right"
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
