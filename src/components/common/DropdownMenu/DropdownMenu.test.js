import React from 'react';
import { shallow } from 'enzyme';
import DropdownMenu from './DropdownMenu';

describe('Component DropdownMenu', () => {
  it('should render without crashing', () => {
    const content = [
      { id: 1, name: 'Option 1' },
      { id: 2, name: 'Option 2' },
    ];
    const title = 'Title';
    const component = shallow(<DropdownMenu title={title} content={content} />);
    expect(component).toBeTruthy();
  });
});
