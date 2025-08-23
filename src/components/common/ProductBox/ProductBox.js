import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './ProductBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeart,
  faExchangeAlt,
  faShoppingBasket,
} from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button/Button';
import StarRating from '../../features/StarRating/StarRating';

import { useDispatch } from 'react-redux';
import { toggleFavourite } from '../../../redux/productsRedux';

const ProductBox = ({
  id,
  name,
  price,
  promo,
  stars,
  userStars,
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
      <Link to={`/product/${id}`}>
        <div className={styles.photo}>
          {promo && <div className={styles.sale}>{promo}</div>}
          <div className={styles.buttons}>
            <Button variant='small' className={styles.button}>
              Quick View
            </Button>
            <Button variant='small'>
              <FontAwesomeIcon icon={faShoppingBasket} />
              <span className={styles.button}>ADD TO CART</span>
            </Button>
          </div>
        </div>
      </Link>
      <div className={styles.content}>
        <h5>
          <Link to={`/product/${id}`} className={styles.name}>
            {name}
          </Link>
        </h5>
        <StarRating id={id} stars={stars} userStars={userStars} />
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
  userStars: PropTypes.number,
  handleCompare: PropTypes.func,
  image: PropTypes.string,
  isFavourite: PropTypes.bool,
  isCompared: PropTypes.bool,
};

export default ProductBox;
