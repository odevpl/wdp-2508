import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import styles from './ProductPage.module.scss';
import Button from '../../common/Button/Button';

import { useParams } from 'react-router';

import { useSelector } from 'react-redux';

import { getProductById } from '../../../redux/productsRedux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
  faExpandArrowsAlt,
  faShoppingBasket,
  faHeart,
  faExchangeAlt,
  faEnvelope,
  faPlus,
  faMinus,
  faStar,
} from '@fortawesome/free-solid-svg-icons';

import { faStar as faStarOutline } from '@fortawesome/free-regular-svg-icons';
import {
  faFacebookF,
  faTwitter,
  faGooglePlusG,
  faLinkedinIn,
  faPinterestP,
} from '@fortawesome/free-brands-svg-icons';

const ProductPage = () => {
  const { productId } = useParams();
  const product = useSelector(state => getProductById(state, productId));

  // Placeholder starts generator for render only
  function generateStars(stars) {
    let starsArray = [];

    for (let i = 0; i < stars; i++) {
      starsArray.push(<FontAwesomeIcon key={i} icon={faStar}></FontAwesomeIcon>);
    }
    if (starsArray.length < 5) {
      for (let i = stars; i < 5; i++) {
        starsArray.push(
          <FontAwesomeIcon key={i} icon={faStarOutline}></FontAwesomeIcon>
        );
      }
    }
    return starsArray;
  }
  // Placeholder ends

  return (
    <div className={styles.root}>
      <div className={styles.bannerColor}></div>
      <div className='container'>
        <div className={styles.banner}>
          <h2 className={styles.bTitle}>{product.productCategory}</h2>
          <p className={styles.bPath}>
            <a href='/'>{'Home'}</a>
            {<span> {'>'} </span>}
            <a href={'/' + product.productCategory}>{product.productCategory}</a>
            {<span> {'>'} </span>}
            <a href={'/' + product.category} className={styles.active}>
              {product.category}
            </a>
          </p>
        </div>
        <div className={styles.productWrapper + ' ' + styles.section}>
          <div className={styles.product + ' row'}>
            <div className='col-6'>
              <div className={styles.productGallery}>
                <div className={styles.mainImg}>
                  {<img src={product.image} alt={product.name} />}
                  <div className={styles.resizeBtn}>
                    <Button variant='outline'>
                      <FontAwesomeIcon icon={faExpandArrowsAlt}></FontAwesomeIcon>
                    </Button>
                  </div>
                </div>
                <div className={styles.thumbnailsWrapper}>
                  <div className={styles.thumbnails}>
                    <div className={styles.thumbnail + ' ' + styles.active}>
                      {<img src={product.image} alt={product.name} />}
                    </div>
                    <div className={styles.thumbnail}>
                      {<img src={product.image} alt={product.name} />}
                    </div>
                    <div className={styles.thumbnail}>
                      {<img src={product.image} alt={product.name} />}
                    </div>
                    <div className={styles.thumbnail}>
                      {<img src={product.image} alt={product.name} />}
                    </div>
                    <div className={styles.thumbnail}>
                      {<img src={product.image} alt={product.name} />}
                    </div>
                    <div className={styles.thumbnail}>
                      {<img src={product.image} alt={product.name} />}
                    </div>

                    <div className={styles.controlBtn + ' ' + styles.left}>
                      <Button variant='outline'>
                        <FontAwesomeIcon icon={faChevronLeft}>Left</FontAwesomeIcon>
                      </Button>
                    </div>
                    <div className={styles.controlBtn + ' ' + styles.right}>
                      <Button variant='outline'>
                        <FontAwesomeIcon icon={faChevronRight}>Right</FontAwesomeIcon>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-6'>
              <div className={styles.productInfo}>
                <div className={styles.productPageBtns}>
                  <Button variant='outline'>
                    <FontAwesomeIcon icon={faChevronLeft}>Left</FontAwesomeIcon>
                  </Button>
                  <Button variant='outline'>
                    <FontAwesomeIcon icon={faChevronRight}>Right</FontAwesomeIcon>
                  </Button>
                </div>

                <div className={styles.group + ' ' + styles.productTitle}>
                  <h3>{product.name}</h3>
                  <p>
                    <span className={styles.starts}>
                      {generateStars(product.stars)}
                    </span>
                    <span className={styles.reviews}>
                      {'(' + '0' + ' reviews' + ')'}
                    </span>
                    <span className={styles.addReview}>
                      <a href='#'>Add Your review</a>
                    </span>
                  </p>
                </div>

                <div className={styles.group + ' ' + styles.productPrice}>
                  <p>
                    <span className={styles.oldPrice}>${product.price}</span>
                    <span className={styles.newPrice}>${product.promoPrice}</span>
                  </p>
                </div>

                <div className={styles.group + ' ' + styles.productShopBtns}>
                  <div className={styles.actionBtns}>
                    <Button variant='addToCart'>
                      <FontAwesomeIcon icon={faShoppingBasket}>
                        Add to Cart
                      </FontAwesomeIcon>{' '}
                      Add to Cart
                    </Button>
                    <Button variant='outline'>
                      <FontAwesomeIcon icon={faHeart}>Add to Favorite</FontAwesomeIcon>
                    </Button>
                    <Button variant='outline'>
                      <FontAwesomeIcon icon={faExchangeAlt}>Compare</FontAwesomeIcon>
                    </Button>
                    <Button variant='outline'>
                      <FontAwesomeIcon icon={faEnvelope}>Share</FontAwesomeIcon>
                    </Button>
                  </div>

                  <form action='' className={styles.quantityBtns}>
                    <label htmlFor='quantity' className={styles.option}>
                      Quantity:{' '}
                    </label>
                    <input
                      type='number'
                      id='quantity'
                      name='quantity'
                      defaultValue={1}
                    />
                    <Button variant='outline'>
                      <FontAwesomeIcon icon={faMinus}>Remove One</FontAwesomeIcon>
                    </Button>
                    <Button variant='outline'>
                      <FontAwesomeIcon icon={faPlus}>Add One</FontAwesomeIcon>
                    </Button>
                  </form>
                </div>

                <div className={styles.group + ' ' + styles.quickOverview}>
                  <h4>Quick Overview</h4>
                  <p>{product.overview.quick}</p>
                </div>

                <div className={styles.group + ' ' + styles.productDetails}>
                  <p>
                    <span className={styles.option}>Availability:</span>
                    {product.availability}
                  </p>
                  <p>
                    <span className={styles.option}>Category:</span>
                    {product.category}
                  </p>
                </div>

                <ul className={styles.group + ' ' + styles.socials}>
                  <li>
                    <a href='#' className={styles.btnSocial + ' ' + styles.facebook}>
                      <span>
                        <FontAwesomeIcon icon={faFacebookF}>Facebook</FontAwesomeIcon>
                      </span>{' '}
                      Share
                    </a>
                  </li>
                  <li>
                    <a href='#' className={styles.btnSocial + ' ' + styles.google}>
                      <span>
                        <FontAwesomeIcon icon={faGooglePlusG}>
                          GooglePlus
                        </FontAwesomeIcon>
                      </span>{' '}
                      Google+
                    </a>
                  </li>
                  <li>
                    <a href='#' className={styles.btnSocial + ' ' + styles.twitter}>
                      <span>
                        <FontAwesomeIcon icon={faTwitter}>Twitter</FontAwesomeIcon>
                      </span>{' '}
                      Tweet
                    </a>
                  </li>
                  <li>
                    <a href='#' className={styles.btnSocial + ' ' + styles.pinterest}>
                      <span>
                        <FontAwesomeIcon icon={faPinterestP}>Pinterest</FontAwesomeIcon>
                      </span>{' '}
                      Pinterest
                    </a>
                  </li>
                  <li>
                    <a href='#' className={styles.btnSocial + ' ' + styles.linkedin}>
                      <span>
                        <FontAwesomeIcon icon={faLinkedinIn}>LinkedIn</FontAwesomeIcon>
                      </span>{' '}
                      LinkedIn
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ProductPage.propTypes = {};

export default ProductPage;
