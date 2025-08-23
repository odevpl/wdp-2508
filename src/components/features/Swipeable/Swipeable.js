import React from 'react';
import PropTypes from 'prop-types';

const Swipeable = ({ leftAction, rightAction, children, className }) => {
  const touchData = {
    start: { x: 0, y: 0 },
    end: { x: 0, y: 0 },
  };

  function handleTouchStart(e) {
    touchData.start.x = e.changedTouches[0].screenX;
  }

  function handleTouchEnd(e) {
    touchData.end.x = e.changedTouches[0].screenX;
    if (touchData.end.x < touchData.start.x) {
      //Left
      leftAction();
    } else if (touchData.end.x > touchData.start.x) {
      //Right
      rightAction();
    }
  }

  return (
    <div
      className={className}
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
  className: PropTypes.string,
};

export default Swipeable;
