import React from 'react';
import PropTypes from 'prop-types';

import styles from './StarRating.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const StarRating = ({ stars, userStars }) => {
  const [hoveredStar, setHoveredStar] = React.useState(0);
  const [myStars, setMyStars] = React.useState(userStars);
  const currentStarsValue = myStars || stars;

  const handleMouseEnter = i => {
    setHoveredStar(i);
  };
  const handleMouseLeave = () => {
    setHoveredStar(0);
  };
  const handleClick = i => {
    myStars === i ? setMyStars(0) : setMyStars(i); // Możliwość wycofania oceny poprzez ponowne kliknięcie tej samej gwiazdki
  };

  return (
    <div className={styles.stars}>
      {[1, 2, 3, 4, 5].map(i => (
        <a
          key={i}
          href='#'
          onMouseEnter={() => handleMouseEnter(i)}
          onMouseLeave={handleMouseLeave}
          onClick={e => {
            e.preventDefault();
            handleClick(i);
          }}
        >
          <FontAwesomeIcon
            icon={i <= (hoveredStar || currentStarsValue) ? faStar : farStar}
            className={
              i <= (hoveredStar || myStars) ? styles.starUser : styles.starDefault
            }
          />
        </a>
      ))}
    </div>
  );
};

StarRating.propTypes = {
  stars: PropTypes.number,
  userStars: PropTypes.number,
};

export default StarRating;
