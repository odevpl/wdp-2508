import React, { useRef, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Slider from 'react-slick';
import Swipeable from '../../features/Swipeable/Swipeable';
import styles from './Brands.module.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Brands = () => {
  const brands = useSelector(state => state.brands);
  const sliderRef = useRef(null);
  const [slidesToShow, setSlidesToShow] = useState(5);

  useEffect(() => {
    const updateSlides = () => {
      const width = window.innerWidth;
      if (width >= 1024) setSlidesToShow(6);
      else if (width >= 768) setSlidesToShow(3);
      else setSlidesToShow(2);
    };

    updateSlides();
    window.addEventListener('resize', updateSlides);
    return () => window.removeEventListener('resize', updateSlides);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const handleSwipeLeft = () => {
    if (sliderRef.current) sliderRef.current.slickNext();
  };

  const handleSwipeRight = () => {
    if (sliderRef.current) sliderRef.current.slickPrev();
  };

  return (
    <section className={styles.root}>
      <Swipeable leftAction={handleSwipeLeft} rightAction={handleSwipeRight}>
        <Slider ref={sliderRef} {...settings}>
          {brands.map(brand => (
            <div key={brand.id} className={styles.brand}>
              <img src={brand.logo} alt={brand.name} />
            </div>
          ))}
        </Slider>
        <button
          className={`${styles.arrow} ${styles.prev}`}
          onClick={handleSwipeRight}
          aria-label='Previous'
        >
          ‹
        </button>
        <button
          className={`${styles.arrow} ${styles.next}`}
          onClick={handleSwipeLeft}
          aria-label='Next'
        >
          ›
        </button>
      </Swipeable>
    </section>
  );
};

export default Brands;
