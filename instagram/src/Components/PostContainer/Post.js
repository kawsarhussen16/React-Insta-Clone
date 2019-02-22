import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PostHeader from './PostHeader';
import LikeSection from './LikeSection';
import PropTypes from "prop-types";
import styled from 'styled-components';

const PostBorder = styled.div`
  width: 50%;
  border: 1px solid pink;
  margin:5% 0 5% 12%;
  @media (max-width: 500px) {
        width: 100%;
        margin: 10% 0;
    } 
  .post-image-wrapper{
      display: flex;
      .post-image{
          width: 100%;
          max-height: 500px;
          @media (max-width: 500px){
            height: 400px;
            width: 385px;
          }
      }
  }
`;


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
      <PostBorder className="post-border">

          <PostHeader
            username={this.props.post.username}
            thumbnailUrl={this.props.post.thumbnailUrl}
          />
          <div className='post-image-wrapper'>
            <img className='post-image' alt='post-thumbnail' src={this.props.post.imageUrl} />
          </div>
          <div className = 'like-border'>
            <LikeSection
              likes={this.state.likes}
              incrementLike={this.incrementLike}       
            />
          </div>
          
          <CommentSection comments={this.props.post.comments} />
        
      </PostBorder>
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