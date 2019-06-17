import Card from '../../models/Card';

describe('Card', () => {
  it('can have a rank and suit', () => {
    const card = new Card('10', 'S')
    expect([card.rank, card.suit]).toEqual(['10', 'S'])
  });
});
