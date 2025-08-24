import React, { useState } from 'react';
import styles from './ShopPage.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Button from '../../common/Button/Button';
// import ProductBox from '../../common/ProductBox/ProductBox';
import PropTypes from 'prop-types';

const ShopPage = ({ categories }) => {
  const [counter] = useState([]);
  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={styles.panelBar}>
          <div className={`row no-gutters align-items-end ${styles.panelBarMenu}`}>
            <div className={styles.heading}>
              <h3>New furniture</h3>
            </div>
            <div className={`col ${styles.menu}`}>
              <ul>
                {categories.map(item => (
                  <li key={item.id}>
                    <a onClick={() => this.handleCategoryChange(item.id)}>
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className='row'>
          {/* {categoryProducts.slice(activePage * 8, (activePage + 1) * 8).map(item => (
            <div key={item.id} className={colSize}>
              <ProductBox {...item} handleCompare={() => this.handleCompare(item)} />
            </div>
          ))} */}
        </div>
      </div>
      {counter.length > 0 && (
        <div className={styles.compareContainer}>
          <ul>
            {counter.map(product => {
              return (
                <li key={product.id}>
                  <img src={product.image} alt={product.name} />
                  <Button
                    className={styles.removeBtn}
                    variant='outline'
                    onClick={() => {
                      this.setState({
                        counter: counter.filter(el => el.id !== product.id),
                      });
                    }}
                  >
                    <FontAwesomeIcon icon={faTimes} />
                  </Button>
                </li>
              );
            })}
            <Button className={styles.compareBtn} variant='small'>
              Compare
            </Button>
          </ul>
        </div>
      )}
    </div>
  );
};

ShopPage.propTypes = {
  children: PropTypes.node,
  categories: PropTypes.arrayOf(PropTypes.string),
};
export default ShopPage;
