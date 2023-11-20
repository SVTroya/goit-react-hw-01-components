import css from "./TransactionHistory.module.css"
import clsx from "clsx"

export function TransactionHistory({ transactions }) {
  return (
    <table className={clsx(css.transactionHistory)}>
      <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
      </thead>

      <tbody>
      {transactions.map(({ id, type, amount, currency }) => (
        <tr key={id}>
          <td>{type}</td>
          <td>{amount}</td>
          <td>{currency}</td>
        </tr>
      ))
      }
      </tbody>
    </table>
  )
}
