import React, { Component } from "react";
import "./App.css";
import PostsPage from './Components/PostContainer/PostsPage.js';
import permissionCheck from './Components/Permission/PermissionCheck.js';
import Login from './Components/Login/Login.js';
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
