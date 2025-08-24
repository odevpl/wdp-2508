import React from 'react';
import { shallow } from 'enzyme';
import Banner from './Banner';
import { Provider } from 'react-redux';
import store from '../../../redux/store';

describe('Component Banner', () => {
  it('should render without crashing', () => {
    const component = shallow(
      <Provider store={store}>
        <Banner />
      </Provider>
    );
    expect(component).toBeTruthy();
  });
});
