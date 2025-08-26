import { connect } from 'react-redux';
import ShopPage from './ShopPage';
import { getAll } from '../../../redux/productsRedux';
import { getNew } from '../../../redux/productsRedux';
import { getViewport } from '../../../redux/viewportRedux';

const mapStateToProps = state => ({
  categories: getAll(state),
  products: getNew(state),
  viewport: getViewport(state),
});

export default connect(mapStateToProps)(ShopPage);
