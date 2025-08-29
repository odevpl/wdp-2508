import React from 'react';
import { shallow } from 'enzyme';
import CartPage from './CartPage';

describe('CartPage', () => {
  it('renders without crashing', () => {
    shallow(<CartPage />);
  });
});
