import React from 'react';
import Comment from './Comment';
import './Comment.css';
import PropTypes from 'prop-types';
import CommentInput from "./CommentInput";

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
      comment: " "
    };
  }

  commentHandler = e => {
    this.setState({ comment: e.target.value });
  };

  addNewComment = e => {
    e.preventDefault();
    if (this.state.comment.length > 0) {
      const newComment = { text: this.state.comment, username: "Md" }; // make object to add
      const comments = this.state.comments; // make copy of state object to update
      comments.push(newComment); // add newComment object to the state array
      this.setState({ comments: comments, comment: "" }); // update State and blank out the state comment field
    }
  };

  render() {
    return (
      <div className='comment-sec'>
        {this.state.comments.map((c, i) => <Comment key={i} comment={c} />)}
        <div className='comment-input'>
          <CommentInput
            className='comment-border'
            comment={this.state.comment}
            submitComment={this.addNewComment}
            changeComment={this.commentHandler}
          />
        </div>
      </div>
    );
  }
}

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({ text: PropTypes.string, username: PropTypes.string })
  )
};
export default CommentSection;