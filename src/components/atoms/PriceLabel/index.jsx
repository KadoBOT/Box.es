import React, {PropTypes} from 'react'

import './price-label.css'

const PriceLabel = ({price}) => {
  return(
    <div className="price-label">
      <p className="price-label__price">
        <span className="price-label__price__coin">$</span> {price}
      </p>
    </div>
  )
}

PriceLabel.propTypes = {
  price: PropTypes.number.isRequired
}

export default PriceLabel
