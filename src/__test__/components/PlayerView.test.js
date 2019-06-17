import React from 'react';
import PlayerView from '../../components/PlayerView'
import Player from '../../models/Player'
import { shallow } from 'enzyme';

describe('Bot', () => {
  let wrapper, player
  beforeEach(() => {
    player = new Player('Carl')
    wrapper = shallow(<PlayerView player={player} />)
  });

  it('renders a player\'s title', () => {
    expect(wrapper.text()).toContain('Carl')
  });

  it('renders the player\'s Hand', () => {
    expect(wrapper.find('Hand').length).toEqual(1)
  });
});
