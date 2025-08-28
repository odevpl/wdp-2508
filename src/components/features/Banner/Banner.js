import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Banner.module.scss';
import { useLocation } from 'react-router';

const Banner = () => {
  const path = useLocation().pathname;
  const [linkCap, setLinkCap] = useState('');
  const [classActive, setClassActive] = useState(true);

  useEffect(() => {
    if (path !== '/shop') {
      const currentLink = path.split('/shop/')[1];
      setLinkCap(currentLink.charAt(0).toUpperCase() + currentLink.slice(1));
      setClassActive(false);
    } else if (path === '/shop') {
      setClassActive(true);
    }
  }, [path]);

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
      <div className={styles.navigation}>
        <Link to='/'>Home</Link>
        <span> &gt; </span>
        <Link to='/shop' className={classActive ? styles.active : ''}>
          Furniture
        </Link>
        {path.split('/shop/')[1] && <span> &gt; </span>}
        {path.split('/shop/')[1] && (
          <Link to={path} className={styles.category}>
            {linkCap}
          </Link>
        )}
      </div>
    </div>
  );
};

export default Banner;
