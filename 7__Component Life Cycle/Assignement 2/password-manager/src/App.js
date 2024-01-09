import { Component } from 'react';
import { v4 as v4uuid } from 'uuid';

import './App.css';


const colorList = ['red', 'yellow', 'green', 'blue', 'orange', 'purple', 'pink', 'brown', 'gray', 'black', 'dark-yellow', 'violet', 'cyan', 'magenta', 'silver', 'gold']

class App extends Component {
  state = {
    isTrue : false,
    latestList: [],
    websiteURL: '',
    userName: '',
    password: '',
    isShowPassword: false,
  }

  addDetails = event => {
    event.preventDefault()
    const { websiteURL, userName, password } = this.state
    const initial = websiteURL.slice(0, 1).toUpperCase()
    const bgColorClassValue = colorList[Math.floor(Math.random() * colorList.length)]
    
    const newDetails = {
      id: v4uuid(),
      initialLetter: initial,
      bgColorClassValue: bgColorClassValue,
      websiteURLValue: websiteURL,
      userNameValue: userName,
      passwordValue: password,
    }

    this.setState(prevState => ({
      latestList: [...prevState.latestList, newDetails],
      websiteURL: '',
      userName: '',
      password: '',
      isTrue: true,
      searchInput: '',
    }))
  }

  onChangeWebsiteInput = event => {
    this.setState({websiteURL: event.target.value})
  }

  onChangeUsernameInput = event => { 
    this.setState({ userName: event.target.value })
  }

  onChangePasswordInput = event => { 
    this.setState({ password: event.target.value })
  }

  onChangeSearchInput = event => {
    this.setState({ searchInput: event.target.value })
  }

  onChangeShowPasswordCheckBox = event => {
    if (event.target.checked) {
      this.setState({ isShowPassword: true })
    } else {
      this.setState({ isShowPassword: false })
    }
  }

  deleteItem = id => {
    const { latestList } = this.state
    const newList = latestList.filter(eachItem => (
      eachItem.id !== id
    ))
    const listEmpty = newList.length !== 0
    this.setState({latestList: newList, isTrue: listEmpty})
  }

  render() {
    const {latestList, websiteURL, userName, password, isShowPassword, searchInput } = this.state
    let { isTrue } = this.state

    const newList = latestList.filter(eachItem => eachItem.websiteURLValue.toLowerCase().includes(searchInput.toLowerCase()));

    if(newList.length === 0) {
      isTrue = false
    } else {
      isTrue = true
    }


    return (
      <div className='main-container'>
        <img src='https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png' alt='app logo' className='app-logo' />

        {/* --------------------- Container - 1 ----------------------- */}
        <div className='sub-container1'>
          <img src='https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png' alt='password manager' className='password-manager-img-sm' />
          
          <form className='add-details-form' onSubmit={this.addDetails}>
            <h1 className='heading'>Add New Password</h1>
            {/* ------------------- */}
            <div className='website-input-container'>
              <img src='https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png' alt='website' className='website-icon'/>
              <input type='text' placeholder='Enter Website' className='website-input' onChange={this.onChangeWebsiteInput} value={websiteURL}/>
            </div>
            {/* ------------------- */}            
            <div className='username-input-container'>
              <img src='https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png' alt='username' className='username-icon'/>
              <input type='text' placeholder='Enter Username' className='username-input' onChange={this.onChangeUsernameInput} value={userName}/>
            </div>
            {/* ------------------- */}
            <div className='password-input-container'>
              <img src='https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png' alt='password' className='password-icon'/>
              <input type='password' placeholder='Enter Password' className='password-input' onChange={this.onChangePasswordInput} value={password}/>
            </div>
            {/* ------------------- */}
            <button type='submit' className='submit-button'> Add </button>
          </form>

          <img src='https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png' className='password-manager-img-lg' alt='password manager'/>
        </div>

        {/* --------------------- Container - 2 ----------------------- */}
        <div className='sub-container2'>
          <div className='password-manager-container'>

            <div className='top-password-container'>
              <h1 className='yours-passwords-heading'>Your Passwords</h1>
              <p className='passwords-count'>{newList.length}</p>
            </div>

            <div className='search-input-container'>
              <img src='https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png' className='search-icon' alt='search'/>
              <input type='search' placeholder='Search' className='search-input' onChange={this.onChangeSearchInput} value={searchInput}/>
            </div>

          </div>
          <hr />
          {/* ------------------- Password Toggle Section Starts---------------- */}
          <div className='password-show-container'>
            <input type='checkbox' className='check-box' id='checkBox' onChange={this.onChangeShowPasswordCheckBox} />
            <label className='show-password-label' htmlFor='checkBox'>Show Passwords</label>
          </div>
          {/* ------------------- Password Toggle Section Ends---------------- */}

          {!isTrue && (
            <div className='empty-state'>
              <img src='https://assets.ccbp.in/frontend/react-js/no-passwords-img.png' alt='no passwords' className='no-passwords-img'/>
              <p className='no-passwords'>No Passwords</p>
            </div>
          )}

          {isTrue && (
            <ul className='password-list-result'>
              {newList.map(eachItem => (
                <li className='item-list' id={eachItem.id} key={eachItem.id}>
                  <p className={`initial ${eachItem.bgColorClassValue}`}> {eachItem.initialLetter}</p>
                  <div className='list-content'>
                    <p className='website'>{eachItem.websiteURLValue}</p>
                    <p className='website'>{eachItem.userNameValue}</p>
                    {!isShowPassword && (
                      <img src='https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png' className='stars' alt='stars'/>
                    )}
                    {isShowPassword && (
                      <p className='website'>{eachItem.passwordValue}</p>
                    )}
                  </div>
                  <button type='button' className='delete-button' onClick={() => this.deleteItem(eachItem.id)} data-testid = 'delete'>
                    <img src='https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png' className='delete-icon' alt='delete'/>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default App;