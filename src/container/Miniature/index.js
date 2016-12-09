import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Miniature from '../../components/atoms/Miniature'
import { selectPicture } from '../../actions/';

const mapActionsToProps = dispatch => bindActionCreators({
  onClick: selectPicture,
}, dispatch);

export default connect('', mapActionsToProps)(Miniature);
