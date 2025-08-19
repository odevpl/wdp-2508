import React from 'react';
import { mount } from 'enzyme';
import PromotionSection from './PromotionSection';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import initialState from '../../../redux/initialState';

// describe('Component PromotionSection', () => {
//   it('should render without crashing', () => {
//     const component = shallow(<PromotionSection id='aenean-ru-bristique-1' />);
//     expect(component).toBeTruthy();
//   });
// });
function mockReducer(state = initialState, action) {
  return state;
}

const store = createStore(mockReducer);

describe('Component PromotionSection', () => {
  it('should render without crashing', () => {
    const component = mount(
      <Provider store={store}>
        <PromotionSection id='aenean-ru-bristique-1' />
      </Provider>
    );
    expect(component.find(PromotionSection).exists()).toBeTruthy();
  });
});
