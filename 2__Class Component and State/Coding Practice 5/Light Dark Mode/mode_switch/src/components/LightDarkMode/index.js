import { Component } from 'react'
import './style.css'

class LightDarkMode extends Component {
  state = {
    isLightMode: false,
  }

  changeMode = () => {
    this.setState(prevState => ({ isLightMode: !prevState.isLightMode }))
  }
  
  render() {
    const { isLightMode } = this.state
    const mode = isLightMode ? 'lightmode' : 'darkmode'
    const modeText = isLightMode ? 'Dark Mode' : 'Light Mode'

    return (
      <div className='bg-container'>
        <div className={`card-container ${mode}`}>
          <h1 className='title'>Click To Change Mode</h1>
            <button className='button' type='button' onClick={this.changeMode}>{modeText}</button>
        </div>
      </div>
    )
  }
}


export default LightDarkMode