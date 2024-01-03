import { Component } from 'react';
import './index.css'


const initialState = {
    isTimerRunning: false,
    timeElapsedInSeconds: 0,
    timerLimitInMinutes: 25,
}
class DigitalTimer extends Component { 

    state = initialState

    
    onIncreaseTimerLimitInMinutes = () => {
        this.setState(prevState => ({
            timerLimitInMinutes: prevState.timerLimitInMinutes + 1
        }))
    }

    onDecreaseTimerLimitInMinutes = () => { 
        const { timerLimitInMinutes } = this.state;

        if (timerLimitInMinutes > 1) {
            this.setState(prevState => ({
                timerLimitInMinutes: prevState.timerLimitInMinutes - 1
            }))  
        }
    }

    renderTimerLimitController = () => {
        const { timerLimitInMinutes, timeElapsedInSeconds } = this.state
        const isButtonsDisabled = timeElapsedInSeconds > 0

        return (
            <div className='timer-limit-controller-container'>
                <p className='limit-label'>Set Timer Limit</p>
                <div className='timer-limit-controller-btn-container'>
                    <button
                        className='limit-controller-button'
                        disabled={isButtonsDisabled}
                        onClick={this.onDecreaseTimerLimitInMinutes}
                    >
                        -
                    </button>

                    <div className='limit-label-and-value-container'>
                        <p className='limit-value'>{timerLimitInMinutes}</p>
                    </div>

                    <button
                        className='limit-controller-button'
                        disabled={isButtonsDisabled}
                        onClick={this.onIncreaseTimerLimitInMinutes}
                    >
                        +
                    </button>
                    
                </div>
            </div>
        )
    }

    clearTimerInterval = () => {
        clearInterval(this.intervalID)
    }

    onResetTimer = () => {
        this.setState(initialState)
        this.clearTimerInterval()
    }

    incrementTimeElapsedInSeconds = () => {
        const { timerLimitInMinutes, timeElapsedInSeconds } = this.state
        const isTimerCompleted = timeElapsedInSeconds === timerLimitInMinutes * 60

        if (isTimerCompleted) {
            this.clearTimerInterval()
            this.setState({ isTimerRunning: false })
        } else {
            this.setState(prevState => ({ timeElapsedInSeconds: prevState.timeElapsedInSeconds + 1 }))
        }
    }

    onStartOrPauseTimer = () => {
        const { isTimerRunning, timeElapsedInSeconds, timerLimitInMinutes } = this.state
        const isTimerCompleted = timeElapsedInSeconds === timerLimitInMinutes * 60

        if (isTimerCompleted) {
            this.setState({ timeElapsedInSeconds: 0 })
        }
        if (isTimerRunning) { 
            this.clearTimerInterval()
        } else {
            this.intervalID = setInterval(this.incrementTimeElapsedInSeconds, 1000)
        }
        this.setState(prevState => ({ isTimerRunning: !prevState.isTimerRunning }))
    }


    renderTimerController = () => {
        const { isTimerRunning } = this.state
        const startOrPauseImageUrl = isTimerRunning ? `https://assets.ccbp.in/frontend/react-js/pause-icon-img.png` : `https://assets.ccbp.in/frontend/react-js/play-icon-img.png`
        const startOrPauseAltText = isTimerRunning ? 'pause icon' : 'play icon'

        return (
            <div className='timer-controller-container'>
                <button
                    className='timer-controller-button'
                    onClick={this.onStartOrPauseTimer}
                    type='button'>
                    <img src={startOrPauseImageUrl} alt={startOrPauseAltText} className='timer-controller-icon' />
                    <p className='timer-controller-label'>{isTimerRunning ? 'Pause' : 'Start'}</p>
                </button>
                <button
                    className='timer-controller-button'
                    onClick={this.onResetTimer}
                    type='button'>
                    <img src='https://assets.ccbp.in/frontend/react-js/reset-icon-img.png' alt='reset icon' className='timer-controller-icon' />
                    <p className='timer-controller-label'>Reset</p>
                </button>
            </div>
        )
    }


    getElapsedSecondsInTimeFormat = () => {
        const { timeElapsedInSeconds, timerLimitInMinutes } = this.state
        const totalRemainingSeconds = timerLimitInMinutes * 60 - timeElapsedInSeconds
        const minutes = Math.floor(totalRemainingSeconds / 60)
        const seconds = Math.floor(totalRemainingSeconds % 60)
        const StringifiedMinutes = minutes > 9 ? minutes : `0${minutes}`
        const StringifiedSeconds = seconds > 9 ? seconds : `0${seconds}`

        return `${StringifiedMinutes}:${StringifiedSeconds}`
    }

    render() {
        const { isTimerRunning } = this.state
        const labelText = isTimerRunning ? 'Running' : 'Paused'

        return (
            <div className='bg-container'>
                <h1 className='heading'>Digital Timer</h1>
                <div className='timer-bg-container'>
                    <div className='timer-container'>
                        <div className='timer'>
                            <h1 className='elapsed-time'>
                                {this.getElapsedSecondsInTimeFormat()}
                            </h1>
                            <p className='timer-state'>{labelText}</p>
                        </div>
                    </div>
                    <div className='controls-container'>
                        {this.renderTimerLimitController()}
                        {this.renderTimerController()}
                    </div>
                </div>
            </div>
        )
    }
}


export default DigitalTimer;