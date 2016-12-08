import React, {PropTypes} from 'react'

import './price-label.css'

const PriceLabel = (props) => {
  return(
    <div className="price-label">
      <p className="price-label__price">
        <span className="price-label__price__coin">$</span> 350
      </p>
    </div>
  )
}

PriceLabel.propTypes = {
  props: PropTypes.type
}

export default PriceLabel
