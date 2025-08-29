import React from 'react';
import { mount } from 'enzyme';
import CartPage from './CartPage';
import { Provider } from 'react-redux';
import store from '../../../redux/store';

describe('CartPage', () => {
  it('renders without crashing', () => {
    mount(
      <Provider store={store}>
        <CartPage />
      </Provider>
    );
  });
});
