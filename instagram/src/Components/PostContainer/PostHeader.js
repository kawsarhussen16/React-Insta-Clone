import React from 'react';
import styled from 'styled-components';

const HeaderBar = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    font-weight: bold;
    .post-thumb{
      margin: 15% 30%;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      padding-left: 5%;
    }
    .user-name{
      margin-left: 2%;
      text-align: center;
      padding: 1.5%;
    }
`;
const PostHeader = props => {
  return (
    <HeaderBar className="post-header">
      <div className="post-thumb-wrapper">
        <img
          alt="post header"
          className="post-thumb"
          src={props.thumbnailUrl}
        />
      </div>
      <div className= 'user-name'>{props.username}</div>
    </HeaderBar>
  );
};

export default PostHeader;