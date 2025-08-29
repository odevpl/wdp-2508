import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import LoginPage from './LoginPage';

describe('LoginPage', () => {
  it('renders without crashing', () => {
    shallow(
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>
    );
  });
});
