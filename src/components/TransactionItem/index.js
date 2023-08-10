import './index.css'

const TransactionItem = props => {
  const {details} = props
  const {title, amount, type} = details

  return (
    <li>
      <p>{title}</p>
      <p>{amount}</p>
      <p>{type}</p>
    </li>
  )
}
export default TransactionItem
