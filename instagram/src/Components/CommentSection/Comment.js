import React from 'react';
import './Comment.css';
import PropTypes from 'prop-types';

const Comment = props => {
  return (
    <div className = 'comment-sec'>
        <p className="comment-text"><strong>{props.comment.username}</strong> {props.comment.text}</p>
        { ''}
    </div>

  );
};

Comment.propTypes = {
  comment: PropTypes.shape({
    text: PropTypes.string,
    username: PropTypes.string
  })
};
export default Comment;