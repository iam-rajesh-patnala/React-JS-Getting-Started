import { Component } from 'react';

import './index.css'

const PLUS_IMAGE = "https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png"
const MINUS_IMAGE = "https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png"

class FaqItem extends Component{
    state = {
        isActive : false,
    }

    renderAnswer = () => {
        const { isActive } = this.state
        const { details } = this.props
        const { answerText } = details

        if (isActive) {
            return (
                <div>
                    <hr className='horizontal-line'/>
                    <p className='answer'>{answerText}</p>
                </div>
            )
        }

        return null
    }


    onToggleIsActive = () => {
        this.setState(prevState => ({
            isActive: !prevState.isActive,
        }))
    }

    renderActiveImage = () => {
        const { isActive } = this.state
        const image = isActive ? MINUS_IMAGE : PLUS_IMAGE
        const altText = isActive ? "minus" : "plus"

        return (
            <button type="button" className="toggle-button" onClick={this.onToggleIsActive}>
                <img className='icon' src={image} alt={altText} />
            </button>
        )
    }

    render() {
        const { details } = this.props
        const { questionText } = details

        return (
            <li className='faq-item'>
                <div className='question-container'>
                    <h1 className='question'>{questionText}</h1>
                    {this.renderActiveImage()}
                </div>
                {this.renderAnswer()}
            </li>
        )
    }
}

export default FaqItem;