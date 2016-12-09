import React from 'react'

import { ItemView, ItemSidebar } from '../../organisms/'
import './main-page.css'

const MainPage = (props) => (
  <div className="main-page">
    <div className="main-page__template">DEMO VERSION</div>
    <div className="main-page__content">
      <ItemView />
      <ItemSidebar />
    </div>
  </div>
)

export default MainPage
