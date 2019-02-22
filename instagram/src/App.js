import React, { Component } from "react";
import PostsPage from './components/PostContainer/PostsPage';
import permissionCheck from './components/Permission/permissionCheck';
import Login from './components/Login/Login';
import styled from 'styled-components';

const AppBar = styled.div`
     text-align: center;
`;

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <AppBar className="App">

            < WithPermissionCheck />

      </AppBar>
    );
  }
}

const WithPermissionCheck = permissionCheck(PostsPage)(Login);
export default App;
