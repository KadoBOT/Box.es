import React, {PropTypes} from 'react'

import { Avatar, Description } from '../../atoms/'
import './item-comments.css'

const Comments = ({item}) => {
  return(
    <div className="item-comments">
      <p className="item-comments__load-more">load more comments</p>
      {item.recent_comments.map(c => (
        <div
          className="item-comments__comment"
          key={c.id}
        >
          <Avatar img={c.user.avatar.small_url} />
          <div className="item-comments__comment__text">
            <Description>
              <span className="item-comments__comment__text__author">{c.user.nickname}</span> {c.comment}
            </Description>
          </div>
        </div>
      ))}
    </div>
  )
}

Comments.propTypes = {
  item: PropTypes.object.isRequired
}

export default Comments
