import React from 'react';
// import PropTypes from 'prop-types';
import styles from './ProductList.module.scss';
import Banner from '../../features/Banner/Banner';

const ProductList = () => {
  return (
    <div className='container'>
      <div className='row no-gutters'>
        <Banner />
      </div>
      <div className='row no-gutters'>
        <div className='col-9 p-2 text-center'>Product List</div>
        <div className='col-3 p-2'>
          <h5 className='p-2'>Filters</h5>
          <div className='p-2'>by categories</div>
          <div className='p-2'>by color</div>
          <div className='p-2'>by price</div>
          <div className='p-2'>by size</div>
        </div>
      </div>
      <div className='row no-gutters'>
        <div className='col-12 p-2 text-center'>Brands</div>
      </div>
    </div>
  );
};

// ProductList.propTypes = {};

export default ProductList;
