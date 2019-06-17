import React from 'react';
import Login from '../../components/Login';
import { shallow } from 'enzyme';

it('renders the loginView', () => {
  const wrapper = shallow(<Login />);
  expect(wrapper.find('.user-form').length).toBe(1)
});
