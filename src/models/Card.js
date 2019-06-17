export default class Card {
  constructor(rank, suit) {
    this.rank = rank
    this.suit = suit
  }

  value() {
    return `${this.suit}${this.rank}`
  }

  returnRank() {
    return this.rank
  }

  returnSuit() {
    return this.suit
  }
}
