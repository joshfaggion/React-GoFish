import React from 'react';
import './App.css';
import Login from './components/Login.js'
import GameView from './components/GameView'
import EndGame from './components/EndGame'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      game: 'login'
    }
  }

  onLogin(name) {
    this.setState({game: 'game', name: name})
  }

  render() {
    if (this.state.game === 'login') {
      return (
        <Login onLogin={this.onLogin.bind(this)} />
      );
    } else if (this.state.game === 'game') {
      return (
        <GameView name={this.state.name} />
      );
    } else {
      return (
        <EndGame onLogin={this.onLogin.bind(this)} />
      );
    }
  }
}

export default App;
