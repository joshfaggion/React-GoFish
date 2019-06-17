import React from 'react';
import CardView from '../../components/CardView'
import Card from '../../models/Card'
import { shallow } from 'enzyme';

describe('CardView', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<CardView card={new Card('2', 'a')} class='selected' playerOrBot='bot' />)
  });

  it('renders a Card', () => {
    expect(wrapper.find('img').length).toBe(1)
  });
});
