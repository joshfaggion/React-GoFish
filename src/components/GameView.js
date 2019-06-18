import React from 'react';
import '../App.css';
import Game from '../models/Game'
import Bot from './Bot'
import PropTypes from 'prop-types'
import PlayerView from './PlayerView'
import CardView from './CardView'

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

  middleOfDeck() {
    if (this.state.game.deck.cardAmount() !== 0) {
      return <CardView className='deck' playerOrBot='deck' />
    }
  }

  requestCard() {
    this.state.game.runRound(this.state.selectedPlayer, this.state.selectedCard)
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
        <div className='bots'>{this.state.game.bots.map((bot, index) => <Bot class={this.highlightBot(bot)} updateCard={this.updateCard.bind(this)} updatePlayer={this.updatePlayer.bind(this)} key={bot.name} bot={bot} selectedPlayer={this.state.selectedPlayer}  selectedCard={this.state.selectedCard} />)}</div>
        <div className='centered-wrapper'>
          {this.middleOfDeck()}
        </div>
        <div className='centered-wrapper'><PlayerView updateCard={this.updateCard.bind(this)} updatePlayer={this.updatePlayer.bind(this)} selectedCard={this.state.selectedCard} player={this.state.game.player}/> </div>
        <div className='centered-wrapper'>
          {this.requestButton()}
        </div>
        <div className='game-log'>
          <h3>Game Log:</h3>
          {this.state.game.gameLog().map((log, index) => <h5 key={index}>{log}</h5>)}
        </div>
      </div>
    )
  }
}

export default GameView;
