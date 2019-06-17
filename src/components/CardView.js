import React from 'react';
import '../App.css';
import PropTypes from 'prop-types'

class CardView extends React.Component {
  static propTypes = {
    playerOrBot: PropTypes.string.isRequired,
    card: PropTypes.object,
    class: PropTypes.string
  }

  static cardBack() {
    return require('../img/backs_blue.png')
  }

  value() {
    if (this.props.playerOrBot === 'bot') {
      return CardView.cardBack()
    } else {
      return require(`../img/${this.props.card.value()}.png`)
    }
  }

  updateCard(card) {
    if (this.props.playerOrBot === 'player') {
      this.props.updateCard(card)
    }
  }

  render() {
    return (
      <img id={this.props.card} onClick={this.updateCard.bind(this, this.props.card)} className={this.props.class} src={this.value()} alt='back of a card' />
    )
  }
}

export default CardView
