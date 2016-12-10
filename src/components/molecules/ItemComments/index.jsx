import React, {PropTypes} from 'react'

import { Avatar, Description } from '../../atoms/'
import './item-comments.css'

const Comments = ({comments}) => (
  <div className="item-comments">
    <p className="item-comments__load-more">load more comments</p>
    {comments[0] === 'isFetching' && <div>Loading Comments...</div>}
    {comments[0] !== 'isFetching' && comments.map(c => (
      <div
        className="item-comments__comment"
        key={c.id}
      >
        <a href={c.user.share_url}>
          <Avatar img={c.user.avatar.small_url} />
        </a>
        <div className="item-comments__comment__text">
          <Description comment>
            <a href={c.user.share_url}>
              <span className="item-comments__comment__text__author">{c.user.nickname}</span>
            </a>
            {' '}
            <span title={c.comment}>{c.comment}</span>
          </Description>
        </div>
      </div>
    ))}
  </div>
)

Comments.propTypes = {
  comments: PropTypes.array.isRequired
}

export default Comments
