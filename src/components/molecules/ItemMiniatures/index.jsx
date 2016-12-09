import React, {PropTypes} from 'react'

import Miniature from '../../../container/Miniature/'
import './item-miniatures.css'

const ItemMiniatures = ({item, selectedPicture}) => {
  return(
    <div className="item-miniatures">
      {item.item_photos.map(p =>
        <Miniature
          key={p.id}
          photo={p}
          selectedPicture={selectedPicture}
        />
      )}
    </div>
  )
}

ItemMiniatures.propTypes = {
  item: PropTypes.object.isRequired,
  selectedPicture: PropTypes.string.isRequired,
}

export default ItemMiniatures
