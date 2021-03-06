import React from 'react';
import GameView from '../../components/GameView';
import { shallow, mount } from 'enzyme';

describe('GameView', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<GameView onEndGame={jest.fn()} name='Darrel' />)
  });

  it('renders three opponents', () => {
    expect(wrapper.find('Bot').length).toBe(3)
  });

  it('renders the player', () => {
    expect(wrapper.find('PlayerView').length).toBe(1)
  });

  describe('mid game', () => {
    let card, bot
    beforeEach(() => {
      wrapper = mount(<GameView onEndGame={jest.fn()} name='John' />)
      card = wrapper.find('.card').last()
      bot = wrapper.find('.bot-div').first()
    });

    it('can highlight a card on click', () => {
      card.simulate('click')
      expect(card.html()).toContain('selected')
      wrapper.unmount()
    });

    it('can run a request', () => {
      bot.simulate('click')
      card.simulate('click')
      const button = wrapper.find('.request-button')
      expect(button.length).toEqual(1)
      button.simulate('click')
      expect(wrapper.find('.game-log').html()).toContain('John')
      wrapper.unmount()
    });
  });
});
