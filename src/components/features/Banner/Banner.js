import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Banner.module.scss';
import { useLocation } from 'react-router';
import PropTypes from 'prop-types';
import { getProductById } from '../../../redux/productsRedux';
import { useSelector } from 'react-redux';

const Banner = ({ mode, children }) => {
  const location = useLocation();
  const path = location.pathname;
  const [linkCap, setLinkCap] = useState('');
  const [classActive, setClassActive] = useState(false);

  const productId = location.pathname.includes('/product/')
    ? location.pathname.split('/product/')[1]
    : null;

  const product = useSelector(state =>
    productId ? getProductById(state, productId) : null
  );

  useEffect(() => {
    if (mode === 'ProductList' && path !== '/shop') {
      const currentLink = path.split('/shop/')[1];
      setLinkCap(currentLink.charAt(0).toUpperCase() + currentLink.slice(1));
      setClassActive(true);
    } else if (mode === 'ProductList' && path === '/shop') {
      setClassActive(false);
      setLinkCap('');
    } else if (mode === 'ProductPage' && product) {
      setLinkCap(product.name);
    }
  }, [mode, path, product]);

  return (
    (mode === 'ProductList' && (
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
          <Link to='/shop' className={!classActive ? styles.active : ''}>
            Furniture
          </Link>
          {path.split('/shop/')[1] && <span> &gt; </span>}
          {path.split('/shop/')[1] && (
            <Link to={location.pathname} className={classActive ? styles.active : ''}>
              {linkCap}
            </Link>
          )}
        </div>
        {children}
      </div>
    )) ||
    (mode === 'ProductPage' && (
      <div className={`container ${styles.dimension}`}>
        <div className={styles.navigation}>
          <Link to='/'>Home</Link>
          <span> &gt; </span>
          <Link to='/shop'>Furniture</Link>
          <span> &gt; </span>
          <Link to={location.pathname} className={styles.active}>
            {linkCap}
          </Link>
        </div>
        <div className={styles.productBackground}></div>
        {children}
      </div>
    ))
  );
};

Banner.propTypes = {
  mode: PropTypes.string,
  children: PropTypes.node,
};

export default Banner;
