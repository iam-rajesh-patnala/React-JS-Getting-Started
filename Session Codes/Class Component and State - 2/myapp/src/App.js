import { Component } from 'react'
import UserProfile from './components/UserProfile'
import './App.css'


const initialUsersDetailsList = [
    {
    uniqueNo: 1,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Esther Howard',
    role: 'Software Developer',
  },
  {
    uniqueNo: 2,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'Floyd Miles',
    role: 'Software Developer',
  },
  {
    uniqueNo: 3,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'Jacob Jones',
    role: 'Software Developer',
  },
  {
    uniqueNo: 4,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
    name: 'Devon Lane',
    role: 'Software Developer',
  },
    {
    uniqueNo: 5,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
    name: 'Rajesh Patnala',
    role: 'Software Developer',
  },
  {
    uniqueNo: 6,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
    name: 'Kiran Chandra',
    role: 'Software Developer',
  },
  {
    uniqueNo: 7,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
    name: 'Preethi Neela',
    role: 'Software Developer',
  },
  {
    uniqueNo: 8,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'Sravanthi',
    role: 'Software Developer',
  },
  {
    uniqueNo: 9,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'Bhagya Sri',
    role: 'Software Developer',
  },
  {
    uniqueNo: 10,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'Martha Jones',
    role: 'Software Developer',
  },
    {
    uniqueNo: 11,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'Praneetha',
    role: 'Software Developer',
  },
]

class App extends Component{

  state = {
    searchInput: "",
    usersDetailsList: initialUsersDetailsList,
    }

  onChangeSearchInput = (event) => {
    this.setState({ searchInput: event.target.value })
  }

  onDeleteUser = (uniqueNo) => {
    const { usersDetailsList } = this.state
    const filteredUsersDetailsList = usersDetailsList.filter(eachUser => eachUser.uniqueNo !== uniqueNo)

    this.setState({ usersDetailsList: filteredUsersDetailsList })
  }
  
  render() {
    const { searchInput, usersDetailsList } = this.state
    const searchResults = usersDetailsList.filter(eachUser => eachUser.name.includes(searchInput))

    // console.log(searchInput);
    return (
      <div className='app-container'>
        <h1 className='title'>Users List</h1>
        <input type='search' className='search-bar' onChange={this.onChangeSearchInput} value={searchInput} placeholder='Search by name '/>
        <ul className='list-container'>
          {searchResults.map(eachUser => (
            <UserProfile userDetails={eachUser} key={eachUser.uniqueNo} deleteUser={this.onDeleteUser}/>
          ))}
        </ul>
      </div>
    )
  }
}

export default App