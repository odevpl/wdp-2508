import React from 'react';
import Brands from '../../features/Brands/Brand';

import styles from './Homepage.module.scss';

import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import PromotionSection from '../../features/PromotionSection/PromotionSection';
import Feedback from '../../features/Feedback/Feedback';
import FurnitureGallery from '../../features/FurnitureGallery/FurnitureGallery';

const Homepage = () => (
  <div className={styles.root}>
    <PromotionSection id='aenean-ru-bristique-1' />
    <FeatureBoxes />
    <NewFurniture />
    <FurnitureGallery />
    <Brands />
    <Feedback />
  </div>
);

export default Homepage;
