import React from 'react';
//import PropTypes from 'prop-types';
import GalleryBox from '../../common/GalleryBox/GalleryBox';
import Button from '../../common/Button/Button';
import styles from './FurnitureGallery.module.scss';
const FurnitureGallery = () => {
  const spotlightProduct = {
    price: '250.00',
    name: 'Bedroom Bed',
    image: '/images/products/chair_aenean_ru_bristique_1.jpg',
  };

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <div className={styles.titleBar}>
              <div className={' row no-gutters ' + styles.bar}>
                <div className={styles.heading}>
                  <h3>Furniture gallery</h3>
                </div>
              </div>
            </div>
            <GalleryBox />
          </div>
          <div className={'col'}>
            <div className={styles.spotlight}>
              <img src={spotlightProduct.image} alt={spotlightProduct.name} />
              <div className={styles.productInfo}>
                <p>
                  from <span>${spotlightProduct.price}</span>
                </p>
                <h3>{spotlightProduct.name}</h3>
                <Button variant='spotlight'>Shop now</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FurnitureGallery;
