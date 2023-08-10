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

class MoneyManager extends Component {
  state = {moneyDetailsList: [], title: '', amount: '', type: ''}

  addTransaction = event => {
    event.preventDefault()
    const {title, amount, type} = this.state
    const newTransaction = {
      id: uuidv4(),
      title,
      amount,
      type,
    }

    this.setState(prevState => ({
      moneyDetailsList: [...prevState.moneyDetailsList, newTransaction],
    }))
  }

  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  onChangeAmount = event => {
    this.setState({amount: event.target.value})
  }

  onChangeType = event => {
    this.setState({type: event.target.value})
  }

  render() {
    const {moneyDetailsList, title, amount, type} = this.state
    return (
      <div>
        <div>
          <h1>Hi Richard</h1>
          <p>Welcome back to your money manager</p>
          <div>
            <MoneyDetails />
          </div>
          <div>
            <div>
              <form onSubmit={this.addTransaction}>
                <h1>Add Transaction</h1>
                <label htmlFor="title">TITLE</label>
                <br />
                <input
                  id="title"
                  placeholder="TITLE"
                  onChange={this.onChangeTitle}
                />
                <br />
                <label htmlFor="amount">AMOUNT</label>
                <br />
                <input
                  id="amount"
                  placeholder="AMOUNT"
                  onChange={this.onChangeAmount}
                />
                <br />
                <label htmlFor="type">TYPE</label>
                <br />
                <select id="type" onChange={this.onChangeType}>
                  <option value="Income">Income</option>
                  <option value="Expenses">Expenses</option>
                </select>
                <br />
                <button type="submit">Add</button>
              </form>
            </div>
            <div>
              <h1>History</h1>
              <div className="container">
                <p className="para">Title</p>
                <p className="para">Amount</p>
                <p className="para">Type</p>
              </div>
              <ul>
                {moneyDetailsList.map(eachItem => (
                  <TransactionItem details={eachItem} key={eachItem.id} />
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
