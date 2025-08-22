import React from 'react';
import { shallow } from 'enzyme';
import BlogPage from './BlogPage';

describe('BlogPage', () => {
  it('renders without crashing', () => {
    shallow(<BlogPage />);
  });
});
