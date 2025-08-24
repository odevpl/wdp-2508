import React from 'react';
// import PropTypes from 'prop-types';

import styles from './Homepage.module.scss';

import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import PromotionSection from '../../features/PromotionSection/PromotionSection';
import FurnitureGallery from '../../features/FurnitureGallery/FurnitureGallery';
import Feedback from '../../features/Feedback/Feedback';

const Homepage = () => (
  <div className={styles.root}>
    <PromotionSection id='aenean-ru-bristique-1' />
    <FeatureBoxes />
    <NewFurniture />
    <FurnitureGallery />
    <Feedback />
  </div>
);

// Homepage.propTypes = {};

export default Homepage;
