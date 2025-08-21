import React, { useState } from 'react';
import PropTypes from 'prop-types';

import ProductSearch from '../../features/ProductSearch/ProductSearch';

import styles from './MenuBar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Button from '../../common/Button/Button';

const MenuBar = ({ children }) => {
  const [shown, setShown] = useState(false);

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={styles.menuBar}>
          <div className={styles.searchMenu}>
            <ProductSearch />
          </div>
          <div className={styles.menu}>
            <ul>
              <li>
                <a href='#' className={styles.active}>
                  Home
                </a>
              </li>
              <li>
                <a href='#'>Furniture</a>
              </li>
              <li>
                <a href='#'>Chair</a>
              </li>
              <li>
                <a href='#'>Table</a>
              </li>
              <li>
                <a href='#'>Sofa</a>
              </li>
              <li>
                <a href='#'>Bedroom</a>
              </li>
              <li>
                <a href='#'>Blog</a>
              </li>
            </ul>
          </div>
          <div className={`dropdown ${styles.dropDown}`} tabIndex={0}>
            <Button
              className={`btn ${styles.btnDropDown}`}
              type='button'
              variant='small'
              onClick={() => setShown(!shown)}
            >
              <FontAwesomeIcon icon={faBars} />
            </Button>
            {shown && (
              <ul className='dropdown-menu show'>
                <li>
                  <a className='dropdown-item' href='#'>
                    Home
                  </a>
                </li>
                <li>
                  <a className='dropdown-item' href='#'>
                    Furniture
                  </a>
                </li>
                <li>
                  <a className='dropdown-item' href='#'>
                    Chair
                  </a>
                </li>
                <li>
                  <a className='dropdown-item' href='#'>
                    Table
                  </a>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

MenuBar.propTypes = {
  children: PropTypes.node,
};

export default MenuBar;
