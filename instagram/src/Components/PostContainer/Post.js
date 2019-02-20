import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PostHeader from './PostHeader';
import './Post.css';
import LikeSection from './LikeSection';
import PropTypes from "prop-types";

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: props.post.likes
    };
  }
  incrementLike = () => {
    this.setState({ likes: this.state.likes +1 });
  };
  
  render(){
    return(
        <div className="post-border">
        <PostHeader
          username={this.props.post.username}
          thumbnailUrl={this.props.post.thumbnailUrl}
        />
        <div className='post-image-wrapper'>
          <img className='post-image' alt='post-thumbnail' src={this.props.post.imageUrl} />
        </div>
        <LikeSection
          likes={this.state.likes}
          incrementLike={this.incrementLike}   
        />
        <CommentSection comments={this.props.post.comments} />
      </div>
    );
    }
  }

  Post.propTypes = {
    post: PropTypes.shape({
      username: PropTypes.string,
      thumbnailUrl: PropTypes.string,
      imageUrl: PropTypes.string
    })
  };
export default Post;