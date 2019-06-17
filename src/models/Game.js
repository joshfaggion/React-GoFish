import Player from './Player'
import Deck from './Deck'
import Names from '../components/Names'

export default class Game {
  constructor(playerName) {
    this.player = new Player(playerName)
    this.bots = [new Player(Names.name()), new Player(Names.name()), new Player(Names.name())]
    this.players = [...this.bots, this.player]
    this.deck = new Deck()
    this.log = []
    this.initGame()
  }

  initGame() {
    this.deck.shuffle()
    this.players.forEach(player => player.takeCard(this.deck.dealHand()))
  }

  returnPlayers() {
    return this.players
  }

  runRequest(requestingPlayer, targetPlayer, requestedRank) {
    const result = targetPlayer.cardInHand(requestedRank)
    if (result !== 'Go Fish!') {
      requestingPlayer.takeCard(result)
      return `${requestingPlayer.returnName()} took all the ${requestedRank}'s from ${targetPlayer.returnName()}!`
    }
    if (this.deck.cardAmount() > 0) {
      requestingPlayer.takeCard(this.deck.topCard())
    }
    return `${requestingPlayer.returnName()} went fishing!`
  }

  findPlayerByName(name) {
    for (const player of this.players) {
      if (name === player.name) {
        return player
      }
    }
    return 'That player was not found'
  }

  cardRefills() {
    if (this.deck.cardAmount() > 0) {
      for (const player of this.players) {
        if (player.cardAmount() === 0) {
          player.takeCard(this.deck.dealHand())
        }
      }
    }
  }

  runPlayerRound(targetName, rank) {
    const target = this.findPlayerByName(targetName)
    const result = this.runRequest(this.player, target, rank)
    this.player.pairCards()
    this.cardRefills()
    this.updateGameLog(result)
    return result
  }

  anyPlayersHaveCards() {
    let anyPlayers = false
    for (const player of this.players) {
      if (player.cardAmount() > 0) {
        anyPlayers = true
      }
    }
    return anyPlayers
  }

  runBotRound(player) {
    const botDecision = this.pickBotTargets(player)
    const result = this.runRequest(botDecision[0], botDecision[1], botDecision[2])
    this.updateGameLog(result)
    player.pairCards()
    return result
  }

  updateGameLog(result) {
    this.log.push(result)
    if (this.log.length > 10) {
      this.log.shift()
    }
  }

  pickBotTargets(player) {
    const targetRank = player.cards[Math.floor(Math.random() * player.cardAmount())].returnRank()
    let targetPlayer = player
    while (targetPlayer === player) {
      targetPlayer = this.players[Math.floor(Math.random() * this.players.length)]
    }
    return [player, targetPlayer, targetRank]
  }

  loopThroughBotTurns() {
    for (const player of this.bots) {
      if (player.cardAmount() > 0) {
        this.runBotRound(player)
      }
    }
  }

  runAllBotTurns() {
    const user = this.player
    if (user.cardAmount() === 0) {
      while (this.anyPlayersHaveCards()) {
        this.loopThroughBotTurns()
      }
    }
    this.loopThroughBotTurns()
  }

  gameLog() {
    return this.log
  }

  finishGame() {
    this.deck.setDeck([])
    this.players.forEach(player => player.setHand([]))
    return this
  }

  results() {
    return this.players.map(player => player.returnPoints())
  }

  winner() {
    let [winnersPoints, winner] = [0, '']
    this.players.forEach((player) => {
      if (player.returnPoints() > winnersPoints) {
        [winnersPoints, winner] = [player.returnPoints(), player.returnName()]
      }
    })
    return winner
  }
}
