import React from 'react'

import { SliderArrows } from '../../atoms/'
import { ItemView, ItemSidebar } from '../../organisms/'
import './main-page.css'

class MainPage extends React.Component {
  componentWillMount() {
    const { fetchComments, fetchItem } = this.props
    fetchItem()
    fetchComments()
  }

  render() {
    const {item} = this.props
    return (
      item.isFetching ?
        <div>Loading...</div> :
        <div className="main-page">
          <div className="main-page__content">
            <SliderArrows {...this.props} />
            <ItemView />
            <ItemSidebar />
          </div>
        </div>
    )
  }
}

export default MainPage
