import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TransactionItem from '../TransactionItem';
import MoneyDetails from '../MoneyDetails';
import './index.css';


const transactionTypeOptions = [
    {
        optionId: 'INCOME',
        displayText: 'Income',
    },
    {
        optionId: 'EXPENSES',
        displayText: 'Expenses',
    }
]
class MoneyManager extends Component { 
    state = {
        transactionsHistory: [],
        titleInput: '',
        amountInput: '',
        optionId: transactionTypeOptions[0].optionId,
    }

    onDeleteTransaction = id => {
        const { transactionsHistory } = this.state
        const updatedTransactionHistory = transactionsHistory.filter(
            eachTransaction => id !== eachTransaction.id)
        
        this.setState({ transactionsHistory: updatedTransactionHistory })
    }

    onAddTransaction = event => {
        event.preventDefault()
        const { titleInput, amountInput, optionId } = this.state
        const typeOption = transactionTypeOptions.find(eachTransaction => eachTransaction.optionId === optionId)
        const { displayText } = typeOption
        
        const newTransaction = {
            id: uuidv4(),
            title: titleInput,
            amount: parseInt(amountInput),
            type: displayText,
        }

        this.setState(prevState => ({
            transactionsHistory: [...prevState.transactionsHistory, newTransaction],
            titleInput: '',
            amountInput: '',
            optionId: transactionTypeOptions[0].optionId,
        }))
    }

    getBalanceAmount = () => {
        const { transactionsHistory } = this.state
        let balanceAmount = 0
        let incomeAmount = 0
        let expensesAmount = 0

        transactionsHistory.forEach(eachTransaction => {
            if (eachTransaction.type === transactionTypeOptions[0].displayText) { 
                incomeAmount += eachTransaction.amount
            } else {
                expensesAmount += eachTransaction.amount
            }
        })

        balanceAmount = incomeAmount - expensesAmount
        return balanceAmount
    }
    
    getIncomeAmount = () => { 
        const { transactionsHistory } = this.state
        let incomeAmount = 0
        
        transactionsHistory.forEach(eachTransaction => {
            if (eachTransaction.type === transactionTypeOptions[0].displayText) { 
                incomeAmount += eachTransaction.amount
            }
        })
        
        return incomeAmount
    }

    getExpensesAmount = () => { 
        const { transactionsHistory } = this.state
        let expensesAmount = 0

        transactionsHistory.forEach(eachTransaction => {
            if (eachTransaction.type === transactionTypeOptions[1].displayText) { 
                expensesAmount += eachTransaction.amount
            }
        })

        return expensesAmount
    }


    onChangeTitleInput = event => {
        this.setState({titleInput: event.target.value})
    }

    onChangeAmountInput = event => {
        this.setState({amountInput: event.target.value})
    }

    onChangeOptionId = event => {
        this.setState({optionId: event.target.value})
    }




    render() {
        const { titleInput, amountInput, optionId, transactionsHistory } = this.state
        
        const balanceAmount = this.getBalanceAmount()
        const incomeAmount = this.getIncomeAmount()
        const expensesAmount = this.getExpensesAmount()

        return (
            <div className='app-container'>
                <div className='responsive-container'>
                    <div className='header-container'>
                        <h1 className='heading'>Hi, Richard</h1>
                        <p className='description'>Welcome back to your <span className='money-manager'>Money Manager</span></p>
                    </div>
                    <MoneyDetails
                        balanceAmount={balanceAmount}
                        incomeAmount={incomeAmount}
                        expensesAmount={expensesAmount}
                    />
                    <div className='transaction-container'>
                        <form className='transaction-form' onSubmit={this.onAddTransaction}>
                            <h1 className='transaction-heading'>Add Transaction</h1>
                            <label className='input-label' htmlFor='title'>TITLE</label>
                            <input type='text' id='title' placeholder='TITLE' value={titleInput} onChange={this.onChangeTitleInput} className='input'/>
                            
                            <label className='input-label' htmlFor='amount'>AMOUNT</label>
                            <input className='input' id='amount' type='text' placeholder='Amount' value={amountInput} onChange={this.onChangeAmountInput} />
                            
                            <label className='input-label' htmlFor='select'>TYPE</label>
                            <select id='select' className='input' value={optionId} onChange={this.onChangeOptionId}>
                                {transactionTypeOptions.map(eachOption => (
                                    <option key={eachOption.optionId} value={eachOption.optionId}>{eachOption.displayText}</option>
                                ))}
                            </select>
                            <button type='submit' className='submit-btn'>
                                Add
                            </button>
                        </form>
                        <div className='transaction-history'>
                            <h1 className='history-heading'>History</h1>
                            <div className='transactions-table-container'>
                                <ul className='transactions-table'>
                                    <li className='table-header'>
                                        <p className='table-header-cell'>Title</p>
                                        <p className='table-header-cell'>Amount</p>
                                        <p className='table-header-cell'>Type</p>
                                    </li>
                                    {transactionsHistory.map(eachTransaction => (
                                        <TransactionItem key={eachTransaction.id} transactionDetails = {eachTransaction} deleteTransaction={this.onDeleteTransaction} />
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MoneyManager;