import React, { useState } from 'react';
import styles from './ShopPage.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGripVertical, faList, faTimes } from '@fortawesome/free-solid-svg-icons';
import Button from '../../common/Button/Button';
import ProductBox from '../../common/ProductBox/ProductBox';
import PropTypes from 'prop-types';
import Brands from '../../features/Brands/Brands';

const ShopPage = ({ products, viewport }) => {
  const [activePage] = useState(0);
  const [activeCategory] = useState('bed');
  const [counter, setCounter] = useState([]);
  const [viewMode, setViewMode] = useState('grid');

  const handleCompare = product => {
    const exists = counter.find(el => el.id === product.id);
    if (exists) {
      setCounter(counter.filter(el => el.id !== product.id));
    } else {
      if (counter.length >= 4) {
        alert('Możesz dodać maksymalnie 4 produkty do porównania');
      } else {
        setCounter([...counter, product]);
      }
    }
  };

  const categoryProducts = products.filter(item => item.category === activeCategory);

  let colSize = 'col-12';
  if (viewport.mode === 'desktop') colSize = 'col-3';
  else if (viewport.mode === 'tablet') colSize = 'col-4';
  else if (viewport.mode === 'mobile') colSize = 'col-sm-6 col-12';

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={styles.panelBar}>
          <div className={`row no-gutters align-items-end ${styles.panelBarMenu}`}>
            <div className={styles.heading}>
              <h3>Furniture</h3>
            </div>
            <div className={`col ${styles.menu}`}></div>
            <div className={styles.menuIcon}>
              <FontAwesomeIcon
                icon={faGripVertical}
                className={viewMode === 'grid' ? styles.isActive : ''}
                onClick={() => setViewMode('grid')}
              />
              <FontAwesomeIcon
                icon={faList}
                className={viewMode === 'list' ? styles.isActive : ''}
                onClick={() => setViewMode('list')}
              />
            </div>
          </div>
        </div>

        <div className={viewMode === 'grid' ? 'row' : 'column'}>
          {categoryProducts.slice(activePage * 12, (activePage + 1) * 12).map(item => (
            <div key={item.id} className={viewMode === 'grid' ? colSize : 'col'}>
              <ProductBox
                {...item}
                viewMode={viewMode}
                handleCompare={() => handleCompare(item)}
              />
            </div>
          ))}
        </div>
      </div>
      {counter.length > 0 && (
        <div className={styles.compareContainer}>
          <ul>
            {counter.map(product => (
              <li key={product.id}>
                <img src={product.image} alt={product.name} />
                <Button
                  className={styles.removeBtn}
                  variant='outline'
                  onClick={() => setCounter(counter.filter(el => el.id !== product.id))}
                >
                  <FontAwesomeIcon icon={faTimes} />
                </Button>
              </li>
            ))}
            <Button className={styles.compareBtn} variant='small'>
              Compare
            </Button>
          </ul>
        </div>
      )}
      <Brands />
    </div>
  );
};

ShopPage.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      category: PropTypes.string,
      price: PropTypes.number,
      stars: PropTypes.number,
      promo: PropTypes.string,
      newFurniture: PropTypes.bool,
    })
  ),
  viewport: PropTypes.shape({
    width: PropTypes.number,
    mode: PropTypes.string,
  }),
};
export default ShopPage;
