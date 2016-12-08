import React, {PropTypes} from 'react'

import { Miniature } from '../../atoms/'
import './item-miniatures.css'

const ItemMiniatures = ({item}) => {
  return(
    <div className="item-miniatures">
      {item.item_photos.map(p =>
        <Miniature photo={p} />
      )}
    </div>
  )
}

// ItemMiniatures.propTypes = {
//   props: PropTypes.type
// }

export default ItemMiniatures
