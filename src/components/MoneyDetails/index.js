// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {details} = props
  const {income, expense, balance} = details
  return (
    <>
      <div className="balance-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          className="icon"
          alt="balance"
        />
        <div className="amount-container">
          <p className="category-text">Your Balance</p>
          <p className="amount" data-testid="balanceAmount">
            Rs {balance}
          </p>
        </div>
      </div>
      <div className="income-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          className="icon"
          alt="income"
        />
        <div className="amount-container">
          <p className="category-text">Your Income</p>
          <p className="amount" data-testid="incomeAmount">
            Rs {income}
          </p>
        </div>
      </div>
      <div className="expenses-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          className="icon"
          alt="expenses"
        />
        <div className="amount-container">
          <p className="category-text">Your Expenses</p>
          <p className="amount" data-testid="expensesAmount">
            Rs {expense}
          </p>
        </div>
      </div>
    </>
  )
}

export default MoneyDetails
