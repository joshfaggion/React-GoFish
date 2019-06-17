import React from 'react';
import '../App.css';

class EndGame extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      game: props.game
    }
  }

  render() {
    return <h1>This is the EndGame component!</h1>
  }
}

export default EndGame;
