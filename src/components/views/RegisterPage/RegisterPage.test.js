import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import RegisterPage from './RegisterPage';

describe('RegisterPage', () => {
  it('renders without crashing', () => {
    mount(
      <MemoryRouter>
        <RegisterPage />
      </MemoryRouter>
    );
  });
});
