import React from 'react';
import styles from './CartPage.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTimes,
  faPlus,
  faMinus,
  faArrowRight,
  faHome,
} from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../common/Button/Button';
import { useHistory } from 'react-router-dom';
import { getAll, removeProduct, resetCart } from '../../../redux/cartRedux';

export default function CartPage() {
  const history = useHistory();
  const products = useSelector(getAll);
  const dispatch = useDispatch();

  const handleGoHome = () => {
    history.push('/');
    dispatch(resetCart());
  };

  const handleRemoveFromCart = (e, id) => {
    e.preventDefault();
    dispatch(removeProduct({ id }));
  };

  return (
    <div className={styles.root}>
      <div className='container'>
        <h2>The Template</h2>
        <div className={styles.breadcrumb}>
          <div>
            <h2>Cart</h2>
          </div>
          <div className={styles.rightSectionBreadCrumbs}>
            <FontAwesomeIcon icon={faHome} />
            <FontAwesomeIcon icon={faArrowRight} />
            <p>Cart</p>
          </div>
        </div>

        <div className={styles.cartTable}>
          <div className={styles.rowHeader}>
            <div></div>
            <div></div>
            <div>PRODUCT</div>
            <div>PRICE</div>
            <div>QUANTITY</div>
            <div>TOTAL</div>
          </div>

          {products.map(el => {
            return (
              <div key={el.id} className={styles.row}>
                <div onClick={e => handleRemoveFromCart(e, el.id)}>
                  <FontAwesomeIcon className={styles.xmarkIcon} icon={faTimes} />
                </div>
                <div>
                  <img src={el.image} alt='imageThings' />
                </div>
                <div>{el.name}</div>
                <div className={styles.colorPrice}>$ {el.price}</div>
                <div>
                  <button>
                    <FontAwesomeIcon icon={faMinus} />
                  </button>
                  <span>{el.quantity}</span>
                  <button>
                    <FontAwesomeIcon icon={faPlus} />
                  </button>
                </div>
                <div className={styles.colorPrice}>$50</div>
              </div>
            );
          })}
        </div>
        <div className={styles.cartActions}>
          <div>
            <input type='text' placeholder='Coupon code' />
            <Button variant='outline'>APPLY COUPON</Button>
          </div>
          <Button variant='outline'>UPDATE CART</Button>
        </div>
        <div className={styles.containerCartSummary}>
          <div className={styles.cartSummary}>
            <div className={styles.empty}></div>
            <h3>Cart Totals</h3>
            <div className={styles.row}>
              <span>Subtotal</span>
              <span className={styles.colorPrice}>$140</span>
            </div>
            <div className={styles.row}>
              <span>Total</span>
              <span className={styles.colorPrice}>$140</span>
            </div>
            <Button
              onClick={handleGoHome}
              variant='outline'
              className={styles.checkoutBtn}
            >
              PROCEED TO CHECKOUT
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
