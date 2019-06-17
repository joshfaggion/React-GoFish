import React from 'react';
import '../App.css';
import Game from '../models/Game'
import Bot from './Bot'
import PropTypes from 'prop-types'
import PlayerView from './PlayerView'

class GameView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      game: new Game(props.name),
      selectedPlayer: '',
      selectedCard: ''
    }
  }

  static propTypes = {
    name: PropTypes.string.isRequired,
    onEndGame: PropTypes.func.isRequired
  };

  updateCard(card) {
    this.setState({selectedCard: card.returnRank()})
  }

  updatePlayer(player) {
    this.setState({selectedPlayer: player.name})
  }

  highlightBot(bot) {
    if (this.state.selectedPlayer === bot.name) {
      return 'selected bot-div'
    }
    return 'bot-div'
  }

  requestCard() {
    const result = this.state.game.runPlayerRound(this.state.selectedPlayer, this.state.selectedCard)
    if (result.includes('fishing') || this.state.game.player.cardAmount() === 0) {
      this.state.game.runAllBotTurns()
    }
    if (this.state.game.anyPlayersHaveCards() === false) {
      this.props.onEndGame(this.state.game)
    }
    this.setState({selectedCard: '', selectedPlayer: ''})
  }

  requestButton() {
    if (this.state.selectedPlayer !== '' && this.state.selectedCard !== '') {
      return <button onClick={this.requestCard.bind(this)} className='request-button'>Request Card</button>
    }
  }

  render() {
    return (
      <div>
        {this.state.game.bots.map((bot, index) => <Bot class={this.highlightBot(bot)} updateCard={this.updateCard.bind(this)} updatePlayer={this.updatePlayer.bind(this)} key={bot.name} bot={bot} selectedPlayer={this.state.selectedPlayer}  selectedCard={this.state.selectedCard} />)}
        <PlayerView updateCard={this.updateCard.bind(this)} updatePlayer={this.updatePlayer.bind(this)} selectedCard={this.state.selectedCard} player={this.state.game.player}/>
        {this.requestButton()}
        <div className='game-log'>
          <h3>Game Log:</h3>
          {this.state.game.gameLog().map((log, index) => <h5 key={index}>{log}</h5>)}
        </div>
      </div>
    )
  }
}

export default GameView;
