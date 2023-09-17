import { Component } from 'react';
import SuggestionItem from '../SuggestionItem';
import './index.css'

class GoogleSuggestions extends Component {

  state = {
    searchInput: "",
  }

  onSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  updateSearchInputField = (value) => {
    this.setState({searchInput: value})
  }
  render() {
    const { suggestionsList } = this.props
    const { searchInput } = this.state
    const suggestionResult = suggestionsList.filter(eachItem => eachItem.suggestion.toLowerCase().includes(searchInput.toLowerCase()))
    
    return (
      <div className="app-background-container">
        <div className='google-suggestions-container'>
          <img src="https://assets.ccbp.in/frontend/react-js/google-logo.png " alt='google logo' className='google-logo' />
          <div className='search-container'>
            <div className='search-box'>
              <img src='https://assets.ccbp.in/frontend/react-js/google-search-icon.png' alt='search icon' className='search-icon'/>
              <input type='search' className='search-input' placeholder='Search Google' onChange={this.onSearchInput} value={searchInput}/>
            </div>
            <ul className='suggestion-list'>
              {suggestionResult.map(eachItem => (
                <SuggestionItem key={eachItem.id} eachItem={eachItem} updateSearchInputField={this.updateSearchInputField} />))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions