import React from 'react';
// import PropTypes from 'prop-types';

import styles from './CompanyClaim.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { getCount } from '../../../redux/cartRedux';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const CompanyClaim = () => {
  const count = useSelector(getCount);
  const showCount = count > 99999 ? '99999+' : count;

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={`row align-items-center ${styles.container}`}>
          <div className={`col text-left ${styles.phoneNumber}`}>
            <p>
              <FontAwesomeIcon className={styles.icon} icon={faMobileAlt} />
              <span className={styles.number}>2300 - 3560 - 222</span>
            </p>
          </div>
          <div className={`col text-center ${styles.image}`}>
            <a href='#'>
              <img src='/images/logo.png' alt='Bazar' />
            </a>
          </div>
          <div className={`col text-right ${styles.cart}`}>
            <Link to='/cart' className={styles.cartBox}>
              <div className={styles.cartIcon}>
                <FontAwesomeIcon className={styles.icon} icon={faShoppingBasket} />
              </div>
              <div className={styles.cartCounter}>{showCount}</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

// CompanyClaim.propTypes = {};

export default CompanyClaim;
