import React from 'react';
import '../App.css';
import PropTypes from 'prop-types'
import Hand from './Hand'

class PlayerView extends React.Component {
  static propTypes = {
    player: PropTypes.object,
    updateCard: PropTypes.func
  }

  render() {
    return (
      <div className='player-div'>
        <u><h3>{this.props.player.name}</h3></u>
        <Hand updateCard={this.props.updateCard} cards={this.props.player.cards} playerOrBot='player' selectedCard={this.props.selectedCard}/>
      </div>
    )
  }
}

export default PlayerView;
