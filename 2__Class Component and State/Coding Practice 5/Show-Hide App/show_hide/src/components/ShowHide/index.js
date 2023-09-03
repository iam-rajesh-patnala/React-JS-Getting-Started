import { Component } from 'react';
import './index.css';

class ShowHide extends Component{
  state = {
    firstNameShow: false,
    lastNameShow : false
  }

  toggleFirstName = () => {
    this.setState(prevState => ({ firstNameShow: !prevState.firstNameShow }))
  }

  toggleLastName = () => {
    this.setState(prevState => ({ lastNameShow: !prevState.lastNameShow }))
  }

  render() {

    const { firstNameShow, lastNameShow } = this.state

    return (
      <div className='bg-container'>
        <h1 className='heading'>Show/Hide</h1>
          <div className='cards-container'>

            <div className='name-container'>
            <button className='button' type='button' onClick={this.toggleFirstName}>Show/Hide Firstname</button>
            {firstNameShow && <p className='name'>Joe</p>}
            </div>

            <div className='name-container'>
              <button className='button' type='button' onClick={this.toggleLastName}>Show/Hide Lastname</button>
              {lastNameShow && <p className='name'>Jonas</p>}
            </div>

          </div>
      </div>
    )
  }
}


export default ShowHide