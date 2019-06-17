import React from 'react';
import '../App.css';
import Hand from './Hand'
import PropTypes from 'prop-types';


class Bot extends React.Component {
  static propTypes = {
    bot: PropTypes.object.isRequired,
    updateCard: PropTypes.func.isRequired
  };

  highlightClass() {
    return 'bot-div'
  }

  render() {
    return (
      <div className={this.highlightClass()}>
      <u><h3>{this.props.bot.name}</h3></u>
      <Hand updateCard={this.props.updateCard} updatePlayer={this.props.updatePlayer} cards={this.props.bot.cards} playerOrBot='bot'/>
      </div>
    )
  }
}

export default Bot;
