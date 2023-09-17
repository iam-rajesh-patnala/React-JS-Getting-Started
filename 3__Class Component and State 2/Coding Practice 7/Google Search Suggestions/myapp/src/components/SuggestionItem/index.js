import './index.css'

const SuggestionItem = props => {
  const { eachItem, updateSearchInputField } = props
  const { suggestion} = eachItem
  
  const onArrowClick = () => {
    updateSearchInputField(suggestion)
  }

return (
  <li className='suggestion-item'>
    <p className='suggestion'>{suggestion}</p>
    <button type='button' className='btn' onClick={onArrowClick}>
      <img src='https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png' alt='arrow icon' className='arrow'/>
    </button>
  </li>
  )
}

export default SuggestionItem