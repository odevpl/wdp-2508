import React from 'react';
import { mount } from 'enzyme';
import QuickView from './QuickView';
import { Provider } from 'react-redux';
import store from '../../../redux/store';
import { MemoryRouter } from 'react-router-dom';

describe('Component QuickView', () => {
  it('should render without crashing', () => {
    const component = mount(
      <Provider store={store}>
        <MemoryRouter>
          <QuickView />
        </MemoryRouter>
      </Provider>
    );
    expect(component).toBeTruthy();
  });
});
