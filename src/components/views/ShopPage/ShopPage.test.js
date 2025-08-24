import React from 'react';
import { shallow } from 'enzyme';
import ShopPage from './ShopPage';

describe('ShopPage', () => {
  it('renders without crashing', () => {
    shallow(<ShopPage />);
  });
});
