import React from 'react';
import '../App.css';
import Hand from './Hand'
import PropTypes from 'prop-types';


class Bot extends React.Component {
  static propTypes = {
    bot: PropTypes.object.isRequired,
    updateCard: PropTypes.func.isRequired,
    class: PropTypes.string.isRequired
  };

  updatePlayer() {
    this.props.updatePlayer(this.props.bot)
  }

  render() {
    return (
      <div className={this.props.class} onClick={this.updatePlayer.bind(this)}>
        <u><h3>{this.props.bot.name}</h3></u>
        <Hand updateCard={this.props.updateCard} cards={this.props.bot.cards} playerOrBot='bot'/>
      </div>
    )
  }
}

export default Bot;
