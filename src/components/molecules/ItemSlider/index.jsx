import React, {PropTypes} from 'react'

import { isMainPicture } from '../../../helpers/_picture'
import { PriceLabel } from '../../atoms/'
import './item-slider.css'

class ItemSlider extends React.Component {
  componentWillMount() {
    this.props.selectPicture(isMainPicture(this.props.item.item_photos))
  }

  render() {
    const {item, selectedPicture} = this.props
    return(
      <div className="item-slider" style={{background: `url(${selectedPicture})`}}>
        <PriceLabel price={item.price} />
      </div>
    )
  }
}

ItemSlider.propTypes = {
  item: PropTypes.object.isRequired,
  selectPicture: PropTypes.func.isRequired,
  selectedPicture: PropTypes.string.isRequired,
}

export default ItemSlider
