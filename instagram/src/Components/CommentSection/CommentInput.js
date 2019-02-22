import React from 'react';
import styled from 'styled-components';

const InputBar = styled.div`
    display: flex;
    margin: 10px;
    .input-border{
    height: 40px;
    width: 300px;
    border: 1px solid pink;
    padding: 2%;
    margin-left: 0px;
    }
`;
const CommentInput = props => {
  return (
    <InputBar>
        <form className= 'comment-border' onSubmit={props.submitComment}>
              <input
                className= 'input-border'
                type="text"
                placeholder=" Add comment... "
                value={props.comment}
                onChange={props.changeComment}
              />
        </form>
    </InputBar>
  );
};

export default CommentInput;