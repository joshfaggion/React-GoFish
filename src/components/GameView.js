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
    name: PropTypes.string.isRequired
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

  render() {
    return (
      <div>
        {this.state.game.bots.map((bot, index) => <Bot class={this.highlightBot(bot)} updateCard={this.updateCard.bind(this)} updatePlayer={this.updatePlayer.bind(this)} key={index} bot={bot} selectedPlayer={this.state.selectedPlayer}  selectedCard={this.state.selectedCard} />)}
        <PlayerView updateCard={this.updateCard.bind(this)} updatePlayer={this.updatePlayer.bind(this)} selectedCard={this.state.selectedCard} player={this.state.game.player}/>
      </div>
    )
  }
}

export default GameView;
