import React from 'react';
import PropTypes from 'prop-types';

import styles from './StarRating.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import { useDispatch } from 'react-redux';
import { starRating } from '../../../redux/productsRedux';

const StarRating = ({ id, stars, userStars, variant }) => {
  const [hoveredStar, setHoveredStar] = React.useState(0);
  const [myStars, setMyStars] = React.useState(userStars);
  const currentStarsValue = myStars || stars;
  const dispatch = useDispatch();

  const handleMouseEnter = i => {
    setHoveredStar(i);
  };
  const handleMouseLeave = () => {
    setHoveredStar(0);
  };
  const handleClick = i => {
    if (myStars === i) {
      dispatch(starRating(id, 0)); // Możliwość usunięcia oceny jeśli kliknięto na tę samą gwiazdkę
      setMyStars(0);
    } else {
      dispatch(starRating(id, i));
      setMyStars(i);
    }
  };

  return (
    <div className={`${styles.stars} ${variant ? styles[variant] : ''}`}>
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

StarRating.defaultProps = {
  variant: 'default', // Add this line
};

StarRating.propTypes = {
  id: PropTypes.string,
  stars: PropTypes.number,
  userStars: PropTypes.number,
  variant: PropTypes.string,
};

export default StarRating;
