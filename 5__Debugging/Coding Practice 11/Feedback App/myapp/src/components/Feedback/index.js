import { Component } from 'react';
import './index.css'

class Feedback extends Component {
  state = {
    feedbackSelected: false
  }

  onClickEmoji = () => {
    this.setState({ feedbackSelected: true })
  }

  renderFeedbackQuestion = () => {
    const { resources } = this.props
    const { emojis } = resources

    return (
      <div className='feedback-container'>
        <h1 className='feedback-heading'>How satisfied are you with our customer support performance?</h1>
        <ul className='emoji-list'>
          {emojis.map(emoji => (
            <li key={emoji.id}>
              <button type='button'
                className='emoji-btn'
                onClick={this.onClickEmoji}
              >
                <img src={emoji.imageUrl} alt={emoji.name} className='emoji-img' />
                <br />
                <span className='emoji-name'>{emoji.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  renderThankYouScreen = () => {
    const { resources } = this.props
    const { loveEmojiUrl } = resources
    return (
      <div className='thank-you-container'>
        <img src={loveEmojiUrl} alt='love emoji' className='love-emoji-img'/>
        <h1 className='thank-you-heading'>Thank You!</h1>
        <p className='thank-you-para'>We will use your feedback to improve our customer support performance.</p>
      </div>
    )
  }

  render() {
    const { feedbackSelected } = this.state

    return (
      <div className='bg-container'>
        <div className='feedback-card'>
          {feedbackSelected ?  this.renderThankYouScreen():this.renderFeedbackQuestion()}
        </div>
      </div>
    )
  }

}

export default Feedback