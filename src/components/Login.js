import React from 'react'
import PropTypes from 'prop-types'

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: ''
    }
  }

  static propTypes = {
    onLogin: PropTypes.func
  };

  onSubmit(event) {
    event.preventDefault();
    this.props.onLogin(this.state.name)
  }

  updateName(event) {
    this.setState({name: event.target.value})
  }

  render() {
    return (
      <div style={{maxWidth: 300 + 'px'}}>
        <div className='user-form'>
          <form className='form'>
            <label htmlFor="name">Name</label>
            <input onChange={(e) => this.updateName(e)} type="text" id="name" />
            <input onClick={(e) => this.onSubmit(e)} id="submit" type="submit" value="Login" />
          </form>
        </div>
        <h5><u>Instructions:</u></h5>
        <p>
        Click on a card and opposing player, and then click on the request card button to request a card.
        The bots will run automatically. Look at the game log to see all player's requests.
        </p>
      </div>
    );
  }
}

export default Login
