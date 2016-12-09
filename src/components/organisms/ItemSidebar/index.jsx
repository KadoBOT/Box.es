import React from 'react'

import ItemInfo from '../../../container/ItemInfo/'
import ItemComments from '../../../container/ItemComments/'
import { ItemAction } from '../../molecules/'
import './item-sidebar.css'

const ItemSidebar = () => (
  <div className="item-sidebar">
    <ItemInfo />
    <ItemComments />
    <ItemAction />
  </div>
)

export default ItemSidebar
