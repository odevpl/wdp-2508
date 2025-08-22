// src/components/features/Swipeable/Swipeable.js
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Swipeable.module.scss';

const Swipeable = ({ leftAction, rightAction, children }) => {
  const touchData = { start: 0, end: 0 };

  const handleTouchStart = e => {
    touchData.start = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = e => {
    touchData.end = e.changedTouches[0].screenX;
    if (touchData.end < touchData.start) leftAction();
    else if (touchData.end > touchData.start) rightAction();
  };

  return (
    <div
      className={styles.swipeable}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {children}
    </div>
  );
};

Swipeable.propTypes = {
  leftAction: PropTypes.func,
  rightAction: PropTypes.func,
  children: PropTypes.node,
};

export default Swipeable;
