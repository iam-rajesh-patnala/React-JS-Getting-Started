import { Component } from 'react'
import './index.css'

class FruitsCounter extends Component {

  state = {
    mangoes: 0,
    bananas: 0
  }

  eatMango = () => {
    this.setState(previousState => ({ mangoes: previousState.mangoes + 1 }))
  }

  eatBanana = () => { 
    this.setState(previousState => ({ bananas: previousState.bananas + 1 }))
  }

  render() {
    const { mangoes, bananas } = this.state
    return (
      <div className='bg-container'>
        <div className='fruits-container'>
          <h1 className='heading'>Bob ate <span>{mangoes} </span>mangoes <span>{bananas} </span>bananas</h1>
          <div className='fruits-container-items'>
            <div className='counter-container'>
              <img src='https://assets.ccbp.in/frontend/react-js/mango-img.png' className='fruits-img' alt='mango' />
              <div className='button-container'>
                <button type='button' className='button' onClick={this.eatMango}>Eat Mango</button>
              </div>
            </div>
            <div className='counter-container'>
              <img src='https://assets.ccbp.in/frontend/react-js/banana-img.png' className='fruits-img' alt='banana' />
              <div className='button-container'>        
                <button type='button' className='button' onClick={this.eatBanana}>Eat Banana</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter