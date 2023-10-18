import { Component } from 'react';
import CommentItem from '../CommentItem';
import { v4 as uuidv4 } from 'uuid';
import './index.css';


const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  state = {
    nameInput: '',
    commentInput: '',
    commentsList: [],
  }

  addComment = event => { 
    event.preventDefault();
    const { nameInput, commentInput } = this.state
    const randomInitialBackgroundColor = `initial-container ${
      initialContainerBackgroundClassNames[Math.ceil(Math.random() * initialContainerBackgroundClassNames.length - 1)]
      }`
    const newComment = {
      id: uuidv4(),
      name: nameInput,
      comment: commentInput,
      date: new Date(),
      isLiked: false,
      initialBackgroundColor: randomInitialBackgroundColor,
    }

    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      nameInput: '',
      commentInput: '',
    }))
  }

  onChangeNameInput = event => {
    this.setState({ nameInput: event.target.value })
  }

  onChangeCommentInput = event => { 
    this.setState({ commentInput: event.target.value })
  }

  toggleIsLiked = id => {
    this.setState(prevState => (
      {
        commentsList: prevState.commentsList.map(eachComment => {
          if (id === eachComment.id) { 
            return { ...eachComment, isLiked: !eachComment.isLiked }
          }
          return eachComment
        }),
      }
    ))
  }

  deleteComment = id => {
    const { commentsList } = this.state
  
    this.setState({
      commentsList: commentsList.filter(eachComment => eachComment.id !== id)
    })
  }

  renderCommentsList = () => { 
    const { commentsList } = this.state;
    return commentsList.map(eachComment => (
      <CommentItem key={eachComment.id}
        commentDetails={eachComment}
        toggleIsLiked={this.toggleIsLiked}
        deleteComment = {this.deleteComment}
      />
    ))
  }

  render() { 
    const { nameInput, commentInput, commentsList } = this.state;
    return (
      <div className="bg-container">
        <div className='main-container'>
          <h1 className='heading'>Comments</h1>
            <div className='input-container'>
              <form className='form' onSubmit={this.addComment}>
                <p className='form-description'>Say something about 4.0 Technologies</p>
                <input type='text'
                  className='name-input'
                  placeholder='Your Name'
                  value={nameInput}
                  onChange={this.onChangeNameInput}
                />

                <textarea
                  placeholder='Your Comment'
                  className='comment-input'
                  value={commentInput}
                  onChange={this.onChangeCommentInput}
                  rows="6"
                />

                <button type='submit' className='submit-btn'>
                  Add Comment
                </button>
              </form>
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              className='image'
              alt='comments' />
            </div>
            <hr className='line' />
            <p className='comment-count'>
              <span className='comments-count'>{commentsList.length}</span>
              Comments
            </p>
            <ul className='comments-list'>{this.renderCommentsList()}</ul>
        </div>
      </div>
    )
  }
}

export default Comments;