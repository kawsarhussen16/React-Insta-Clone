import React from 'react';
import './Login.css';

class Login extends React.Component {
  constructor() {
      super();
      this.state = {
          username: '',
          password: ''
      }
  }
  handleInput = event => {
    this.setState({ [event.target.name]: event.target.value })
  };
  handlePassword = e => {
      localStorage.setItem('user', this.state.username);
      localStorage.setItem('password', this.state.password);
      window.location.reload();
    };
  render(){
    return(
      <div className ='login-box'>
          <form className ='login-form'>
              <h1> Instagram</h1>
              <input 
                  className ='input-form'
                  type="text"
                  placeholder="Phone number, username or email"
                  name="username"
                  value={this.state.username}
                  onChange={this.handleInput}
              />
              <input
                  className ='input-form'
                  type= 'password'
                  placeholder= 'Password'
                  name='password'
                  value={this.state.password}
                  onChange={this.handleInput} 
              />
              
              <button onClick={this.handlePassword}>Log in</button>
              <span className= 'textp'> <p> Don't have and account ? <strong>Sign up</strong></p></span>
          </form>
      </div>
    );
  }

}  

export default Login;