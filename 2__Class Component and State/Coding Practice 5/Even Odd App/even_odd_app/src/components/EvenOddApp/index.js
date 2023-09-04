// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {
    count: 0
  }

  getRandomNumber = () => Math.ceil(Math.random() * 100)

  onIncrement = () => {
    const randomNumber = this.getRandomNumber()

    this.setState(previousState => ({ count: previousState.count + randomNumber }))
  
  }    
  render() {
    const { count } = this.state
    const oddEvenStatus = count % 2 === 0 ? 'Even' : 'Odd'

    return (
      <div className="bg-container">
        <div className="counter-container">
          <h1 className="heading">Count {count}</h1>
          <p className="count-status">Count is {oddEvenStatus}</p>
            <button type="button" className="button" onClick={this.onIncrement}>
              Increment
            </button>
          <p className="info">*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
