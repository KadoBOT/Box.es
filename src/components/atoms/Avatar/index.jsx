import React, {PropTypes} from 'react'

import './avatar.css'

const Avatar = ({img}) => <div className="avatar" style={{background: `url(${img})`}} />

Avatar.propTypes = {
  img: PropTypes.string.isRequired
}

export default Avatar
