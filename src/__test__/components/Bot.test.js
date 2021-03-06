import React from 'react';
import Bot from '../../components/Bot';
import Player from '../../models/Player'
import { shallow } from 'enzyme';

describe('Bot', () => {
  let wrapper, player
  beforeEach(() => {
    player = new Player('Darrel')
    wrapper = shallow(<Bot bot={player} updateCard={jest.fn()} />)
  });

  it('renders a bot\'s title', () => {
    expect(wrapper.text()).toContain('Darrel')
  });

  it('renders the bot\'s Hand', () => {
    expect(wrapper.find('Hand').length).toEqual(1)
  });
});
