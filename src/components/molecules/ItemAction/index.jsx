import React, {PropTypes} from 'react'

import { Button } from '../../atoms/'
import './item-action.css'

const ItemAction = (props) => {
  return(
    <div className="item-action">
      <Button>
        <i className="fa fa-comment" /> Buy
      </Button>
    </div>
  )
}

ItemAction.propTypes = {
  props: PropTypes.type
}

export default ItemAction
