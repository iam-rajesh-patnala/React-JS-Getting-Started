import './index.css'

const SearchHistoryItem = props => {
  const { initialHistoryList, onDeleteHistoryItem } = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = initialHistoryList

  const deleteHistory = () => {
    onDeleteHistoryItem(id)
  }

  return (
    <li className='history-item'>
      <div className='list-item-container'>
        <p className='time'>{timeAccessed}</p>
        <img src={logoUrl} alt='domain logo' className='domain-logo' />
        <p className='title'>{title}</p>
        <p className='domain-url'>{domainUrl}</p>
      </div>
      <div>
        <button className='btn' type='button' data-testid="delete">
            <img src="https://assets.ccbp.in/frontend/react-js/delete-img.png" alt='delete' className='delete-icon' onClick={deleteHistory}/>
        </button>
      </div>
    </li>
  )
}

export default SearchHistoryItem