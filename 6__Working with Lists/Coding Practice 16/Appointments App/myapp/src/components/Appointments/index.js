import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid'
import { format } from 'date-fns'

import AppointmentItem from '../AppointmentItem'

import './index.css'

class Appointments extends Component { 
  state = {
    appointmentsList: [],
    titleInput: '',
    dateInput: '',
    isFilterActive : false,
  }

  getFilteredAppointmentsList = () => {
    const { appointmentsList, isFilterActive } = this.state
    
    if (isFilterActive) { 
      return appointmentsList.filter(eachAppointment => eachAppointment.isStarred === true)
    }
    return appointmentsList
  }

  onAddAppointment = event => {
    event.preventDefault();
    const { titleInput, dateInput } = this.state
    const formattedDate = dateInput ? format(new Date(dateInput), 'dd MMMM yyyy, EEEE') : ''

    const newAppointment = {
      id: uuidv4(),
      title: titleInput,
      date: formattedDate,
      isStarred: false, 
    }

    this.setState(prevState => ({
      appointmentsList: [...prevState.appointmentsList, newAppointment],
      titleInput: '',
      dateInput: '',
    }))
  }

  onChangeInputTitle = event => {
    this.setState({titleInput: event.target.value})
  }

  onChangeDateInput = event => {
    this.setState({dateInput: event.target.value})
  }

  toggleIsStarred = id => {
    this.setState(prevState => ({
      appointmentsList: prevState.appointmentsList.map(eachAppointment => {
        if (id === eachAppointment.id) { 
          return {...eachAppointment, isStarred: !eachAppointment.isStarred}
        }
        return eachAppointment
      }),
    }))
  }

  onFilter = () => {
    const {isFilterActive} = this.state
    this.setState({isFilterActive: !isFilterActive})
  }


  render() {
    const { titleInput, dateInput, isFilterActive } = this.state
    const filterClassName = isFilterActive ? 'filter-enabled' : 'filter-disabled'
    const filteredAppointmentsList = this.getFilteredAppointmentsList()
    return (
      <div className='background'>
        <div className='card-container'>
          <div className='appointments-container'>
            <div className='add-appointment-container'>
              <form className='form' onSubmit={this.onAddAppointment}>
                <h1 className='heading'>Add Appointment</h1>
                <label htmlFor='title' className='label'>TITLE</label>
                <input type='text' id='title' className='input' value={titleInput} placeholder='Title' onChange={this.onChangeInputTitle} />
                
                <label className='label' htmlFor='date'>DATE</label>
                <input type='date' id='date' className='input' value={dateInput} onChange={this.onChangeDateInput} />
                
                <button type='submit' className='add-button'>Add</button>
              </form>
              <img src='https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png' alt='appointments' className='appointments-image' />
            </div>
            <hr className='hr' />
            <div className='header-with-filter-container'>
              <h1 className='appointments-heading'>Appointments</h1>
              <button type='button' className={`filter-style ${filterClassName}`} onClick={this.onFilter}>
                Starred
              </button>
            </div>
            <ul className='appointments-list'>
              {filteredAppointmentsList.map(eachAppointment => (
                <AppointmentItem key={eachAppointment.id} appointmentDetails={eachAppointment} toggleIsStarred={this.toggleIsStarred} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Appointments