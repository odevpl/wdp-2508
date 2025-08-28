import React from 'react';
import styles from './Actions.module.scss';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeart,
  faExchangeAlt,
  faShoppingBasket,
  faEye,
} from '@fortawesome/free-solid-svg-icons';
import Button from '../../common/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { getProductById } from '../../../redux/productsRedux';
import { addProduct } from '../../../redux/cartRedux';

const Actions = id => {
  const dispatch = useDispatch();
  const product = useSelector(state => getProductById(state, id));
  const handleAddToCart = e => {
    e.preventDefault();
    dispatch(addProduct(product));
  };

  return (
    <div className={styles.actions}>
      <div className={styles.outlines}>
        <div className={styles.btnWrapper}>
          <Button variant='outline'>
            <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
          </Button>
          <div className={styles.tooltip}>Add to favorite</div>
        </div>
        <div className={styles.btnWrapper}>
          <Button variant='outline'>
            <FontAwesomeIcon icon={faExchangeAlt}>Add to compare</FontAwesomeIcon>
          </Button>
          <div className={styles.tooltip}>Add to compare</div>
        </div>
        <div className={styles.btnWrapper}>
          <Button variant='outline'>
            <FontAwesomeIcon icon={faEye}>Quick view</FontAwesomeIcon>
          </Button>
          <div className={styles.tooltip}>Quick view</div>
        </div>
        <div className={styles.btnWrapper}>
          <Button variant='outline' onClick={handleAddToCart}>
            <FontAwesomeIcon icon={faShoppingBasket}>Add to cart</FontAwesomeIcon>
          </Button>
          <div className={styles.tooltip}>Add to cart</div>
        </div>
      </div>
    </div>
  );
};

Actions.propTypes = {
  id: PropTypes.string,
};

export default Actions;
