import React from 'react';
import { useSelector } from 'react-redux';
import Slider from 'react-slick'; // import karuzeli
import styles from './Brands.module.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Brands = () => {
  const brands = useSelector(state => state.brands);

  const settings = {
    dots: true, // kropki na dole
    infinite: true, // nieskończone przewijanie
    speed: 500,
    slidesToShow: 6, // ile obrazków widać naraz
    slidesToScroll: 6, // ile przesuwa się na raz
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

  return (
    <section className={styles.brands}>
      <div className='container'>
        {brands && brands.length > 0 ? (
          <Slider {...settings}>
            {brands.map(brand => (
              <div key={brand.id} className={styles.brandItem}>
                <img src={brand.image} alt={brand.name} />
              </div>
            ))}
          </Slider>
        ) : (
          <p>No brands available.</p>
        )}
      </div>
    </section>
  );
};

export default Brands;
