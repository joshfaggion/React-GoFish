import Deck from '../../models/Deck';

describe('Deck', () => {
  let deck
  beforeEach(() => {
    deck = new Deck()
  });

  it('can initialize with a full 52 card deck', () => {
    expect(deck.cardAmount()).toEqual(52)
  });

  it('can shuffle the cards', () => {
    // Get a version of the original deck before its shuffled
    const cards = [...deck.cards()]
    deck.shuffle()
    expect(deck.cards()).not.toEqual(cards)
  });

  it('can take the top card', () => {
    const card = deck.topCard()
    expect(deck.cardAmount()).toEqual(51)
    // constructor.name gives the class name of whatever it is called on
    expect(card.constructor.name).toEqual('Card')
  });

  it('can deal five cards to a player ', () => {
    const dealtCards = deck.dealHand()
    // Deal hand returns the top five cards
    expect(deck.cardAmount()).toEqual(47)
    expect(dealtCards.length).toEqual(5)
  });
});
