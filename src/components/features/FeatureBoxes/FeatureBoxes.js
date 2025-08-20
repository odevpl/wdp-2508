import React from 'react';

import {
  faTruck,
  faHeadphones,
  faReplyAll,
  faBullhorn,
} from '@fortawesome/free-solid-svg-icons';

import styles from './FeatureBoxes.module.scss';
import FeatureBox from '../../common/FeatureBox/FeatureBox';

const FeatureBoxes = () => {
  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={styles.grid}>
          <div className={`${styles.card} ${styles.big}`}>
            <FeatureBox icon={faTruck} link='#'>
              <h5>Free shipping</h5>
              <p>All orders</p>
            </FeatureBox>
          </div>

          <div className={`${styles.card} ${styles.small}`}>
            <FeatureBox icon={faHeadphones} link='#'>
              <h5>24/7 customer</h5>
              <p>support</p>
            </FeatureBox>
          </div>

          <div className={`${styles.card} ${styles.small}`}>
            <FeatureBox icon={faReplyAll} link='#'>
              <h5>Money back</h5>
              <p>guarantee</p>
            </FeatureBox>
          </div>

          <div className={`${styles.card} ${styles.small}`}>
            <FeatureBox icon={faBullhorn} link='#'>
              <h5>Member discount</h5>
              <p>First order</p>
            </FeatureBox>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureBoxes;
