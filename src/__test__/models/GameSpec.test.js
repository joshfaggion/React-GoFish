import Game from '../../models/Game';
import Card from '../../models/Card';

describe('Game', () => {
  it('can construct a new game', () => {
    const game = new Game('Joshua')
    expect(game.returnPlayers().length).toEqual(4)
  });

  it('can find a player by name', () => {
    const game = new Game('Joshua')
    const player = game.findPlayerByName('Joshua')
    expect(player.name).toEqual('Joshua')
    expect(player.constructor.name).toEqual('Player')
  });

  describe('runRequest', () => {
    let game, firstBotIndex, bot, player
    beforeEach(() => {
      game = new Game('Jimmy')
      firstBotIndex = 0
      bot = game.returnPlayers()[firstBotIndex]
      player = game.findPlayerByName('Jimmy')
    });

    it('can run a card request successfully', () => {
      const card1 = new Card('10', 's')
      const card2 = new Card('10', 'h')
      player.setHand(card1)
      bot.setHand(card2)
      const result = game.runRequest(player, bot, '10')
      expect(player.cardAmount()).toEqual(2)
      expect(result).toEqual(`Jimmy took all the 10's from ${bot.returnName()}!`)
    });

    it('should return Go Fish! if no card was found and give consolation card', () => {
      const card1 = new Card('10', 's')
      const card2 = new Card('7', 'h')
      player.setHand(card1)
      bot.setHand(card2)
      const result = game.runRequest(player, bot, 'j')
      expect(result).toEqual('Jimmy went fishing!')
      expect(player.cardAmount()).toEqual(2)
    });
  });

  describe('runRound', () => {
    let game, firstBotIndex, bot, player
    beforeEach(() => {
      game = new Game('Donald')
      firstBotIndex = 0
      bot = game.returnPlayers()[firstBotIndex]
      player = game.findPlayerByName('Donald')
    });

    it('will match up a player\'s cards and refill both player\'s cards', () => {
      const card1 = new Card('10', 's')
      const card2 = new Card('10', 'h')
      const card3 = new Card('10', 'c')
      const card4 = new Card('10', 'd')
      player.setHand(card1)
      bot.setHand(card2, card3, card4)
      game.runPlayerRound(bot.returnName(), '10')
      expect(player.returnPoints()).toEqual(1)
      expect(bot.cardAmount()).toEqual(5)
    });

    it('runs a bots turn', () => {
      game.runBotRound(bot)
      expect(bot.cardAmount()).toBeGreaterThan(5)
    });
  });
});
