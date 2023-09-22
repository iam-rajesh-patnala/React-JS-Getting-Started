import './index.css'

const TabItem = props => {
  const {tabDetails, onTabClick, isActive} = props
  const {displayText, tabId} = tabDetails

  const onClickTabItem = () => {
    onTabClick(tabId)
  }

  const isActiveClass = isActive ? 'active-tab-btn' : ''
  
  return (
    <li className="tab-item-container ">
      <button type="button" className={`tab-btn ${isActiveClass}`} onClick={onClickTabItem}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
