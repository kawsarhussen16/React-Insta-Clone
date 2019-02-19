import React from 'react';
import './Comment.css';

const Comment = props => {
  return (
    <div>
        <p className="comment-text"><strong>{props.user}</strong> {props.text}</p>
    </div>

  );
};
export default Comment;