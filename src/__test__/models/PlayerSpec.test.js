import Player from '../../models/Player';
import Card from '../../models/Card';

describe('Player', () => {
  let player
  beforeEach(() => {
    player = new Player('Jim')
  });

  it('can take the top card from the deck', () => {
    const card = new Card('a', 'h')
    player.takeCard(card)
    expect(player.cardAmount()).toEqual(1)
    expect(player.cards).toEqual([card])
  });

  it('will search for a card in its hand once requested', () => {
    const matchingCard = new Card('10', 'h')
    const nonMatchingCard = new Card('a', 's')
    player.setHand(matchingCard, nonMatchingCard)
    expect(player.cardInHand('10')).toEqual([matchingCard])
  });

  it('will pair cards if there are matches', () => {
    const card1 = new Card('4', 'c')
    const card2 = new Card('4', 'h')
    const card3 = new Card('4', 's')
    const card4 = new Card('4', 'd')
    player.setHand(card1, card2, card3, card4)
    player.pairCards()
    expect(player.returnPoints()).toEqual(1)
    expect(player.cardAmount()).toEqual(0)
  });
});
