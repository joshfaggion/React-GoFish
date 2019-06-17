import React from 'react';
import { shallow } from 'enzyme'
import EndGame from '../../components/EndGame'
import Game from '../../models/Game'

describe('EndGame', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<EndGame game={new Game('Darrel')} />)
  });

  it('renders the end game', () => {
    expect(wrapper.html()).toContain('Congrats')
    expect(wrapper.html()).toContain('Darrel')
  });
});
