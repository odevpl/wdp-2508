import React from 'react';
import { shallow } from 'enzyme';
import TabReview from './TabReview';

describe('TabReview', () => {
  it('renders without crashing', () => {
    shallow(<TabReview />);
  });
});
