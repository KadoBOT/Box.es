import React, {PropTypes} from 'react'

import { Miniature } from '../../atoms/'
import './item-miniatures.css'

const ItemMiniatures = (props) => {
  return(
    <div className="item-miniatures">
      <Miniature />
      <Miniature />
      <Miniature />
      <Miniature />
      <Miniature />
    </div>
  )
}

// ItemMiniatures.propTypes = {
//   props: PropTypes.type
// }

export default ItemMiniatures
