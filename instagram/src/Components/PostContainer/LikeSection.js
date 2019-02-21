import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment } from '@fortawesome/free-solid-svg-icons';
// import '../CommentSection/Comment.css';
import styled from 'styled-components';

const LikeBar = styled.div`
      .like-wrapper{
        display: flex;
        width: 100%;
        padding: 2% 0 0 2%;
        font-size: 30px;
        .like-icon{
          padding-left: 3%;
        }
      }
      .like-counter{
        text-align: start;
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        .like{
          padding : 0 0 0 5%;
          font-weight: bold;
        }
       }

`;

const LikeSection = props => {
  return [
    <LikeBar>
      <div  className="like-section"
          key="likes-icons-container"
          onClick={props.incrementLike}
          >
          <div className="like-wrapper"> 
           <FontAwesomeIcon className= 'like-icon' icon={faHeart} />
           <FontAwesomeIcon className= 'like-icon' icon={faComment} />
          </div>
      </div>,
      <div className="like-counter" key="likes-container">
           <div className="like"> <p> {props.likes}  Likes </p>
           </div>
      </div>
    </LikeBar>
  ];
};

export default LikeSection;