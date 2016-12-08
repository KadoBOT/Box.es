import React, {PropTypes} from 'react'

import { ItemSlider, ItemMiniatures } from '../../molecules/'
import './item-view.css'

const ItemView = (props) => {
  return(
    <div className="item-view">
      <ItemSlider {...props} />
      <ItemMiniatures {...props} />
    </div>
  )
}

// ItemView.propTypes = {
//   props: PropTypes.type
// }

export default ItemView
