import React from 'react';
import PropTypes from 'prop-types';
import styles from './Actions.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import {
  faHeart,
  faExchangeAlt,
  faShoppingBasket,
  faEye,
} from '@fortawesome/free-solid-svg-icons';
import Button from '../../common/Button/Button';
import { useDispatch } from 'react-redux';
import { toggleFavouriteThunk } from '../../../redux/productsRedux';

const Actions = ({ id, isFavourite }) => {
  const dispatch = useDispatch();
  const handleToggleFavourite = e => {
    e.preventDefault();
    dispatch(toggleFavouriteThunk(id));
  };

  return (
    <div className={styles.actions}>
      <div className={styles.outlines}>
        <div className={styles.btnWrapper}>
          <Button
            variant='outline'
            onClick={handleToggleFavourite}
            className={isFavourite ? styles.active : ''}
          >
            <FontAwesomeIcon icon={isFavourite ? faHeart : farHeart}>
              Favorite
            </FontAwesomeIcon>
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
          <Button variant='outline'>
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
  isFavourite: PropTypes.bool,
};

export default Actions;
