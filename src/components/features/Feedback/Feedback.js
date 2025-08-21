import React from 'react';
import PropTypes from 'prop-types';
import styles from './Feedback.module.scss';

import { getFeedback } from '../../../redux/feedbackRedux';
import { useSelector } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';

import Swipeable from '../Swipeable/Swipeable';

const Feedback = () => {
  const customerFeedback = useSelector(getFeedback);
  const [activeFeedbackId, setActiveFeedbackId] = React.useState(0);
  const commentsCount = Math.ceil(customerFeedback.length);

  const handleCommentChange = newId => () => {
    if (newId < 0 || newId >= commentsCount) return;
    setActiveFeedbackId(newId);
  };

  const dots = [];
  for (let i = 0; i < commentsCount; i++) {
    dots.push(
      <li>
        <a
          onClick={handleCommentChange(i)}
          className={i === activeFeedbackId ? styles.active : ''}
        >
          {' '}
          comment {i}
        </a>
      </li>
    );
  }

  return (
    <div className={styles.feedback}>
      <div className='container'>
        <div className={styles.panelBar}>
          <div className='row no-gutters align-items-end'>
            <div className={'col-auto ' + styles.heading}>
              <h3>Client Feedback</h3>
            </div>
            <div className={'col ' + styles.menu}></div>
            <div className={'col-auto ' + styles.dots}>
              <ul>{dots}</ul>
            </div>
          </div>
        </div>
        <Swipeable
          leftAction={handleCommentChange(activeFeedbackId + 1)}
          rightAction={handleCommentChange(activeFeedbackId - 1)}
        >
          <div key={customerFeedback[activeFeedbackId].id} className={styles.comment}>
            <h1>
              <FontAwesomeIcon icon={faQuoteRight} />
            </h1>
            <p>{customerFeedback[activeFeedbackId].comment}</p>
            <div className={styles.customerProfile}>
              <div className={styles.picutre}>
                <img
                  src={customerFeedback[activeFeedbackId].image}
                  alt={customerFeedback.name}
                />
              </div>
              <div className={styles.profileDescription}>
                <h5>{customerFeedback[activeFeedbackId].name}</h5>
                <span>{customerFeedback[activeFeedbackId].description}</span>
              </div>
            </div>
          </div>
        </Swipeable>
      </div>
    </div>
  );
};

Feedback.propTypes = {
  customerFeedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      comment: PropTypes.string,
      image: PropTypes.string,
    })
  ),
};

export default Feedback;
