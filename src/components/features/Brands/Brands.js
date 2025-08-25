import React from 'react';
import { useSelector } from 'react-redux';
import styles from './Brands.module.scss';

const Brands = () => {
  const brands = useSelector(state => state.brands);

  return (
    <section className={styles.root}>
      <div className={styles.container}>
        {brands.map(brand => (
          <div key={brand.id} className={styles.brand}>
            <img src={brand.logo} alt={brand.name} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Brands;
