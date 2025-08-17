import React from 'react';
import { shallow } from 'enzyme';
import StarRating from './StarRating';

describe('Component StarRating', () => {
  it('should render without crashing', () => {
    const component = shallow(<StarRating />);
    expect(component).toBeTruthy();
  });
});
