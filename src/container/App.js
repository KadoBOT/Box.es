import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import R from 'ramda'

import * as actions from '../actions'
import MainPage from '../components/pages/MainPage/'
import TemplatePage from '../components/templates/MainPage/'

const mapStateToProps = R.pickAll(['selectedPicture', 'item'])

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch)

export const App = process.env.REACT_APP_ENV === 'template' ? TemplatePage : MainPage
export default connect(mapStateToProps, mapDispatchToProps)(process.env.REACT_APP_ENV === 'template' ? TemplatePage : MainPage)
