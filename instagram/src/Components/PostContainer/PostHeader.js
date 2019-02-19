import React from 'react';
import './Comment.css';

const PostHeader = props => {
  return (
    <div className="post-header">
      <div className="post-thumb-wrapper">
        <img
          alt="post header"
          className="post-thumb"
          src={props.thumbnailUrl}
        />
      </div>
      <div className= 'user-name'>{props.username}</div>
    </div>
  );
};

export default PostHeader;