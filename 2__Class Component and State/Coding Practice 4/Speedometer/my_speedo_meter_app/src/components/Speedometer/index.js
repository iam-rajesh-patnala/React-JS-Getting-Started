import { Component } from 'react'
import './index.css'

class Speedometer extends Component {
  state = { speed: 0 }

  onAccelerate = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(prevState => ({ speed: prevState.speed + 10 }))
    }
  }

  onBrake = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(prevState => ({ speed: prevState.speed - 10 }))
    }
  }

  render() {
    const { speed } = this.state
    return (
      <div className='container'>
        <div className='speedometer-container'>
          <h1 className='heading'>Speedometer</h1>
          <img className='img' alt='speedometer' src='https://assets.ccbp.in/frontend/react-js/speedometer-img.png'/>
          <h1 className='sub-heading'>Speed is {speed}mph</h1>
          <p className='description'>Min Limit is 0mph, Max Limit is 200mph</p>
          <div className='buttons-container'>
            <button type='button' className='accelerate button' onClick={this.onAccelerate }>Accelerate</button>
            <button type='button' className='apply-break button' onClick={this.onBrake }>Apply Brake</button>
          </div>
        </div>

      </div>
    )
  }
}

export default Speedometer