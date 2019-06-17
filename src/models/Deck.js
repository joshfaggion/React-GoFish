import Card from './Card'

export default class Deck {
  constructor() {
    this.deck = []
    const suits = ['h', 's', 'c', 'd'];
    const values = ['a', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'j', 'q', 'k'];
    for (const suit of suits) {
      for (const value of values) {
        this.deck.push(new Card(value, suit))
      }
    }
  }

  cardAmount() {
    return this.cards().length
  }

  shuffle() {
    const { deck } = this
    let m = deck.length
    let i
    while (m) {
      i = Math.floor(Math.random() * m--);
      [deck[m], deck[i]] = [deck[i], deck[m]]
    }
    return deck
  }

  cards() {
    return this.deck
  }

  topCard() {
    return this.cards().shift()
  }

  dealHand() {
    return this.deck.splice(0, 5)
  }

  setDeck(deck) {
    this.deck = deck
  }
}
