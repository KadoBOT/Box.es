import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import R from 'ramda'

import * as actions from '../actions'
import MainPage from '../components/pages/MainPage/'
import TemplatePage from '../components/templates/MainPage/'

const mapStateToProps = R.pickAll(['comments', 'selectedPicture', 'item'])

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch)

//Here is where the app decides to load the template or the main page
export const App = process.env.REACT_APP_ENV === 'template' ? TemplatePage : MainPage
export default connect(mapStateToProps, mapDispatchToProps)(process.env.REACT_APP_ENV === 'template' ? TemplatePage : MainPage)
