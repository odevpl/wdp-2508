import React from 'react';
import { shallow } from 'enzyme';
import Feedback from './Feedback';
import { Provider } from 'react-redux';
import store from '../../../redux/store';

describe('Component ProductBox', () => {
  it('should render without crashing', () => {
    const component = shallow(
      <Provider store={store}>
        <Feedback />
      </Provider>
    );
    expect(component).toBeTruthy();
  });
});
