import React from 'react';
import styles from './PriceFilter.module.scss';

const PriceFilter = () => {
  return (
    <div className={styles.filterPrice}>
      <h3>FILTER BY PRICE</h3>
      <div className={styles.slider}>
        <input type='range' min='0' max='1000' value='135' disabled />
        <input type='range' min='0' max='1000' value='500' disabled />
      </div>
      <div className={styles.actions}>
        <button className={styles.btn}>FILTER</button>
        <span className={styles.label}>$135 – $500</span>
      </div>
    </div>
  );
};

export default PriceFilter;
