import React from 'react';
import { shallow } from 'enzyme';
import ProductBox from './ProductBox';
import { Provider } from 'react-redux';
import store from '../../../redux/store';

describe('Component ProductBox', () => {
  it('should render without crashing', () => {
    const component = shallow(
      // Przekazany store do celów prawidłowego działania testu
      <Provider store={store}>
        <ProductBox />
      </Provider>
    );
    expect(component).toBeTruthy();
  });
});
