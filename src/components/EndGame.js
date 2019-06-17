import React from 'react';
import '../App.css';
import PropTypes from 'prop-types'

class EndGame extends React.Component {

static propTypes = {
  game: PropTypes.object.isRequired
}

  render() {
    return (
      <div>
      {this.props.game.players.map((player, index) => <div key={index}><h3>{player.name} had {player.points} points!</h3></div>)}
      <h2>Congrats {this.props.game.winner()}!</h2>
      </div>
    )
  }
}

export default EndGame;
