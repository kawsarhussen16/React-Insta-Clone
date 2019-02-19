import React from 'react';
import Comment from './Comment';
import './Comment.css';
class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments
    };
  }
  render() {
    return (
      <div className= 'comment-sec'>
        {this.state.comments.map( (c, i) => <Comment key={i} user={c.username} text={c.text} /> )}
      </div>
    );
  }
}
export default CommentSection;