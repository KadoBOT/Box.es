import { connect } from 'react-redux';
import R from 'ramda'

import ItemComments from '../../components/molecules/ItemComments'

const mapStateToProps = R.pick(['item'])

export default connect(mapStateToProps)(ItemComments);
