import React from 'react';
import { mount } from 'enzyme';
import MenuBar from './MenuBar';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('Component MenuBar', () => {
  it('should render without crashing', () => {
    const store = mockStore({ cart: [], categories: [] });

    const wrapper = mount(
      <Provider store={store}>
        <MemoryRouter>
          <MenuBar />
        </MemoryRouter>
      </Provider>
    );

    expect(wrapper.exists()).toBe(true);
  });
});
