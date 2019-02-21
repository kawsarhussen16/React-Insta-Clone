import React from 'react';

const CommentInput = props => {
  return (
    <form className= 'comment-border' onSubmit={props.submitComment}>
      <input
      className= 'input-border'
        type="text"
        placeholder=" Add comment... "
        value={props.comment}
        onChange={props.changeComment}
      />
    </form>
  );
};

export default CommentInput;