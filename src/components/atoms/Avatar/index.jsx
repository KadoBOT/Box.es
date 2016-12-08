import React, {PropTypes} from 'react'

import './avatar.css'

const Avatar = ({img}) => <div className="avatar" style={{background: `url(${img})`}} />

// Avatar.propTypes = {
//   props: PropTypes.type
// }

export default Avatar
