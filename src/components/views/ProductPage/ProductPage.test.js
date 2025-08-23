import React from 'react';
import { Provider } from 'react-redux';
import store from '../../../redux/store';
import { shallow } from 'enzyme';
import ProductPage from './ProductPage';

describe('ProductPage', () => {
  it('renders without crashing', () => {
    shallow(
      <Provider store={store}>
        <ProductPage />
      </Provider>
    );
  });
});
