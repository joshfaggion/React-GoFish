import React from 'react';
import '../App.css';

class EndGame extends React.Component {
  constructor(game) {
    super(game)
    this.state = {
      game: ''
    }
  }

  render() {
    return <h1>This is the EndGame component!</h1>
  }
}

export default EndGame;
