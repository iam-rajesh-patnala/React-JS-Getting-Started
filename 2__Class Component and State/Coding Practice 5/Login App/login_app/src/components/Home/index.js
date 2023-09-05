import { Component } from 'react'

import Login from '../Login'
import Logout from '../Logout'
import Message from '../Message'

import './index.css'


class Home extends Component {
  state = {
    isLogin : false
  }

  onClickButton = () => {
    // this.setState(previousState => ({ isLogin: !previousState.isLogin }))
    this.setState({ isLogin: !this.state.isLogin})
  }

  render() {
    const { isLogin } = this.state

    return (
      <div className='bg-container'>
        <div className='form-container'>
          <Message isLoggedIn={isLogin} />
          {isLogin ? (<Logout logout={this.onClickButton}/>) : (<Login login={this.onClickButton}/>)}
        </div>
      </div>
    )
  }
}

export default Home