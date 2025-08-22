import React, { useState } from 'react';
//import PropTypes from 'prop-types';
import Button from '../../common/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeart,
  faExchangeAlt,
  faShoppingBasket,
  faEye,
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import StarRating from '../../features/StarRating/StarRating';
import styles from './GalleryBox.module.scss';
const GalleryBox = () => {
  return (
    <div className={styles.gallery}>
      <div className={'no-gutters justify-content-between d-flex ' + styles.menu}>
        <button className={'flex-fill ' + styles.btnSales}>Featured</button>
        <button className={'flex-fill ' + styles.btnSales + ' ' + styles.active}>
          Top Seller
        </button>
        <button className={'flex-fill ' + styles.btnSales}>Sale off</button>
        <button className={'flex-fill ' + styles.btnSales}>Top Rated</button>
      </div>
      <div className={'row no-gutters'}>
        <div className={styles.galleryItem}>
          <img src='' alt='' />
          <div className={styles.productWrapper}>
            <div className={styles.product}>
              <div className={styles.productPrice}>
                <p className={styles.currentPrice}>$CurrentPrice</p>{' '}
                <p className={styles.oldPrice}>$OldPrice</p>
              </div>
              <div className={styles.productInfo}>
                <p className={styles.productName}>ProductName</p>
                <p className={styles.productRatings}>
                  <StarRating stars={0} userStars={0} />
                </p>
              </div>
            </div>
          </div>
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
                <Button variant='outline'>
                  <FontAwesomeIcon icon={faShoppingBasket}>Add to cart</FontAwesomeIcon>
                </Button>
                <div className={styles.tooltip}>Add to cart</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={'no-gutters'}>
        <div className={styles.thumbnailCarousel}>
          <div className={styles.thumbnailWrapper}>
            <div className={styles.thumbnail + ' ' + styles.active}>1</div>
            <div className={styles.thumbnail}>2</div>
            <div className={styles.thumbnail}>3</div>
            <div className={styles.thumbnail}>4</div>
            <div className={styles.thumbnail}>5</div>
            <div className={styles.thumbnail}>6</div>
            <div className={styles.thumbnail}>7</div>
            <div className={styles.thumbnail}>8</div>
            <div className={styles.thumbnail}>9</div>
            <div className={styles.thumbnail}>10</div>
            <div className={styles.thumbnail}>11</div>
            <div className={styles.thumbnail}>12</div>
            <div className={styles.thumbnail}>13</div>
          </div>

          <button className={styles.prev + ' ' + styles.controlCarousel}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>

          <button className={styles.next + ' ' + styles.controlCarousel}>
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default GalleryBox;
