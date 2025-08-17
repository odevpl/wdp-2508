import React from 'react';
import { shallow } from 'enzyme';
import StarRating from './StarRating';
import { Provider } from 'react-redux';
import store from '../../../redux/store';

describe('Component StarRating', () => {
  it('should render without crashing', () => {
    const component = shallow(
      <Provider store={store}>
        <StarRating />
      </Provider>
    );
    expect(component).toBeTruthy();
  });
});
