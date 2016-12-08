import React, {PropTypes} from 'react'

import './miniature.css'

const Miniature = ({photo}) => {
  return(
    <a href="#">
      <div className="miniature" style={{background: `url(${photo.large})`}} />
    </a>
  )
}

// Miniature.propTypes = {
//   props: PropTypes.type
// }

export default Miniature
