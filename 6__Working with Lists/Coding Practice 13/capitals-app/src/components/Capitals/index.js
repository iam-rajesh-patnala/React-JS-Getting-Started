import { Component } from 'react'
import './index.css'


const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here

class Capitals extends Component {

  state = {
    activeCapitalId : countryAndCapitalsList[0].id
  }

  onChangeCaptial = event => {
    this.setState({ activeCapitalId: event.target.value})
  }

  getCountry = activeCapitalId => {
    const activeCountryAndCapital = countryAndCapitalsList.find(
      eachCapital => eachCapital.id === activeCapitalId
    )
    return activeCountryAndCapital.country
  }

  render() {
    const { activeCapitalId } = this.state
    const country = this.getCountry(activeCapitalId)

    return (
      <div className='bg-container'>
        <div className='card-container'>
          <h1 className='heading'>Countries And Capitals</h1>
          <div className='question-container'>
            <select className='capital-select' onChange={this.onChangeCaptial} value={activeCapitalId}>
              {countryAndCapitalsList.map(eachCapital => (
                <option key={eachCapital.id} value={eachCapital.id} className='option'>
                  {eachCapital.capitalDisplayText}
                </option>
            )) }
            </select>
            <p className='question'>is capital of which country?</p>
          </div>
          <p className='country'>{country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals