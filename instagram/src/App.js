import React from "react";
import "./App.css";
import PostsPage from './Components/PostContainer/PostsPage.js';
import Login from './Components/Login/Login.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      permission: false,
    }
  }
  componentDidMount() {
    if (localStorage.getItem('user') === 'md') {
      this.setState({ permission: true });
    }
  }
  render() {
    if (this.state.permission) {
      return <PostsPage />
    }
    return <Login />
  }
}


export default App;
