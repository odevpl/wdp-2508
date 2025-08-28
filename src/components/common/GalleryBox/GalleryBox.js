import React, { useState } from 'react';
import Swipeable from '../../features/Swipeable/Swipeable';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import StarRating from '../../features/StarRating/StarRating';
import styles from './GalleryBox.module.scss';
import { getAll } from '../../../redux/marketingTagsRedux';
import { getByMarketingTag } from '../../../redux/productsRedux';
import { useSelector } from 'react-redux';
import Actions from '../Actions/Actions';

const GalleryBox = () => {
  const marketingTags = useSelector(getAll);
  const [activeTag, setActiveTag] = useState(marketingTags[0].id);
  const [isFading, setIsFading] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const products = useSelector(state => getByMarketingTag(state, activeTag));
  const [activeProductIndex, setActiveProductIndex] = useState(0);

  const itemsPerPage = 6;
  const totalSlides = Math.ceil(products.length / itemsPerPage);

  const handleTagChange = tagId => {
    setIsFading(true);
    setActiveTag(tagId);
    setActiveProductIndex(0);
    setCurrentSlide(0);
    setTimeout(() => {
      setIsFading(false);
    }, 400);
  };

  const handlePrev = () => {
    setCurrentSlide(prev => (prev - 1 >= 0 ? prev - 1 : prev));
  };

  const handleNext = () => {
    setCurrentSlide(prev => (prev + 1 < totalSlides ? prev + 1 : prev));
  };

  return (
    <div className={styles.gallery}>
      <div className={'no-gutters justify-content-between d-flex ' + styles.menu}>
        {marketingTags.map(tag => (
          <button
            key={tag.id}
            className={`flex-fill  ${styles.btnSales} ${
              tag.id === activeTag ? styles.active : ''
            }`}
            onClick={() => handleTagChange(tag.id)}
          >
            {tag.name}
          </button>
        ))}
      </div>
      <div className={'row no-gutters'}>
        <div className={`${styles.galleryItem} ${isFading ? styles.fading : ''}`}>
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`${styles.productWrapper} ${
                index === activeProductIndex ? styles.active : ''
              }`}
            >
              <img src={product.image} alt={product.name} />
              <div className={styles.product}>
                <div className={styles.productPrice}>
                  <p className={styles.currentPrice}>
                    ${product.promoPrice.toFixed(2)}
                  </p>
                  <p className={styles.oldPrice}>${product.price.toFixed(2)}</p>
                </div>
                <div className={styles.productInfo}>
                  <p className={styles.productName}>{product.name}</p>
                  <p className={styles.productRatings}>
                    <StarRating stars={product.stars} userStars={product.userStars} />
                  </p>
                </div>
              </div>
              <Actions id={product.id} isFavourite={product.isFavourite} />
            </div>
          ))}
        </div>
      </div>
      <Swipeable
        leftAction={handleNext}
        rightAction={handlePrev}
        className={styles.rightSection}
      >
        <div className={'no-gutters'}>
          <div
            className={`${styles.thumbnailCarousel} ${isFading ? styles.fading : ''}`}
          >
            <div className={styles.thumbnailContainer}>
              <div
                className={styles.thumbnailWrapper}
                style={{
                  transform: `translateX(-${currentSlide * 100}%)`,
                }}
              >
                {products.map((product, index) => (
                  <div
                    key={product.id}
                    className={`${styles.thumbnail} ${
                      index === activeProductIndex ? styles.active : ''
                    }`}
                    onClick={() => setActiveProductIndex(index)}
                  >
                    <img src={product.image} alt={product.name} />
                  </div>
                ))}
              </div>
            </div>
            <button
              className={styles.prev + ' ' + styles.controlCarousel}
              onClick={handlePrev}
              disabled={currentSlide === 0}
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>

            <button
              className={styles.next + ' ' + styles.controlCarousel}
              onClick={handleNext}
              disabled={currentSlide >= totalSlides - 1}
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
        </div>
      </Swipeable>
    </div>
  );
};

export default GalleryBox;
