import { Component } from 'react'
import './index.css'

class ClickCounter extends Component{
  state = {
    count: 0
  }

  onCount = () => {
    // Using object as argument-------------
    // this.setState({count : this.state.count + 1})

    // Using callback function as argument------------
    this.setState((prevState) => {
      return {count: prevState.count + 1}
    })
  }


  render() {
    const {count} = this.state
    return (
      <div className='container'>
        <div className='content'>
          <h1 className='heading'>The Button has been clicked <span>{count}</span> times</h1>
          <p className='description'>Click the button to increase the count!</p>
          <button className='button' onClick={this.onCount} >Click Me!</button>
        </div>
      </div>
    )
  }
}

export default ClickCounter