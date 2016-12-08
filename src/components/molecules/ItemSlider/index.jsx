import React, {PropTypes} from 'react'
import R from 'ramda'

import { PriceLabel, SliderArrows } from '../../atoms/'
import './item-slider.css'


//TODO: Remove logic from here. Add this to helper function
const isMain = x => x.is_main === true

const ItemSlider = (props) => {
  const {item} = props
  return(
    <div className="item-slider" style={{background: `url(${R.filter(isMain, item.item_photos)[0].large})`}}>
      <SliderArrows />
      <PriceLabel />
    </div>
  )
}

// ItemSlider.propTypes = {
//   props: PropTypes.type
// }

export default ItemSlider
