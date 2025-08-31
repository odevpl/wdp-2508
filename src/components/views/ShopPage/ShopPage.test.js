import React from 'react';
import { shallow } from 'enzyme';
import ShopPage from './ShopPage';

describe('Component ShopPage', () => {
  it('should render without crashing', () => {
    const mockProducts = [];
    const mockViewport = { width: 1024 };
    const component = shallow(
      <ShopPage products={mockProducts} viewport={mockViewport} />
    );
    expect(component).toBeTruthy();
  });
});
