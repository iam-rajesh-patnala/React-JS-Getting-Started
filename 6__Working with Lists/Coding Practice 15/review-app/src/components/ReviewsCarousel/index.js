import { Component } from 'react';
import './index.css';


const leftArrow = "https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
const rightArrow = "https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"

class ReviewsCarousel extends Component {

  state = {
    activeReviewIndex : 0
  }

  onClickLeftArrow = () => {
    const { activeReviewIndex } = this.state

    if (activeReviewIndex > 0) {
      this.setState(prevState => ({
        activeReviewIndex: prevState.activeReviewIndex - 1
      }))
    }
  }

  onClickRightArrow = () => {
    const { activeReviewIndex } = this.state
    const { reviewsList } = this.props
    
    if (activeReviewIndex < reviewsList.length - 1) {
      this.setState(prevState => ({
        activeReviewIndex: prevState.activeReviewIndex + 1
      }))
    }
  }

      renderActiveReview = review => {
        const { imgUrl, username, companyName, description } = review
        return (
          <div className='review-container'>
            <img src={imgUrl} alt={username} />
            <p className='user-name'>{username}</p>
            <p className='company-name'>{companyName}</p>
            <p className='description'>{description}</p>
          </div>
        )
      }

      render() {
        const { reviewsList } = this.props
        const { activeReviewIndex } = this.state
        const currentReviewDetails = reviewsList[activeReviewIndex]

        return (
          <div className='bg-container'>
            <h1 className='heading'>Reviews</h1>
            <div className='carousel-container'>
              <button
                className='arrow-button'
                type='button'
                onClick={this.onClickLeftArrow}
                testid='leftArrow'>
                <img src={leftArrow} alt='left arrow' />
              </button>
              {this.renderActiveReview(currentReviewDetails)}
              <button className='arrow-button'
                type='button'
                onClick={this.onClickRightArrow}
                testid='rightArrow'>
                <img src={rightArrow} alt='right arrow' />
              </button>
            </div>
          </div>
        )
      }
    }

export default ReviewsCarousel