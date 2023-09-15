import {Component} from 'react'
import DestinationItem from '../DestinationItem'
import './index.css';

class DestinationSearch extends Component {
  state = {
    searchInput: ""
  };

  onSearchInput = event => {
    this.setState({searchInput: event.target.value});
  }

  render() {
    const { searchInput } = this.state
    const { destinationsList } = this.props
    const searchResults = destinationsList.filter(eachDestination => eachDestination.name.toLowerCase().includes(searchInput.toLowerCase()));

    return (
      <div className="app-container">
        <div className='destination-container'>
          <h1 className="heading">Destination Search</h1>
          <div className='search-container'>
            <input type="search" className="search-input" onChange={this.onSearchInput} placeholder='Search' value={searchInput}/>
            <img src='https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png' alt='search icon' className='search-icon'/>
          </div>

          <ul className='destination-list'>
            {searchResults.map(destination => (<DestinationItem destinationDetails={destination} key={destination.id} />
            ))}
          </ul>

        </div>
      </div>
    )
  }
}

export default DestinationSearch