// src/components/features/Brands/Brands.js
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Swipeable from '../Swipeable/Swipeable';
import styles from './Brands.module.scss';

const Brands = () => {
  const brands = useSelector(state => state.brands);
  const [visibleCount, setVisibleCount] = useState(6);
  const [currentIndex, setCurrentIndex] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const swipeRight = () => {
    setCurrentIndex(prev => Math.max(prev - visibleCount, 0));
  };

  const swipeLeft = () => {
    // TODO
  };

  const maxIndex = 0; // TODO
  const isAtStart = currentIndex === 0;
  const isAtEnd = currentIndex === maxIndex;

  return (
    <section className={styles.brands}>
      <div className='container'>
        {brands && brands.length > 0 ? (
          <div className={styles.swipeableWrapper}>
            <button
              className={`${styles.prev} ${isAtStart ? styles.disabled : ''}`}
              onClick={swipeRight}
              disabled={isAtStart}
            >
              {'<'}
            </button>

            <Swipeable leftAction={swipeLeft} rightAction={swipeRight}>
              <div
                className={styles.track}
                style={{
                  transform: `translateX(-${(100 / brands.length) * currentIndex}%)`,
                  width: `${(brands.length * 100) / visibleCount}%`,
                }}
              >
                {brands.map(brand => (
                  <div
                    key={brand.id}
                    className={styles.brandItem}
                    style={{ width: `${100 / brands.length}%` }}
                  >
                    <img src={brand.image} alt={brand.name} />
                  </div>
                ))}
              </div>
            </Swipeable>

            <button
              className={`${styles.next} ${isAtEnd ? styles.disabled : ''}`}
              onClick={swipeLeft}
              disabled={isAtEnd}
            >
              {'>'}
            </button>
          </div>
        ) : (
          <p>No brands available.</p>
        )}
      </div>
    </section>
  );
};

export default Brands;
