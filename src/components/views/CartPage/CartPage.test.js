import React from 'react';
import { mount } from 'enzyme';
import CartPage from './CartPage';
import { Provider } from 'react-redux';
import store from '../../../redux/store';
import { MemoryRouter } from 'react-router-dom';

describe('CartPage', () => {
  it('renders without crashing', () => {
    mount(
      <MemoryRouter>
        <Provider store={store}>
          <CartPage />
        </Provider>
      </MemoryRouter>
    );
  });
});
