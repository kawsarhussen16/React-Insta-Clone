import React from 'react';
import './Comment.css';

const Comment = props => {
  return (
    <div className = 'comment-sec'>
        <p className="comment-text"><strong>{props.user}</strong> {props.text}</p>
    </div>

  );
};
export default Comment;