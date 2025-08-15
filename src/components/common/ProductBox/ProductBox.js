// src/components/common/ProductBox/ProductBox.js
import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProductBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faExchangeAlt,
  faShoppingBasket,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar, faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button/Button';

const ProductBox = ({ name, price, promo, stars, image }) => {
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price);

  return (
    <div className={styles.root}>
      <div
        className={styles.photo}
        style={image ? { backgroundImage: `url(${image})` } : undefined}
      >
        {promo && <div className={styles.sale}>{promo}</div>}
        <div className={styles.buttons}>
          <Button variant='small'>Quick View</Button>
          <Button variant='small'>
            <FontAwesomeIcon icon={faShoppingBasket} /> ADD TO CART
          </Button>
        </div>
      </div>

      <div className={styles.content}>
        <h5>{name}</h5>
        <div className={styles.stars}>
          {[1, 2, 3, 4, 5].map(i => (
            <span key={i} aria-label={`${i} star${i > 1 ? 's' : ''}`}>
              <FontAwesomeIcon icon={i <= stars ? faStar : farStar} />
            </span>
          ))}
        </div>
      </div>

      <div className={styles.line}></div>

      <div className={styles.actions}>
        <div className={styles.outlines}>
          <Button variant='outline'>
            <FontAwesomeIcon icon={faHeart} />
          </Button>
          <Button variant='outline'>
            <FontAwesomeIcon icon={faExchangeAlt} />
          </Button>
        </div>
        <div className={styles.price}>
          <Button noHover variant='small'>
            {formattedPrice}
          </Button>
        </div>
      </div>
    </div>
  );
};

ProductBox.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  promo: PropTypes.string,
  stars: PropTypes.number,
  image: PropTypes.string,
};

ProductBox.defaultProps = {
  stars: 0,
};

export default ProductBox;
