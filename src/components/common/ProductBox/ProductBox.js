import React from 'react';
import PropTypes from 'prop-types';

import styles from './ProductBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faHeart,
  faExchangeAlt,
  faShoppingBasket,
} from '@fortawesome/free-solid-svg-icons';
import {
  faStar as farStar,
  faHeart as farHeart,
} from '@fortawesome/free-regular-svg-icons';
import Button from '../Button/Button';

import { useDispatch } from 'react-redux';
import { toggleFavourite } from '../../../redux/productsRedux';

const ProductBox = ({
  id,
  name,
  price,
  promo,
  stars,
  image,
  isFavourite,
  isCompared,
  handleCompare,
}) => {
  const dispatch = useDispatch();

  const handleToggleFavourite = e => {
    e.preventDefault();
    dispatch(toggleFavourite(id));
  };

  return (
    <div className={styles.root} style={{ '--ProductBox-bg-image': `url(${image})` }}>
      <div className={styles.photo}>
        {promo && <div className={styles.sale}>{promo}</div>}
        <div className={styles.buttons}>
          <Button variant='small'>Quick View</Button>
          <Button variant='small'>
            <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO CART
          </Button>
        </div>
      </div>
      <div className={styles.content}>
        <h5>{name}</h5>
        <div className={styles.stars}>
          {[1, 2, 3, 4, 5].map(i => (
            <a key={i} href='#'>
              {i <= stars ? (
                <FontAwesomeIcon icon={faStar}>{i} stars</FontAwesomeIcon>
              ) : (
                <FontAwesomeIcon icon={farStar}>{i} stars</FontAwesomeIcon>
              )}
            </a>
          ))}
        </div>
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
        </div>
        <div className={styles.price}>
          <Button noHover variant='small'>
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
  promo: PropTypes.string,
  stars: PropTypes.number,
  handleCompare: PropTypes.func,
  image: PropTypes.string,
  isFavourite: PropTypes.bool,
  isCompared: PropTypes.bool,
};

export default ProductBox;
