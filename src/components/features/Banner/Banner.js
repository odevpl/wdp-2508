import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Banner.module.scss';
import { useLocation } from 'react-router';

const Banner = () => {
  const location = useLocation();

  const getLink = () => {
    if (location.pathname === '/shop')
      return (
        <div className={styles.navigation}>
          <Link to='/'>Home</Link>
          <span> &gt; </span>
          <Link to='/shop' className={styles.active}>
            Furniture
          </Link>
        </div>
      );
    else {
      const link = location.pathname.split('/shop/')[1];
      const linkCap = link.charAt(0).toUpperCase() + link.slice(1);
      return (
        <div className={styles.navigation}>
          <Link to='/'>Home</Link>
          <span> &gt; </span>
          <Link to='/shop'>Furniture</Link>
          <span> &gt; </span>
          <Link to={location.pathname} className={styles.active}>
            {linkCap}
          </Link>
        </div>
      );
    }
  };

  return (
    <div className={`container ${styles.dimension}`}>
      <div className={styles.advert}>
        <div className={styles.advertTitle}>
          <span className={styles.light}>BEDROOM</span>
          <span className={styles.bold}>FURNITURE</span>
        </div>
        <div className={styles.advertSubtitle}>
          ALWAYS <span className={styles.highlight}>25%</span> OFF OR MORE
        </div>
      </div>
      {getLink()}
    </div>
  );
};

export default Banner;
