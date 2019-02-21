import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment } from '@fortawesome/free-solid-svg-icons';
import '../CommentSection/Comment.css';
const LikeSection = props => {
  return [
    <div
      className="like-section"
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
  ];
};

export default LikeSection;