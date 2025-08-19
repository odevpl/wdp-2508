import React from 'react';
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

let timePromotion = [
  { number: 25, title: 'DAYS' },
  { number: 10, title: 'HRS' },
  { number: 45, title: 'MMS' },
  { number: 30, title: 'SECS' },
];
export default function PromotionSection({ id }) {
  const promotion = useSelector(state => state.products.find(el => el.id === id));

  if (!promotion) return <p>Promocja nie znaleziona</p>;

  return (
    <div
      className={styles.root}
      style={{ '--ProductBox-bg-image': `url(${promotion.image})` }}
    >
      <div className={`container ${styles.container}`}>
        <div className={styles.leftSection}>
          <div className={styles.photo}>
            <div className={styles.sale}>
              <div className={styles.titleSale}>HOT DEALS</div>
              <div className={styles.dots}>
                <ul>
                  <li>
                    <a>p</a>
                  </li>
                  <li>
                    <a>p</a>
                  </li>
                  <li>
                    <a>p</a>
                  </li>
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
            <h5>{promotion.name}</h5>
            <div className={styles.stars}>
              {[1, 2, 3, 4, 5].map(i => (
                <a key={i} href='#'>
                  {i <= promotion.stars ? (
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
              <div className={styles.oldPrice}>$ {promotion.price}</div>
              <Button noHover variant='small'>
                $ {promotion.price}
              </Button>
            </div>
          </div>
        </div>
        <div className={styles.rightSection}>
          <div
            className={styles.rightSectionPhoto}
            style={{ '--ProductBox-bg-image': `url(${promotion.image})` }}
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
            <Button className={styles.buttonLeft}>
              <FontAwesomeIcon icon={faArrowLeft} />
            </Button>
            <Button className={styles.buttonRight}>
              <FontAwesomeIcon icon={faArrowRight} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

PromotionSection.propTypes = {
  id: PropTypes.string.isRequired,
};
