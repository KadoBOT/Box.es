import React, {PropTypes} from 'react'

import { ItemInfo, ItemComments, ItemAction } from '../../molecules/'
import './item-sidebar.css'

const ItemSidebar = (props) => {
  return(
    <div className="item-sidebar">
      <ItemInfo {...props} />
      <ItemComments {...props} />
      <ItemAction {...props} />
    </div>
  )
}

// ItemSidebar.propTypes = {
//   props: PropTypes.type
// }

export default ItemSidebar
