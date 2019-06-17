import React from 'react';
import './App.css';
import Login from './components/Login.js'
import GameView from './components/GameView'
import EndGame from './components/EndGame'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      currentView: 'login',
      game: ''
    }
  }

  onLogin(name) {
    this.setState({currentView: 'game', name: name})
  }

  onEndGame(game) {
    this.setState({currentView: 'endGame', game: game})
  }

  render() {
    if (this.state.currentView === 'login') {
      return (
        <Login onLogin={this.onLogin.bind(this)} />
      );
    } else if (this.state.currentView === 'game') {
      return (
        <GameView onEndGame={this.onEndGame.bind(this)} name={this.state.name} />
      );
    } else {
      return (
        <EndGame game={this.state.game}/>
      );
    }
  }
}

export default App;
