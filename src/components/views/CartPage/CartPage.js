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
import { useSelector } from 'react-redux';
import Button from '../../common/Button/Button';

export default function CartPage() {
  const products = useSelector(state => state.products);

  const firstThree = products.slice(0, 3);
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

          {firstThree.map(el => {
            return (
              <div key={el.id} className={styles.row}>
                <div>
                  <FontAwesomeIcon icon={faTimes} />
                </div>
                <div>
                  <img src={el.image} alt='imageThings' />
                </div>
                <div>{el.name}</div>
                <div>{el.price}</div>
                <div>
                  <button>
                    <FontAwesomeIcon icon={faMinus} />
                  </button>
                  <span>1</span>
                  <button>
                    <FontAwesomeIcon icon={faPlus} />
                  </button>
                </div>
                <div>$50</div>
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
        <div className={styles.cartSummary}>
          <div className={styles.empty}></div>
          <h3>Cart Totals</h3>
          <div className={styles.row}>
            <span>Subtotal</span>
            <span>$140</span>
          </div>
          <div className={styles.row}>
            <span>Total</span>
            <span>$140</span>
          </div>
          <div className={styles.row}>
            <span>Total</span>
            <span>$140</span>
          </div>
          <Button variant='outline' className={styles.checkoutBtn}>
            PROCEED TO CHECKOUT
          </Button>
        </div>
      </div>
    </div>
  );
}
