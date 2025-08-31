import { connect } from 'react-redux';

import NewFurniture from './NewFurniture';

import { getAll } from '../../../redux/categoriesRedux.js';
import { getNew } from '../../../redux/productsRedux.js';
import { getViewport } from '../../../redux/viewportRedux.js';

const mapStateToProps = state => ({
  categories: getAll(state),
  products: getNew(state),
  viewport: getViewport(state),
});

export default connect(mapStateToProps)(NewFurniture);
