// Write your code here
import './index.css'

const TransactionItem = props => {
  const {details, deleteTransaction} = props
  const {id, title, amount, type} = details

  const deleteItem = () => {
    deleteTransaction(id)
  }

  return (
    <li key={id} className="transaction-item">
      <h1 className="text">{title}</h1>
      <h1 className="text">{amount}</h1>
      <h1 className="text">{type}</h1>
      <button className="delete-button" onClick={deleteItem}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="icon"
          data-testid="delete"
        />
      </button>
    </li>
  )
}

export default TransactionItem
