import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import R from 'ramda'

import * as actions from '../../actions'
import ItemSlider from '../../components/molecules/ItemSlider/'

const mapStateToProps = R.pick(['selectedPicture', 'item'])

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ItemSlider);
