import React, {PropTypes} from 'react'

import { changePic } from '../../../helpers/_picture'
import './slider-arrows.css'

const SliderArrows = ({item, selectPicture, selectedPicture}) => {
  const nextPic = val => selectPicture(changePic(selectedPicture, item, val))

  return(
    <div className="slider-arrows">
      <i
        className="fa fa-chevron-circle-left"
        onClick={() => nextPic(-1)}
      />
      <span />
      <i
        className="fa fa-chevron-circle-right"
        onClick={() => nextPic(1)}
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
