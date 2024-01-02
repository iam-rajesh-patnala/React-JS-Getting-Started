import { Component } from 'react';

import './index.css'

class Clock extends Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         date: new Date(),
    //     }
    // }      //Old approach

    state = {
        date: new Date(),
    }

    componentDidMount() {
        // console.log('ComponentDidMount called...')
        this.timerID = setInterval(this.tick, 1000)

    }

    componentWillUnmount() {
        // console.log('ComponentWillUnmount called...')
        clearInterval(this.timerID)
    }

    tick = () => {
        this.setState({date: new Date()})
    }

    render() {
        const { date } = this.state
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
        
        return (
            <div className='clock-container'>
                <h1 className='heading'>Clock</h1>
                <p className='time'>{date.toLocaleTimeString()}</p>
                <p className='date'>{`${date.toLocaleDateString()} - ${days[date.getDay()]}`}</p>
            </div>
        )
    }
}

export default Clock