import React from 'react';
import App from '../App';
import { shallow } from 'enzyme';

it('renders the login component on start', () => {
  const wrapper = shallow(<App />);
  // Why does it need LoginView? There is no LoginView!
  expect(wrapper.find('Login').length).toBe(1)
});
