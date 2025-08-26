import React from 'react';
// import PropTypes from 'prop-types';
import styles from './TabReview.module.scss';
import Button from '../../common/Button/Button';

import StarRating from '../../features/StarRating/StarRating';

const TabReview = () => {
  return (
    <form action='' className={`${styles.tabReview}`}>
      <fieldset className={styles.reviews}>{<p>There are no reviews yet.</p>}</fieldset>
      <fieldset className={styles.addReview}>
        <label htmlFor='review'>Add a review</label>
      </fieldset>
      <fieldset className={styles.userRating}>
        <p>Your Rating</p>
        <div className={styles.stars}>
          <span>Bad</span>
          <StarRating stars={0} userStars={0} />
          <span>Good</span>
        </div>
      </fieldset>
      <fieldset className={styles.userReview}>
        <label htmlFor='review'>Your Review</label>
        <textarea id='review' name='review' />
        <div className={`${styles.userData} row no-gutters`}>
          <input
            className={`col`}
            type='text'
            id='name'
            name='name'
            placeholder='Name*'
          />
          <input
            className={`col`}
            type='email'
            id='email'
            name='email'
            placeholder='Email*'
          />
          <Button className={`${styles.submitBtn} col-2`} variant='small' role='submit'>
            Continue
          </Button>
        </div>
      </fieldset>
    </form>
  );
};

// TabReview.propTypes = {};

export default TabReview;
