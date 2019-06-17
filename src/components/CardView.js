import React from 'react';
import '../App.css';
import CardBack from '../img/backs_blue.png'

class CardView extends React.Component {
  static cardBack() {
    return CardBack
  }

  render() {
    return (
      <img src={CardView.cardBack()} alt='back of a card' />
    )
  }
}

export default CardView
