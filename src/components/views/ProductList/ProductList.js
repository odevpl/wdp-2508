import React from 'react';
// import PropTypes from 'prop-types';
import styles from './ProductList.module.scss';
import Banner from '../../features/Banner/Banner';

const ProductList = () => {
  //ProductList component implementation
  return (
    <div className={styles.root}>
      <Banner />;
    </div>
  );
};

// ProductList.propTypes = {};

export default ProductList;
