import React from 'react';
import GameView from '../../components/GameView';
import { shallow } from 'enzyme';

describe('GameView', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<GameView name='Darrel' />)
  });

  it('renders three opponents', () => {
    expect(wrapper.find('Bot').length).toBe(3)
  });

  it('renders the player', () => {
    expect(wrapper.find('PlayerView').length).toBe(1)
  });
});
