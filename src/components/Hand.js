import React from 'react';
import '../App.css';
import PropTypes from 'prop-types'
import CardView from './CardView'

class Hand extends React.Component {
  static propTypes = {
    cards: PropTypes.array.isRequired,
    playerOrBot: PropTypes.string.isRequired,
    selectedCard: PropTypes.string,
    updateCard: PropTypes.func.isRequired
  };

  highlightClass(card) {
    if (this.props.selectedCard === card.returnRank()) {
      return 'card selected'
    }
  }

  render() {
    return (
      <div className='hand'>
        {this.props.cards.map((card, index) => <CardView updateCard={this.props.updateCard} class={this.highlightClass(card)} key={index} card={card} playerOrBot={this.props.playerOrBot} alt='the back of a card' />)}
      </div>
    )
  }
}

export default Hand;
