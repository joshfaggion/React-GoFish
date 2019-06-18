import React from 'react';
import '../App.css';
import PropTypes from 'prop-types'
import Deck from '../models/Deck'
import cardBack from '../img/backs_blue.png'

// Creates a image hash with all the images assigned to the card's unique value
const images = {}
new Deck().cards().forEach((card) => {
  images[card.value()] = require(`../img/${card.value()}.png`)
})

class CardView extends React.Component {
  static propTypes = {
    playerOrBot: PropTypes.string.isRequired,
    card: PropTypes.object,
    class: PropTypes.string
  }

  img() {
    if (this.props.playerOrBot === 'player' || this.props.playerOrBot === 'match') {
      return images[this.props.card.value()]
    } else {
      return cardBack
    }
  }

  updateCard(card) {
    if (this.props.playerOrBot === 'player') {
      this.props.updateCard(card)
    }
  }

  render() {
    return (
      <img onClick={this.updateCard.bind(this, this.props.card)} className={this.props.class} src={this.img()} alt='back of a card' />
    )
  }
}

export default CardView
