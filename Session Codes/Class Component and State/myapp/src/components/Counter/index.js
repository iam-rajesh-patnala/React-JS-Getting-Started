import { Component } from 'react'
import './index.css'

class Counter extends Component {
  state = { count : 0 }

  onIncrement = () => {

    // Using Object As Argument
    // this.setState({ count: this.state.count + 1 })

    // Using Callback Function As argument
    this.setState((prevState) => { 
      console.log(`Previous Count: ${this.state.count}`);
      return {count : prevState.count + 1}
    })
  }

  onDecrement = () => {
    // Using Object As Argument
    this.setState({ count : this.state.count - 1})
  }

  render() {
    const { count } = this.state
    return (
      <div className = "container">
        <h1 className='heading'>Counter</h1>
        <p className='count'>{ count }</p>
        <div>
          <button className='button' onClick = {this.onIncrement}>Increase</button>
          <button className='button' onClick={this.onDecrement}>Decrease</button>
        </div>
      </div>
    )
  }
}

export default Counter