import './index.css'
import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Testing

class MoneyManager extends Component {
  state = {
    title: '',
    amount: '',
    type: 'INCOME',
    transactionsList: [],
    income: 0,
    balance: 0,
    expense: 0,
  }

  onChangingInput = event => {
    this.setState({title: event.target.value})
  }

  onChangingAmount = event => {
    this.setState({amount: event.target.value})
  }

  onChangingType = event => {
    this.setState({type: event.target.value})
  }

  onSubmitting = event => {
    event.preventDefault()
    const {title, amount, type} = this.state
    if (title !== '' && amount !== '') {
      if (type === 'INCOME') {
        this.setState(prevState => ({
          transactionsList: [
            ...prevState.transactionsList,
            {id: uuidv4(), title, amount, type},
          ],
          balance: prevState.balance + parseInt(amount),
          income: prevState.income + parseInt(amount),
          title: '',
          amount: '',
          type: 'INCOME',
        }))
      } else {
        this.setState(prevState => ({
          transactionsList: [
            ...prevState.transactionsList,
            {id: uuidv4(), title, amount, type},
          ],
          balance: prevState.balance - parseInt(amount),
          expense: prevState.expense + parseInt(amount),
          title: '',
          amount: '',
          type: 'INCOME',
        }))
      }
    }
  }

  deleteTransaction = id => {
    const {transactionsList} = this.state
    const deletedObj = transactionsList.filter(eachObj => eachObj.id === id)
    if (deletedObj[0].type === 'INCOME') {
      this.setState(prevState => ({
        transactionsList: prevState.transactionsList.filter(
          eachObj => eachObj.id !== id,
        ),
        income: prevState.income - parseInt(deletedObj[0].amount),
        balance: prevState.balance - parseInt(deletedObj[0].amount),
      }))
    } else {
      this.setState(prevState => ({
        transactionsList: prevState.transactionsList.filter(
          eachObj => eachObj.id !== id,
        ),
        expense: prevState.expense - parseInt(deletedObj[0].amount),
        balance: prevState.balance + parseInt(deletedObj[0].amount),
      }))
    }
  }

  render() {
    const {
      transactionsList,
      title,
      amount,
      type,
      income,
      expense,
      balance,
    } = this.state
    console.log(transactionsList)
    return (
      <div className="bg">
        <div className="card">
          <div className="name-container">
            <h1 className="heading">Hi, Richard</h1>
            <p className="greeting">
              Welcome back to your <span>Money Manager</span>
            </p>
          </div>
          <div className="money-details-container">
            <MoneyDetails details={{income, expense, balance}} />
          </div>
          <div className="details-container">
            <div className="transaction-container">
              <h1 className="transaction-heading">Add Transaction</h1>
              <form onSubmit={this.onSubmitting}>
                <div className="input-container">
                  <label htmlFor="title">TITLE</label>
                  <input
                    type="text"
                    id="title"
                    className="input-element"
                    onChange={this.onChangingInput}
                    value={title}
                  />
                </div>
                <div className="input-container">
                  <label htmlFor="amount">AMOUNT</label>
                  <input
                    type="text"
                    id="amount"
                    className="input-element"
                    onChange={this.onChangingAmount}
                    value={amount}
                  />
                </div>
                <div className="input-container">
                  <label htmlFor="type">TYPE</label>
                  <select
                    id="type"
                    className="input-element"
                    onChange={this.onChangingType}
                    value={type}
                  >
                    <option value={transactionTypeOptions[0].optionId}>
                      Income
                    </option>
                    <option value={transactionTypeOptions[1].optionId}>
                      Expenses
                    </option>
                  </select>
                  <button type="submit" className="add-button">
                    Add
                  </button>
                </div>
              </form>
            </div>
            <div className="history-container">
              <h1 className="transaction-heading">History</h1>
              <div className="transaction-style">
                <div className="con-1">
                  <p className="title-text">Title</p>
                  <p className="title-text">Amount</p>
                  <p className="title-text">Type</p>
                </div>
              </div>
              <ul>
                {transactionsList.map(eachObj => (
                  <TransactionItem
                    key={eachObj.id}
                    details={eachObj}
                    deleteTransaction={this.deleteTransaction}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
