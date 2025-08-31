import React from 'react';

import styles from './QuickView.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faTimes } from '@fortawesome/free-solid-svg-icons';

import StarRating from '../../features/StarRating/StarRating';
import Button from '../../common/Button/Button';

import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getQuickView, updateQuickView } from '../../../redux/quickViewRedux';
import { getProductById } from '../../../redux/productsRedux';

const QuickView = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    const unlisten = history.listen(() => {
      dispatch(updateQuickView({ open: false, productId: null }));
    });
    return unlisten;
  }, [dispatch, history]);

  const quickView = useSelector(getQuickView);
  const open = quickView.open;
  const product = useSelector(state => getProductById(state, quickView.productId));
  if (!open) {
    return null;
  } else
    return (
      <div className={`${styles.root} ${open ? styles.open : ''}`}>
        <div className={styles.wrapper}>
          <Button
            variant='outline'
            className={styles.btnClose}
            onClick={e => {
              e.preventDefault();
              dispatch(updateQuickView({ open: false, productId: null }));
            }}
          >
            <FontAwesomeIcon icon={faTimes}>Close</FontAwesomeIcon>
          </Button>
          <div className={`${styles.product} row d-flex align-items-center`}>
            <div className='col'>
              <div className={styles.imageWrapper}>
                {product && <img src={product.image} alt={product.name} />}
              </div>
            </div>
            <div className='col'>
              <div className={styles.productInfo}>
                <div className={styles.divider}>
                  <h3>
                    <a href={`/product/${product && product.id}`}>
                      {product && product.name}
                    </a>
                  </h3>
                  <p className={styles.review}>
                    <StarRating
                      stars={product && product.stars}
                      variant={'renderOnly'}
                    />{' '}
                    <span>{'(0 reviews)'}</span>{' '}
                  </p>
                </div>
                <div className={styles.divider}>
                  <p
                    className={`${styles.price} ${
                      product.promoPrice ? styles.promo : ''
                    }`}
                  >
                    ${product && product.price}
                  </p>
                  {product.promoPrice ? (
                    <p className={styles.promoPrice}>
                      ${product && product.promoPrice}
                    </p>
                  ) : (
                    ''
                  )}
                </div>
                <div className={styles.divider}>
                  <p>
                    <span>Availability:</span>
                    {product && product.availability}
                  </p>
                  <p>
                    <span>Category:</span>
                    {product && product.category}
                  </p>
                </div>
                <div className={styles.divider}>
                  <p className={styles.description}>
                    {product && product.overview.full}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default QuickView;
