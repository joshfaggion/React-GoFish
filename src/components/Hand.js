import React from 'react';
import '../App.css';
import PropTypes from 'prop-types'
import CardView from './CardView'

class Hand extends React.Component {
  static propTypes = {
    cards: PropTypes.array.isRequired,
    playerOrBot: PropTypes.string.isRequired
  };

  render() {
    if (this.props.playerOrBot === 'bot') {
      return (
        <div className='hand'>
          {this.props.cards.map((card, index) => <CardView key={index} src={CardView.cardBack()} alt='the back of a card' />)}
        </div>
      )
    } else {
      return (
      <div className='hand'>
        {this.props.cards.map((card) => <img src={require('../img/c10.png')} alt='the back of a card' />)}
      </div>
      )
    }
  }
}

export default Hand;

//<img key={index} src={CardView.cardBack()} alt='the back of a card' />
