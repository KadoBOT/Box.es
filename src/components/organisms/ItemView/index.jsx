import React from 'react'

import ItemSlider from '../../../container/ItemSlider/'
import ItemMiniatures from '../../../container/ItemMiniatures/'
import './item-view.css'

const ItemView = () => (
  <div className="item-view">
    <ItemSlider />
    <ItemMiniatures />
  </div>
)

export default ItemView
