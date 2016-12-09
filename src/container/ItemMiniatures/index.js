import { connect } from 'react-redux';
import R from 'ramda'

import ItemMiniatures from '../../components/molecules/ItemMiniatures'

const mapStateToProps = R.pick(['selectedPicture', 'item'])

export default connect(mapStateToProps)(ItemMiniatures);
