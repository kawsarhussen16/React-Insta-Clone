import React from 'react';

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
      window.location.reload();
    };

  render(){
    return(
      <div className ='login-box'>
          <Form className ='login-form'>
              <Input 
                  type="text"
                  placeholder=" username or email"
                  name="username"
                  value={this.state.username}
                  onChange={this.handleInput}
              />
              <Input
                  type= 'password'
                  placeholder= 'Password'
                  name='password'
                  value={this.state.password}
                  onChange={this.handleInput} 
              />
              <Button onClick={this.handlePassword}>Log in</Button>
          </Form>
      </div>
    );
  }

}  

export default Login;