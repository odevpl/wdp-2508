import styles from './PromotionLayout.module.scss';
import initialState from '../../../redux/initialState.js';
import React from 'react';

const PromotionLayout = () => {
  const boxes = initialState.promotion;

  return (
    <div className='container'>
      <div className={styles.layout}>
        <div className={`${styles.left} ${styles.box}`}>
          <img src={boxes.leftBox.img} alt='Promo' className={styles.image} />
          <div className={styles.overlay}>
            <div className={styles.textWrapper}>
              <p className={styles.label_1}>{boxes.leftBox.label_1}</p>
              <p className={styles.label_2}>{boxes.leftBox.label_2}</p>
              <p className={styles.discount}>{boxes.leftBox.discount}</p>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.box}>
            <div className={styles.coloredSection}>
              <img src={boxes.topBox.img1} alt='Promo' className={styles.image1} />
              <div className={styles.textWrapper}>
                <p className={styles.label_1_top}>
                  <span>{boxes.topBox.label_1_1}</span>
                  {boxes.topBox.label_1_2}
                </p>
                <p className={styles.label_2_top}>{boxes.topBox.label_2}</p>
                <p className={styles.price}>{boxes.topBox.price}</p>
              </div>
              <img src={boxes.topBox.img2} alt='Promo' className={styles.image2} />
            </div>
          </div>
          <div className={styles.box}>
            <div className={`${styles.coloredSection} ${styles.bottomBox}`}>
              <img src={boxes.bottomBox.img} alt='Promo' className={styles.image3} />
              <div className={styles.textWrapper}>
                <p className={styles.label_1_bottom}>
                  <span>{boxes.bottomBox.label_1_1}</span>
                  {boxes.bottomBox.label_1_2}
                </p>
                <p className={styles.label_2_bottom}>{boxes.bottomBox.label_2}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromotionLayout;
