import React from 'react';
import { mount } from 'enzyme';
import CompanyClaim from './CompanyClaim';
import { Provider } from 'react-redux';
import store from '../../../redux/store';

describe('CompanyClaim', () => {
  it('renders without crashing', () => {
    const component = mount(
      <Provider store={store}>
        <CompanyClaim />
      </Provider>
    );
    expect(component.exists()).toBeTruthy();
  });
});
