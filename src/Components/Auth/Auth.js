import React, { Component } from 'react'
import axios from 'axios'

export class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }

  }

  register = async () => {
    const { username, password } = this.state
    const res = await axios.post('/api/register', { username, password })
    if (res.data.loggedIn) this.props.history.push('/dashboard')
    else alert('Registration failed')
  }
  
  login = async () => {
    const { username, password } = this.state
    const res = await axios.post('/api/login', { username, password })
    if (res.data.loggedIn) this.props.history.push('/dashboard')
    else alert('Login failed')
  }  
  
  render() {
    return (
      <div>
        Username: <input onChange={(e) => this.setState({ username: e.target.value})} value={this.state.username} type="text" />
        Password: <input onChange={(e) => this.setState({ password: e.target.value})} value={this.state.password} type="text" />

        <button onClick={this.login}>Login</button>
        <button onClick={this.register}>Register</button>
      </div>
    )
  }
}

export default Auth
