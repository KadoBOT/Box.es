import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import R from 'ramda'

import * as actions from '../actions'
import MainPage from './pages/MainPage/'
import TemplatePage from './templates/MainPage/'
import './base.css'

const mapStateToProps = R.pick(['item'])

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch)

const App = connect(mapStateToProps, mapDispatchToProps)(process.env.REACT_APP_ENV === 'template' ? TemplatePage : MainPage)

export default App
