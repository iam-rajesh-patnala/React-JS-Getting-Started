import { Component } from 'react';
import Clock from './components/Clock';

import './App.css';


class App extends Component {

  state = {
    showClock : false,
  }

  // toggleClock = () => {
  //   const { showClock } = this.state
  //   this.setState({ showClock : !showClock })
  // }

  toggleClock = () => {
    this.setState(prevState => {
      const { showClock } = prevState
      return { showClock : !showClock }
    })
  }
  render() {
    const { showClock } = this.state
    return (
      <div className="app-container">
        <button className='toggle-button' type='button' onClick={this.toggleClock}>
          {showClock ? 'Hide Clock' : 'Show Clock'}
        </button>
        {showClock && <Clock />}
      </div>
    )
  }
}

export default App