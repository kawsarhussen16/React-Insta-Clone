import React, { Component } from "react";
import dummyData from '../../dummy-data';
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from './PostContainer';

class PostsPage extends Component {
    constructor() {
      super();
      this.state = {
        instaData : [],
        searchResult: []
      };
    }
   /////////////////////////////////////////////////////// 
    componentDidMount() { this.setState({ instaData: dummyData })}
  ///////////////////////////////////////////////////////
  searchForPosts = e => {
      const user = this.state.instaData.filter(item => {
        if ((item.username.includes(e.target.value)) || (item.comments.includes(e.target.value))) {
          return item;
        }
      });
      this.setState({ searchResult: user});
    };
    ///////////////////////////////////////////////////////
    render(){
      return(
        <div className = 'post-page'>
          <SearchBar searchForPosts = {this.searchForPosts} />
          <PostContainer posts = {
            this.state.searchResult.length > 0 ?
            this.state.searchResult : this.state.instaData
            }
          />
        </div>

      );
    }
}



export default PostsPage;