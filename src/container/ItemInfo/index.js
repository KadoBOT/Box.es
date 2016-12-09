import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import R from 'ramda'

import ItemInfo from '../../components/molecules/ItemInfo'
import { readMore } from '../../actions/';

const mapStateToProps = R.pick(['item'])

const mapActionsToProps = dispatch => bindActionCreators({
  onClick: readMore,
}, dispatch);

export default connect(mapStateToProps, mapActionsToProps)(ItemInfo);
