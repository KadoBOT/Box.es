import React, {PropTypes} from 'react'

import { isSelected } from '../../../helpers/_picture'
import './miniature.css'

const Miniature = ({onClick, photo, selectedPicture}) => {
  const selectPicture = () => onClick(photo.large)

  return(
    <button
      className={`miniature miniature--selected-${isSelected(photo.large, selectedPicture)}`}
      onClick={selectPicture}
      style={{background: `url(${photo.large})`}}
    />
  )
}

Miniature.propTypes = {
  onClick: PropTypes.func.isRequired,
  photo: PropTypes.object.isRequired,
  selectedPicture: PropTypes.string.isRequired,
}

export default Miniature
