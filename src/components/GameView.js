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
    console.log(`Let's update the card's with ${card.returnRank()}`)
    this.setState({selectedCard: card.returnRank()})
  }

  updatePlayer(player) {
    console.log(`Let's update the card's with ${player.name}`)
    this.setState({selectedPlayer: player.name})
  }

  render() {
    return (
      <div>
        {this.state.game.bots.map((bot, index) => <Bot updateCard={this.updateCard.bind(this)} updatePlayer={this.updatePlayer.bind(this)} key={index} bot={bot} selectedPlayer={this.state.selectedPlayer}  selectedCard={this.state.selectedCard} />)}
        <PlayerView updateCard={this.updateCard.bind(this)} updatePlayer={this.updatePlayer.bind(this)} selectedCard={this.state.selectedCard} player={this.state.game.player}/>
      </div>
    )
  }
}

export default GameView;
