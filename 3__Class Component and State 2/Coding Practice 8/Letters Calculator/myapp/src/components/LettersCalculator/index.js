import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = { inputPhrase: '' }
  
  onChangeInput = event => {
    const { value } = event.target
    this.setState({inputPhrase: value})
  }
  render() {
    const { inputPhrase } = this.state

    return (
      <div className='bg-container'>
        <div className='letters-calculate-container'>
          <div className='calculator-container'>
            <h1 className='heading'>Calculate the Letters you enter</h1>
              <div className='input-container'>
                  <label className='label' htmlFor='phrase'>Enter the phrase</label>
                  <input type='text' id='phrase' className='input' placeholder='Enter the phrase' onChange={this.onChangeInput} value={inputPhrase}/>
              </div>
              <p className='result'>No.of letters: {inputPhrase.length}</p>
          </div>
          <img src='https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png' alt='letters calculator' className='calculator-image'/>
        </div>
      </div>
    )
  }
}

export default LettersCalculator