import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CommentBar = styled.div`
    text-align: start;
    margin-left: 1rem;
`;

const Comment = props => {
  return (
    <CommentBar className = 'comment-sec'>
        <p className="comment-text"><strong>{props.comment.username}</strong> {props.comment.text}</p>
        { ''}
    </CommentBar>

  );
};

Comment.propTypes = {
  comment: PropTypes.shape({
    text: PropTypes.string,
    username: PropTypes.string
  })
};
export default Comment;