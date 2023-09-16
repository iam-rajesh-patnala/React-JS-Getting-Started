import { Component } from 'react';
import DenominationItem from '../DenominationItem';
import './index.css'

class CashWithdrawal extends Component {
  state = {
    initialBalance: 2000,
  }

  onClickWithdraw = value => {
    this.setState(previousState => ({
      initialBalance: previousState.initialBalance - value
    }))
  }

  render() {
    const { denominationsList } = this.props
    const { initialBalance } = this.state
    const name = 'Sarah Williams'
    const initial = name.slice(0, 1)

    return (
      <div className='bg-container'>
        <div className='card-container'>
          <div className='profile-container'>
            <div className='profile-circle'>
              <p className='profile-img'>{initial}</p>
            </div>
            <p className='profile-name'>{name}</p>
          </div>
          <div className='balance-container'>
            <p className='balance-title'>Your Balance</p>
            <p className='balance'>{initialBalance}
            <br />
            <span className='currency'>In Rupees</span>
            </p>
          </div>
            <p className='withdraw-title'>Withdraw</p>
            <p className='withdraw-description'>CHOOSE SUM (IN RUPEES)</p>
            <ul className='denominations-container'>
              {denominationsList.map((denomination) => (
                <DenominationItem key={denomination.id} denomination={denomination} cashWithdrawal={this.onClickWithdraw} />
              ))}
            </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal