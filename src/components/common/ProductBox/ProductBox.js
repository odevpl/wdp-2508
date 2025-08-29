import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './ProductBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeart,
  faExchangeAlt,
  faShoppingBasket,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button/Button';
import StarRating from '../../features/StarRating/StarRating';

import { useDispatch } from 'react-redux';
import { updateQuickView } from '../../../redux/quickViewRedux';
import { toggleFavouriteThunk } from '../../../redux/productsRedux';

const ProductBox = ({
  id,
  name,
  price,
  oldPrice,
  promo,
  stars,
  userStars,
  image,
  isFavourite,
  isCompared,
  handleCompare,
  viewMode = 'grid',
}) => {
  const dispatch = useDispatch();

  const description = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pretium diam sit amet ex scelerisque, a aliquam ipsum blandit. Nulla.',
  ];
  const gridShow = viewMode === 'grid';
  const listShow = viewMode === 'list';

  const handleToggleFavourite = e => {
    e.preventDefault();
    dispatch(toggleFavouriteThunk(id));
  };

  const handleQuickView = e => {
    e.preventDefault();
    dispatch(updateQuickView({ open: true, productId: id }));
  };

  return (
    <div
      className={`${styles.root} ${listShow ? styles.list : styles.grid}`}
      style={{ '--ProductBox-bg-image': `url(${image})` }}
    >
      <Link to={`/product/${id}`}>
        <div className={styles.photo}>
          {promo && <div className={styles.sale}>{promo}</div>}
          <div className={styles.buttons}>
            <Button
              variant='small'
              className={`${styles.button} ${styles.quickViewBtn}`}
              onClick={e => {
                handleQuickView(e);
              }}
            >
              Quick View
            </Button>
            {gridShow && (
              <Button variant='small' className={styles.addToCartBtn}>
                <FontAwesomeIcon icon={faShoppingBasket} />
                <span className={styles.button}>ADD TO CART</span>
              </Button>
            )}
          </div>
        </div>
      </Link>
      <div className={styles.details}>
        <div className={styles.content}>
          <h5>
            <Link to={`/product/${id}`} className={styles.name}>
              {name}
            </Link>
          </h5>
          {listShow && (
            <div className={styles.price}>
              {typeof oldPrice === 'number' && oldPrice > price && (
                <span className={styles.oldPrice}>$ {oldPrice}</span>
              )}
              <Button noHover variant='small'>
                $ {price}
              </Button>
            </div>
          )}
          <StarRating id={id} stars={stars} userStars={userStars} />
          {listShow && <p>{description}</p>}
        </div>

        <div className={styles.line}></div>
        <div className={styles.actions}>
          <div className={styles.outlines}>
            <Button
              variant='outline'
              onClick={handleToggleFavourite}
              className={isFavourite ? styles.active : ''}
            >
              <FontAwesomeIcon icon={isFavourite ? faHeart : farHeart}>
                Favorite
              </FontAwesomeIcon>
            </Button>
            <Button
              variant='outline'
              onClick={handleCompare}
              className={isCompared ? styles.active : ''}
            >
              <FontAwesomeIcon icon={faExchangeAlt}>Add to compare</FontAwesomeIcon>
            </Button>
            {listShow && (
              <Button variant='outline'>
                <FontAwesomeIcon icon={faSearch} />
              </Button>
            )}
            {listShow && (
              <Button variant='small' className={styles.addToCartBtn}>
                <FontAwesomeIcon icon={faShoppingBasket} />
                <span className={styles.button}>ADD TO CART</span>
              </Button>
            )}
          </div>
          {gridShow && (
            <div className={styles.price}>
              {typeof oldPrice === 'number' && oldPrice > price && (
                <span className={styles.oldPrice}>$ {oldPrice}</span>
              )}
              <Button noHover variant='small'>
                $ {price}
              </Button>
            </div>
          )}
          <Button
            noHover
            variant='small'
            className={styles.priceButton} // <--- KLUCZOWE, żeby SCSS nadpisał tło
          >
            $ {price}
          </Button>
        </div>
      </div>
    </div>
  );
};

ProductBox.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  oldPrice: PropTypes.number,
  promo: PropTypes.string,
  stars: PropTypes.number,
  userStars: PropTypes.number,
  handleCompare: PropTypes.func,
  image: PropTypes.string,
  isFavourite: PropTypes.bool,
  isCompared: PropTypes.bool,
  viewMode: PropTypes.string,
};

export default ProductBox;
