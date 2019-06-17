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
      <form className="user-form">
        <label htmlFor="name">Name</label>
        <input onChange={(e) => this.updateName(e)} type="text" id="name" />
        <input onClick={(e) => this.onSubmit(e)} id="submit" type="submit" value="Login" />
      </form>
    );
  }
}

export default Login
