import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './PromotionSection.module.scss';
import Button from '../../common/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faExchangeAlt,
  faShoppingBasket,
  faEye,
  faArrowRight,
  faArrowLeft,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar, faHeart } from '@fortawesome/free-regular-svg-icons';
import Swipeable from '../Swipeable/Swipeable';

let timePromotion = [
  { number: 25, title: 'DAYS' },
  { number: 10, title: 'HRS' },
  { number: 45, title: 'MMS' },
  { number: 30, title: 'SECS' },
];
export default function PromotionSection({ id }) {
  const products = useSelector(state => state.products);
  const firestIndex = products.findIndex(el => el.id === id);

  const [leftIndex, setLeftIndex] = useState(firestIndex !== -1 ? firestIndex : 0);
  const [rightIndex, setRightIndex] = useState(firestIndex !== -1 ? firestIndex : 0);

  const pause = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (Date.now() > pause.current) {
        setLeftIndex(el => (el + 1) % products.length);
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [products.length]);

  function handleClickProducts(product) {
    setLeftIndex(product);
    pause.current = Date.now() + 10000;
  }

  function handleRight(e) {
    if (e) e.preventDefault();
    setRightIndex(el => (el + 1) % products.length);
  }

  function handleLeft(e) {
    if (e) e.preventDefault();
    setRightIndex(el => (el - 1 + products.length) % products.length);
  }

  const leftPromotion = products[leftIndex];
  const rightPromotion = products[rightIndex];

  if (!leftPromotion || !rightPromotion) return <p>Promocja nie znaleziona</p>;

  return (
    <div
      className={styles.root}
      style={{ '--ProductBox-bg-image': `url(${leftPromotion.image})` }}
    >
      <div className={`container ${styles.container}`}>
        <div className={styles.leftSection}>
          <div className={styles.photo}>
            <div className={styles.sale}>
              <div className={styles.titleSale}>HOT DEALS</div>
              <div className={styles.dots}>
                <ul>
                  {[0, 1, 2].map(el => {
                    const dotIndex =
                      (leftIndex + el - 1 + products.length) % products.length;
                    return (
                      <li key={el.id}>
                        <a
                          onClick={() => handleClickProducts(dotIndex)}
                          className={dotIndex === leftIndex ? styles.isActive : ''}
                        >
                          +
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className={styles.timer}>
              <ul>
                {timePromotion.map(el => {
                  return (
                    <li key={el.title}>
                      <p>{el.number}</p>
                      <p>{el.title}</p>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className={styles.buttons}>
              <Button variant='small'>
                <FontAwesomeIcon icon={faShoppingBasket} />
                ADD TO CART
              </Button>
            </div>
          </div>
          <div className={styles.content}>
            <h5>{leftPromotion.name}</h5>
            <div className={styles.stars}>
              {[1, 2, 3, 4, 5].map(i => (
                <a key={i} href='#'>
                  {i <= leftPromotion.stars ? (
                    <FontAwesomeIcon icon={faStar}>{i} stars</FontAwesomeIcon>
                  ) : (
                    <FontAwesomeIcon icon={farStar}>{i} stars</FontAwesomeIcon>
                  )}
                </a>
              ))}
            </div>
          </div>
          <div className={styles.line}></div>
          <div className={styles.actions}>
            <div className={styles.outlines}>
              <Button variant='outline'>
                <FontAwesomeIcon icon={faEye} />
              </Button>
              <Button variant='outline'>
                <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
              </Button>
              <Button variant='outline'>
                <FontAwesomeIcon icon={faExchangeAlt}>Add to compare</FontAwesomeIcon>
              </Button>
            </div>
            <div className={styles.price}>
              <div className={styles.oldPrice}>$ {leftPromotion.price}</div>
              <Button noHover variant='small'>
                $ {leftPromotion.price}
              </Button>
            </div>
          </div>
        </div>
        <Swipeable
          leftAction={handleLeft}
          rightAction={handleRight}
          className={styles.rightSection}
        >
          <div
            className={styles.rightSectionPhoto}
            style={{ '--ProductBox-bg-image': `url(${rightPromotion.image})` }}
          >
            <div className={styles.rightSectionDescription}>
              <h2>
                INDOOR <span>FURNITURE</span>
              </h2>
              <p>SAVE UP 50% OF ALL FURNITURE</p>
            </div>
            <Button className={styles.rightSectionButton}>SHOP NOW</Button>
          </div>
          <div className={styles.rightSectionButtons}>
            <Button onClick={handleLeft} className={styles.buttonLeft}>
              <FontAwesomeIcon icon={faArrowLeft} />
            </Button>
            <Button onClick={handleRight} className={styles.buttonRight}>
              <FontAwesomeIcon icon={faArrowRight} />
            </Button>
          </div>
        </Swipeable>
      </div>
    </div>
  );
}

PromotionSection.propTypes = {
  id: PropTypes.string.isRequired,
};
