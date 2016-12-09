import React, {PropTypes} from 'react'

import { Avatar, Button, Description, Title } from '../../atoms/'
import './item-info.css'

const ItemInfo = ({item, onClick}) => (
    <div className="item-info">
      <Title>{item.name}</Title>
      <div className="item-info__subtitle">
        <Title subheader>
          <i className="fa fa-map-marker" />{item.location_details}
        </Title>
        <Title subheader>
          <i className="fa fa-heart" />{item.likes_count} Likes
        </Title>
      </div>
      <div className="item-info__author">
        <Avatar img={item.user.avatar.small_url}/>
        <div className="item-info__author__description">
          <div className="item-info__author__description__details">
            <Button follow>Follow</Button>
            <p className="item-info__author__description__details__name">{item.user.name}</p>
            <p className="item-info__author__description__details__nickname">{item.user.nickname}</p>
          </div>
          {!item.completeInfo && <Description>
            {item.description}
            <span className="item-info__author__description__details__read-more">...
              <a
                href="#"
                onClick={onClick}
              >
                read more
              </a>
            </span>
          </Description> }
          {item.completeInfo && <Description complete>
            {item.description}
          </Description>}
        </div>
      </div>
    </div>
)

ItemInfo.propTypes = {
  item: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired
}

export default ItemInfo
