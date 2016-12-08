import React from 'react'

import { ItemView, ItemSidebar } from '../../organisms/'
import './main-page.css'

class MainPage extends React.Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    const { fetchItem } = this.props
    fetchItem()
  }

  render() {
    const {item} = this.props
    return (
      item.isFetching ?
        <div>Loading...</div> :
        <div className="main-page">
          <div className="main-page__template">DEMO VERSION</div>
          <div className="main-page__content">
            <ItemView {...this.props} />
            <ItemSidebar {...this.props} />
          </div>
        </div>
    )
  }
}

export default MainPage
