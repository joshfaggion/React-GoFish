import React from 'react';
import '../App.css';
import Game from '../models/Game'
import Bot from './Bot'
import PropTypes from 'prop-types'

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

  render() {
    return (
      this.state.game.bots.map((bot, index) => <Bot key={index} bot={bot} selectedPlayer={this.state.selectedPlayer} selectedCard={this.state.selectedCard} />)
    )
  }
}

export default GameView;
