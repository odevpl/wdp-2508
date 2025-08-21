import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

import ProductSearch from '../../features/ProductSearch/ProductSearch';
import { getAll } from '../../../redux/categoriesRedux';

import styles from './MenuBar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Button from '../../common/Button/Button';

const MenuBar = ({ children }) => {
  const [shown, setShown] = useState(false);
  const categories = useSelector(getAll);
  const path = useLocation().pathname;

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
                <Link to='/' className={path === '/' ? styles.active : ''}>
                  Home
                </Link>
              </li>
              {categories.map(category => (
                <li key={category.id}>
                  <Link
                    to={`/shop/${category.id}`}
                    className={path === `/shop/${category.id}` ? styles.active : ''}
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link to='/blog' className={path === '/blog' ? styles.active : ''}>
                  Blog
                </Link>
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
