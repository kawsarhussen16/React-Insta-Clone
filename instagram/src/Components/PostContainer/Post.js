import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PostHeader from './PostHeader';
import './Post.css';

const Post = (props) =>{
    return(
        <div className="post-border">
        <PostHeader
          username={props.post.username}
          thumbnailUrl={props.post.thumbnailUrl}
        />
        <div className='post-image-wrapper'>
          <img className='post-image' alt='post thumbnail' src={props.post.imageUrl} />
        </div>
        <CommentSection comments={props.post.comments} />
      </div>
    );
  };
export default Post;