import './index.css'

const DenominationItem = props => {
  const { denomination, cashWithdrawal } = props
  const { value } = denomination

  const buttonOnClick = () => {
    cashWithdrawal(value)
  }

  return (
    <li className='denomination-item'>
      <button className='btn' type='button' onClick={buttonOnClick}>{value}</button>
    </li>
  )
}

export default DenominationItem