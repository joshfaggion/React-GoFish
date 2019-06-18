import React from 'react';
import '../App.css';
import PropTypes from 'prop-types'

class EndGame extends React.Component {

  static propTypes = {
    game: PropTypes.object.isRequired
  }

  windowReload() {
    window.location.reload()
  }

  winners() {
    const winners = this.props.game.winner()
    if (Array.isArray(winners)) {
      return `${winners[0]} and ${winners[1]}`
    }
    return winners
  }

  render() {
    return (
      <div className='user-form'>
        {this.props.game.players.map((player, index) => <div key={index}><h3>{player.name} had {player.points} points!</h3></div>)}
        <h2>Congrats {this.winners()}!</h2>
        <button onClick={this.windowReload.bind(this)} className='request-button'>Play Again?</button>
      </div>
    )
  }
}

export default EndGame;
