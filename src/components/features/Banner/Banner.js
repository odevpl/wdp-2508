import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Banner.module.scss';
import { useLocation } from 'react-router';
import PropTypes from 'prop-types';
import { getProductById } from '../../../redux/productsRedux';
import { useSelector } from 'react-redux';

const Banner = ({ mode, children }) => {
  const location = useLocation();
  const path = location.pathname;
  let link = '';
  let linkCap = '';
  let classActive = false;

  const productId = location.pathname.includes('/product/')
    ? location.pathname.split('/product/')[1]
    : null;

  const product = useSelector(state =>
    productId ? getProductById(state, productId) : null
  );

  if (mode === 'ProductList' && path !== '/shop') {
    link = path.split('/shop/')[1];
    linkCap = link.charAt(0).toUpperCase() + link.slice(1);
    classActive = true;
  } else if (mode === 'ProductList' && path === '/shop') {
    classActive = false;
  } else if (mode === 'ProductPage') {
    linkCap = product.name;
  }

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
        <div className={styles.productBackground}>{children}</div>
      </div>
    ))
  );
};

Banner.propTypes = {
  mode: PropTypes.string,
  children: PropTypes.node,
};

export default Banner;
