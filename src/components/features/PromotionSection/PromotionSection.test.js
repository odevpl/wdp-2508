import React from 'react';
import { shallow } from 'enzyme';
import PromotionSection from './PromotionSection';

describe('Component PromotionSection', () => {
  it('should render without crashing', () => {
    const component = shallow(<PromotionSection />);
    expect(component).toBeTruthy();
  });
});
