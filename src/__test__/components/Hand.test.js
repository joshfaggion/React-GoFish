import React from 'react';
import Hand from '../../components/Hand'
import Card from '../../models/Card'
import { shallow } from 'enzyme';

describe('Bot', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<Hand cards={[new Card('2', 'a'), new Card('10', 'c')]} playerOrBot='bot' />)
  });

  it('renders a Hand', () => {
    expect(wrapper.find('CardView').length).toBe(2)
  });
});
