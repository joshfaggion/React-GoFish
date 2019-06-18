import React from 'react';
import '../App.css';
import Hand from './Hand'
import PropTypes from 'prop-types';
import CardView from './CardView'


class Bot extends React.Component {
  static propTypes = {
    bot: PropTypes.object.isRequired,
    updateCard: PropTypes.func.isRequired,
    class: PropTypes.string
  };

  updatePlayer() {
    if (this.props.playerOrBot !== 'match') {
      this.props.updatePlayer(this.props.bot)
    }
  }

  render() {
    return (
      <div className={this.props.class} onClick={this.updatePlayer.bind(this)}>
        <u><h3>{this.props.bot.name}</h3></u>
        <Hand updateCard={this.props.updateCard} cards={this.props.bot.cards} playerOrBot='bot'/>
        {this.props.bot.matches().map((match, index) => <CardView class='matched-card' key={index} playerOrBot='match' card={match} />)}
      </div>
    )
  }
}

export default Bot;
