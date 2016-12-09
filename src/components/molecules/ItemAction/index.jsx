import React from 'react'

import { Button } from '../../atoms/'
import './item-action.css'

const ItemAction = () => (
  <div className="item-action">
    <Button>
      <i className="fa fa-comment" /> Buy
    </Button>
  </div>
)

export default ItemAction
