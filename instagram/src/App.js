import React, { Component } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import PostContainer from './components/PostContainer/PostContainer';
import dummyData from './dummy-data';

class App extends Component {
  constructor() {
    super();
    this.state = {
      instaData : [],
      searchResult: []
    };
  }
  componentDidMount() {
    this.setState({
      instaData: dummyData
    })
  }
  searchPostsHandler = e => {
    const user = this.state.instaData.filter(item => {
      if (item.username.includes(e.target.value)) {
        return item;
      }
    });
    this.setState({ 
      searchResult: user 
    });
  };

  render() {
    return (
      <div className="App">
      <SearchBar 
          search = {this.state.search}
          searchPosts ={this.searchPostHandler}
       />
      <PostContainer posts = {
        this.state.searchResult.length > 0 ?
        this.state.searchResult : this.state.instaData
        }
        addLike = {this.state.incrementLike}
        />
      </div>
    )};
}

export default App;
