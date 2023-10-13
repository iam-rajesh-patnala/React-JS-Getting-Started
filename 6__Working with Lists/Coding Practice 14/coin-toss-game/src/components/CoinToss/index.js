import { Component } from 'react';
import './index.css';



const HEADS_IMG_URL = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const TAILS_IMG_URL = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'


class CoinToss extends Component{
  state = {
    img: HEADS_IMG_URL,
    heads: 0,
    tails: 0,
  }

  onClickTossCoin = () => {
    const { heads, tails } = this.state
    const tossCoin = Math.floor(Math.random() * 2)

    let tossImage = ''
    let latestHeadsCount = heads
    let latestTailsCount = tails

    if (tossCoin === 0) {
      tossImage = HEADS_IMG_URL
      latestHeadsCount = heads + 1

    } else {
      tossImage = TAILS_IMG_URL
      latestTailsCount = tails + 1
    }
    this.setState({ img: tossImage, heads: latestHeadsCount, tails: latestTailsCount })
  }
  render() {
    const { img, heads, tails } = this.state
    const total = heads + tails

    return (
      <div className='bg-container'>
        <div className='card-container'>
          <h1 className='heading'>Coin Toss Game</h1>
          <p className='description'>Heads (or) Tails</p>
          <img src={img} alt='toss result' className='toss-result-img' />
          <button type='button' className='toss-btn' onClick={this.onClickTossCoin}>Toss Coin</button>
          <div className='score-container'>
            <p className='score'>{`Total ${total}`}</p>
            <p className='score'>{`Heads: ${heads}`}</p>
            <p className='score'>{`Tails: ${tails}`}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss