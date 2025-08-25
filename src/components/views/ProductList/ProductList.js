import React from 'react';
// import PropTypes from 'prop-types';
import styles from './ProductList.module.scss';
import Banner from '../../features/Banner/Banner';

const ProductList = () => {
  //ProductList component implementation
  return (
    <Banner mode='ProductList'>
      <div className={styles.root}>
        <p>This is ProductList page.</p>
      </div>
    </Banner>
  );
};

// ProductList.propTypes = {};

export default ProductList;
