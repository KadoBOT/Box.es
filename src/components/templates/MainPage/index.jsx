import React from 'react'

import { ItemView, ItemSidebar } from '../../organisms/'
import { SliderArrows } from '../../atoms/'
import './main-page.css'

const MainPage = (props) => (
  <div className="main-page">
    <div className="main-page__template">THIS IS A TEMPLATE</div>
    <div className="main-page__content">
      <SliderArrows {...props} />
      <ItemView />
      <ItemSidebar />
    </div>
  </div>
)

export default MainPage
