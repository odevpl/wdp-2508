// src/components/features/Brands/Brands.js
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Swipeable from '../Swipeable/Swipeable';
import styles from './Brands.module.scss';

const Brands = () => {
  const brands = useSelector(state => state.brands);
  const [visibleCount, setVisibleCount] = useState(6);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Responsywna liczba widocznych brandów
  const updateVisibleCount = () => {
    const width = window.innerWidth;
    if (width < 480) setVisibleCount(1);
    else if (width < 768) setVisibleCount(2);
    else if (width < 1024) setVisibleCount(4);
    else setVisibleCount(6);

    setCurrentIndex(0); // reset przy zmianie liczby widocznych
  };

  useEffect(() => {
    updateVisibleCount();
    window.addEventListener('resize', updateVisibleCount);
    return () => window.removeEventListener('resize', updateVisibleCount);
  }, []);

  const maxIndex = Math.max(brands.length - visibleCount, 0);

  const swipeLeft = () => {
    setCurrentIndex(prev => Math.min(prev + visibleCount, maxIndex));
  };

  const swipeRight = () => {
    setCurrentIndex(prev => Math.max(prev - visibleCount, 0));
  };

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
