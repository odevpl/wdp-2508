import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { mount } from 'enzyme';
import store from '../../../redux/store';
import CompanyClaim from './CompanyClaim';

describe('CompanyClaim', () => {
  it('renders without crashing', () => {
    mount(
      <Provider store={store}>
        <MemoryRouter>
          <CompanyClaim />
        </MemoryRouter>
      </Provider>
    );
  });
});
