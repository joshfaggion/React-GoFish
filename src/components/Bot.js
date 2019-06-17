import React from 'react';
import '../App.css';
import Hand from './Hand'
import PropTypes from 'prop-types';


class Bot extends React.Component {
  static propTypes = {
    bot: PropTypes.object.isRequired
  };

  highlightClass() {
    return 'bot-div'
  }

  render() {
    return (
      <div className={this.highlightClass()}>
      <u><h3>{this.props.bot.name}</h3></u>
      <Hand cards={this.props.bot.cards} playerOrBot='bot' selectedCard={this.props.selectedCard}/>
      </div>
    )
  }
}

export default Bot;
