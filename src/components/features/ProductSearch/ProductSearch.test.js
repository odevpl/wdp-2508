import React from 'react';
import { mount } from 'enzyme';
import ProductSearch from './ProductSearch';
import { Provider } from 'react-redux';
import store from '../../../redux/store';

describe('Component ProductSearch', () => {
  it('should render without crashing', () => {
    const component = mount(
      <Provider store={store}>
        <ProductSearch />
      </Provider>
    );
    expect(component).toBeTruthy();
  });
});
