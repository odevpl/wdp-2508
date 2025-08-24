import React from 'react';
import { shallow } from 'enzyme';
import ShopPage from './ShopPage';

describe('Component ShopPage', () => {
  it('should render without crashing', () => {
    const categories = ['bed', 'table', 'sofa'];
    const component = shallow(<ShopPage categories={categories} />);
    expect(component).toBeTruthy();
  });
});
