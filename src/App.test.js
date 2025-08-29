import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import App from './App';

// Tworzymy mock store
const mockStore = configureStore([]);

describe('App component', () => {
  let store;
  let wrapper;

  beforeEach(() => {
    store = mockStore({
      products: [], // jeśli komponent używa state.products.map(...)
      categories: [], // teraz categories jest tablicą, więc .map zadziała
      blogs: [], // jeśli komponent używa state.blogs.map(...)
    });

    wrapper = shallow(
      <Provider store={store}>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </Provider>
    )
      .dive()
      .dive(); // dive do MainLayout i switch, jeśli shallow
  });

  it('should render without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });
});
