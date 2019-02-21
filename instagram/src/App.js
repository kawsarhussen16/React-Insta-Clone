import React, { Component } from "react";
import "./App.css";
import PostsPage from './components/PostContainer/PostsPage';
import permissionCheck from './components/Permission/permissionCheck';
import Login from './components/Login/Login';
class App extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="App">

            < WithPermissionCheck />

      </div>
    );
  }
}

const WithPermissionCheck = permissionCheck(PostsPage)(Login);
export default App;
